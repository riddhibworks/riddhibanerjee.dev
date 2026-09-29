package dev.riddhibanerjee.portfolio.controller;

import dev.riddhibanerjee.portfolio.dto.SkillCategoryGroupDto;
import dev.riddhibanerjee.portfolio.service.SkillService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/skills")
@Tag(name = "Skills", description = "Endpoints for categorized skills and proficiencies")
public class SkillController {

    private final SkillService skillService;

    public SkillController(SkillService skillService) {
        this.skillService = skillService;
    }

    @GetMapping
    @Operation(summary = "Get categorized skills", description = "Retrieves skills grouped by categories with proficiency levels")
    public ResponseEntity<List<SkillCategoryGroupDto>> getCategorizedSkills() {
        return ResponseEntity.ok(skillService.getCategorizedSkills());
    }
}
