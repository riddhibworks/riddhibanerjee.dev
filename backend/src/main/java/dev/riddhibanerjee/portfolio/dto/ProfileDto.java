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
public class ProfileDto {
    private Long id;
    private String name;
    private String title;
    private String headline;
    private String bio;
    private String avatarUrl;
    private String location;
    private String email;
    private String githubUrl;
    private String linkedinUrl;
    private String twitterUrl;
    private String resumeUrl;
    private List<String> quickFacts;
}
