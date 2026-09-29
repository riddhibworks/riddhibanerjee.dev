package dev.riddhibanerjee.portfolio.controller;

import dev.riddhibanerjee.portfolio.dto.ProjectDto;
import dev.riddhibanerjee.portfolio.service.ProjectService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@Tag(name = "Projects", description = "Endpoints for featured and portfolio projects")
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping
    @Operation(summary = "Get all projects", description = "Retrieves all portfolio projects ordered by display priority")
    public ResponseEntity<List<ProjectDto>> getAllProjects() {
        return ResponseEntity.ok(projectService.getAllProjects());
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get project details by ID", description = "Retrieves in-depth details for a single project")
    public ResponseEntity<ProjectDto> getProjectById(
            @Parameter(description = "Numeric ID of the project", example = "1")
            @PathVariable Long id) {
        return ResponseEntity.ok(projectService.getProjectById(id));
    }
}
