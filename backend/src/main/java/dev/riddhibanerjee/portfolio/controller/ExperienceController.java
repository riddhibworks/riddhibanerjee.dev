package dev.riddhibanerjee.portfolio.controller;

import dev.riddhibanerjee.portfolio.dto.ExperienceDto;
import dev.riddhibanerjee.portfolio.service.ExperienceService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/experience")
@Tag(name = "Experience", description = "Endpoints for work experience and education timeline")
public class ExperienceController {

    private final ExperienceService experienceService;

    public ExperienceController(ExperienceService experienceService) {
        this.experienceService = experienceService;
    }

    @GetMapping
    @Operation(summary = "Get experience timeline", description = "Retrieves work history and education milestones in chronological order")
    public ResponseEntity<List<ExperienceDto>> getExperience() {
        return ResponseEntity.ok(experienceService.getAllExperiences());
    }
}
