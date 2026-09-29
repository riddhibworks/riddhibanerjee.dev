package dev.riddhibanerjee.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ExperienceDto {
    private Long id;
    private String role;
    private String company;
    private String companyUrl;
    private String location;
    private String type; // "WORK" or "EDUCATION"
    private String startDate;
    private String endDate;
    private boolean currentRole;
    private String description;
    private int displayOrder;
    private List<String> accomplishments;
    private List<String> techStack;
}
