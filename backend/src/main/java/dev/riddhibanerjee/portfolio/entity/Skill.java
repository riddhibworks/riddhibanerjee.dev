package dev.riddhibanerjee.portfolio.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "skills")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Skill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String category; // Frontend, Backend & APIs, Tools & DevOps, Design & Architecture

    @Column(nullable = false)
    private int proficiency; // 1-100

    private String iconName;

    @Builder.Default
    private boolean featured = false;

    @Builder.Default
    private int displayOrder = 0;
}
