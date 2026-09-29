package dev.riddhibanerjee.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SkillDto {
    private Long id;
    private String name;
    private String category;
    private int proficiency;
    private String iconName;
    private boolean featured;
    private int displayOrder;
}
