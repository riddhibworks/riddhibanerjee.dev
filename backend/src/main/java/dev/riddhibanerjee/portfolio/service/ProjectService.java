package dev.riddhibanerjee.portfolio.service;

import dev.riddhibanerjee.portfolio.dto.ProjectDto;
import dev.riddhibanerjee.portfolio.entity.Project;
import dev.riddhibanerjee.portfolio.exception.ResourceNotFoundException;
import dev.riddhibanerjee.portfolio.repository.ProjectRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<ProjectDto> getAllProjects() {
        return projectRepository.findAllByOrderByDisplayOrderAscIdAsc().stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    public ProjectDto getProjectById(Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found with id: " + id));
        return mapToDto(project);
    }

    private ProjectDto mapToDto(Project p) {
        return ProjectDto.builder()
                .id(p.getId())
                .title(p.getTitle())
                .subtitle(p.getSubtitle())
                .description(p.getDescription())
                .longDescription(p.getLongDescription())
                .imageUrl(p.getImageUrl())
                .githubUrl(p.getGithubUrl())
                .liveDemoUrl(p.getLiveDemoUrl())
                .featured(p.isFeatured())
                .displayOrder(p.getDisplayOrder())
                .techStack(p.getTechStack() != null ? new ArrayList<>(p.getTechStack()) : new ArrayList<>())
                .highlights(p.getHighlights() != null ? new ArrayList<>(p.getHighlights()) : new ArrayList<>())
                .build();
    }
}
