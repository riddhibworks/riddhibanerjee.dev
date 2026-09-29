package dev.riddhibanerjee.portfolio.service;

import dev.riddhibanerjee.portfolio.dto.ExperienceDto;
import dev.riddhibanerjee.portfolio.entity.Experience;
import dev.riddhibanerjee.portfolio.repository.ExperienceRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class ExperienceService {

    private final ExperienceRepository experienceRepository;

    public ExperienceService(ExperienceRepository experienceRepository) {
        this.experienceRepository = experienceRepository;
    }

    public List<ExperienceDto> getAllExperiences() {
        return experienceRepository.findAllByOrderByDisplayOrderAscIdAsc().stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    private ExperienceDto mapToDto(Experience e) {
        return ExperienceDto.builder()
                .id(e.getId())
                .role(e.getRole())
                .company(e.getCompany())
                .companyUrl(e.getCompanyUrl())
                .location(e.getLocation())
                .type(e.getType() != null ? e.getType().name() : "WORK")
                .startDate(e.getStartDate())
                .endDate(e.getEndDate())
                .currentRole(e.isCurrentRole())
                .description(e.getDescription())
                .displayOrder(e.getDisplayOrder())
                .accomplishments(e.getAccomplishments() != null ? new ArrayList<>(e.getAccomplishments()) : new ArrayList<>())
                .techStack(e.getTechStack() != null ? new ArrayList<>(e.getTechStack()) : new ArrayList<>())
                .build();
    }
}
