package dev.riddhibanerjee.portfolio.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "profiles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String title;

    @Column(length = 500)
    private String headline;

    @Column(length = 2000, nullable = false)
    private String bio;

    private String avatarUrl;
    private String location;
    private String email;
    private String githubUrl;
    private String linkedinUrl;
    private String twitterUrl;
    private String leetcodeUrl;
    private String resumeUrl;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "profile_quick_facts", joinColumns = @JoinColumn(name = "profile_id"))
    @Column(name = "fact_text")
    @Builder.Default
    private List<String> quickFacts = new ArrayList<>();
}
