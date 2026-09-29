package dev.riddhibanerjee.portfolio.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "experiences")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Experience {

    public enum ExperienceType {
        WORK,
        EDUCATION
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "job_role", nullable = false)
    private String role;

    @Column(nullable = false)
    private String company;

    private String companyUrl;
    private String location;

    @Enumerated(EnumType.STRING)
    @Column(name = "experience_type", nullable = false)
    private ExperienceType type;

    @Column(nullable = false)
    private String startDate;

    private String endDate;

    @Column(name = "is_current_role")
    @Builder.Default
    private boolean currentRole = false;

    @Column(length = 1000)
    private String description;

    @Builder.Default
    private int displayOrder = 0;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "experience_accomplishments", joinColumns = @JoinColumn(name = "experience_id"))
    @Column(name = "accomplishment_text", length = 500)
    @Builder.Default
    private List<String> accomplishments = new ArrayList<>();

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "experience_tech_stack", joinColumns = @JoinColumn(name = "experience_id"))
    @Column(name = "tech_name")
    @Builder.Default
    private List<String> techStack = new ArrayList<>();
}
