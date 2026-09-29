package dev.riddhibanerjee.portfolio.service;

import dev.riddhibanerjee.portfolio.dto.SkillCategoryGroupDto;
import dev.riddhibanerjee.portfolio.dto.SkillDto;
import dev.riddhibanerjee.portfolio.entity.Skill;
import dev.riddhibanerjee.portfolio.repository.SkillRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class SkillService {

    private final SkillRepository skillRepository;

    public SkillService(SkillRepository skillRepository) {
        this.skillRepository = skillRepository;
    }

    public List<SkillCategoryGroupDto> getCategorizedSkills() {
        List<Skill> allSkills = skillRepository.findAllByOrderByDisplayOrderAscIdAsc();

        // Maintain category order based on first appearance
        Map<String, List<SkillDto>> grouped = new LinkedHashMap<>();
        for (Skill s : allSkills) {
            grouped.computeIfAbsent(s.getCategory(), k -> new ArrayList<>())
                    .add(mapToDto(s));
        }

        return grouped.entrySet().stream()
                .map(entry -> SkillCategoryGroupDto.builder()
                        .category(entry.getKey())
                        .skills(entry.getValue())
                        .build())
                .collect(Collectors.toList());
    }

    public List<SkillDto> getAllSkills() {
        return skillRepository.findAllByOrderByDisplayOrderAscIdAsc().stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    private SkillDto mapToDto(Skill s) {
        return SkillDto.builder()
                .id(s.getId())
                .name(s.getName())
                .category(s.getCategory())
                .proficiency(s.getProficiency())
                .iconName(s.getIconName())
                .featured(s.isFeatured())
                .displayOrder(s.getDisplayOrder())
                .build();
    }
}
