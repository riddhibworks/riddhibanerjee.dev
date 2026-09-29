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
public class ProjectDto {
    private Long id;
    private String title;
    private String subtitle;
    private String description;
    private String longDescription;
    private String imageUrl;
    private String githubUrl;
    private String liveDemoUrl;
    private boolean featured;
    private int displayOrder;
    private List<String> techStack;
    private List<String> highlights;
}
