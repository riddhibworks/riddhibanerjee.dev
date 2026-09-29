package dev.riddhibanerjee.portfolio.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "projects")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    private String subtitle;

    @Column(length = 1000, nullable = false)
    private String description;

    @Column(length = 3000)
    private String longDescription;

    private String imageUrl;
    private String githubUrl;
    private String liveDemoUrl;

    @Builder.Default
    private boolean featured = false;

    @Builder.Default
    private int displayOrder = 0;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "project_tech_stack", joinColumns = @JoinColumn(name = "project_id"))
    @Column(name = "tech_name")
    @Builder.Default
    private List<String> techStack = new ArrayList<>();

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "project_highlights", joinColumns = @JoinColumn(name = "project_id"))
    @Column(name = "highlight_text", length = 500)
    @Builder.Default
    private List<String> highlights = new ArrayList<>();
}
