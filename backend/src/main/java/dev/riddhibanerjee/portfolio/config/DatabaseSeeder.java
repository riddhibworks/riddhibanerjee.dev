package dev.riddhibanerjee.portfolio.config;

import dev.riddhibanerjee.portfolio.entity.*;
import dev.riddhibanerjee.portfolio.repository.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DatabaseSeeder implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(DatabaseSeeder.class);

    private final ProfileRepository profileRepository;
    private final ProjectRepository projectRepository;
    private final ExperienceRepository experienceRepository;
    private final SkillRepository skillRepository;

    public DatabaseSeeder(ProfileRepository profileRepository,
                          ProjectRepository projectRepository,
                          ExperienceRepository experienceRepository,
                          SkillRepository skillRepository) {
        this.profileRepository = profileRepository;
        this.projectRepository = projectRepository;
        this.experienceRepository = experienceRepository;
        this.skillRepository = skillRepository;
    }

    @Override
    public void run(String... args) {
        profileRepository.deleteAll();
        projectRepository.deleteAll();
        experienceRepository.deleteAll();
        skillRepository.deleteAll();

        log.info("Seeding database with updated profile data for Riddhi Bandyopadhyay...");

        seedProfile();
        seedProjects();
        seedExperiences();
        seedSkills();

        log.info("Database seeding complete for Riddhi Bandyopadhyay.");
    }

    private void seedProfile() {
        Profile profile = Profile.builder()
                .name("Riddhi Bandyopadhyay")
                .title("Backend-Focused Full Stack Engineer")
                .headline("Engineering high-availability Spring Boot & Quarkus microservices, AI-powered platforms, and distributed systems.")
                .bio("I am a Backend-Focused Full Stack Engineer with 3+ years of experience building mission-critical distributed systems and modern web applications. Currently at SITA, I architect Spring Boot microservices, rule engines, and passenger verification systems for global Border Management Systems (BMS) and Automated Border Control (ABC) e-Gates integrated with INTERPOL databases. Previously at IBS Software, I engineered cloud-native loyalty APIs for Emirates Airline and China Airlines using Quarkus, Spring Boot, PostgreSQL, and AWS.")
                .avatarUrl("https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80")
                .location("Bengaluru, India")
                .email("riddhib.works@gmail.com")
                .githubUrl("https://github.com/riddhibworks")
                .linkedinUrl("https://www.linkedin.com/in/riddhi-bandyopadhyay/")
                .twitterUrl("")
                .resumeUrl("https://drive.google.com/file/d/1Zfy33-u6X7ub0uFywE1xW9KNvsN7DNQv/view?usp=sharing")
                .quickFacts(List.of(
                        "3+ Years engineering mission-critical microservice architectures",
                        "Creator of HiredAI — Job application & feed aggregation platform",
                        "Designed 10+ Spring Boot services for SITA Border Management & e-Gates",
                        "Optimized Quarkus & Spring Boot APIs reducing latency by 20% for major airlines"
                ))
                .build();

        profileRepository.save(profile);
    }

    private void seedProjects() {
        List<Project> projects = List.of(
                Project.builder()
                        .title("HiredAI")
                        .subtitle("Remote Job Application & Feed Aggregation Platform")
                        .description("HiredAI is a high-performance, full-stack job application and feed aggregation platform designed to streamline remote job hunting. It aggregates real-time job listings across public job boards and custom feeds (RSS, Atom, JSON APIs) into a single unified workspace, matching candidates against job roles using automated resume skill extraction and match scoring algorithms.")
                        .longDescription("HiredAI is a high-performance, full-stack job application and feed aggregation platform designed to streamline remote job hunting. It aggregates real-time job listings across public job boards and custom feeds (RSS, Atom, JSON APIs) into a single unified workspace, matching candidates against job roles using automated resume skill extraction and match scoring algorithms.")
                        .imageUrl("/images/hiredai-preview.jpg")
                        .githubUrl("https://github.com/riddhibworks/HiredAI")
                        .liveDemoUrl("https://hiredai-remote.vercel.app/")
                        .featured(true)
                        .displayOrder(1)
                        .techStack(List.of("React", "TypeScript", "Tailwind CSS", "Next.js", "AI / LLMs", "Spring Boot", "PostgreSQL", "Vercel"))
                        .highlights(List.of(
                                "Aggregates real-time job listings across public job boards and custom feeds (RSS, Atom, JSON APIs) into a single workspace",
                                "Automated resume skill extraction & candidate-job role match scoring algorithms",
                                "Deployed live on Vercel with high-performance feed aggregation API backend"
                        ))
                        .build()
        );

        projectRepository.saveAll(projects);
    }

    private void seedExperiences() {
        List<Experience> experiences = List.of(
                Experience.builder()
                        .role("Software Developer")
                        .company("SITA")
                        .companyUrl("https://www.sita.aero")
                        .location("India / Global")
                        .type(Experience.ExperienceType.WORK)
                        .startDate("2025")
                        .endDate("Present")
                        .currentRole(true)
                        .description("Contributing to SITA's next-generation Border Management System (BMS) and Automated Border Control (ABC) e-Gates & self-service kiosks used by government border authorities worldwide.")
                        .displayOrder(1)
                        .accomplishments(List.of(
                                "Designed & developed 10+ Spring Boot microservices (rule engine, audit, passenger eligibility, watchlist screening)",
                                "Integrated with INTERPOL and national security databases for real-time criminal record verification and risk assessment",
                                "Implemented 5+ manual passenger processing workflows for border officers when e-Gates require intervention",
                                "Engineered Automated Border Control (ABC) e-Gates & kiosks with 25+ government and internal API integrations",
                                "Contributed to Electron + ElysiaJS desktop officer application and C# Windows Service for biometric passport/fingerprint scanner hardware acquisition",
                                "Leveraged AI-assisted tools (GitHub Copilot) to accelerate development and maintain high code quality"
                        ))
                        .techStack(List.of("Java 21", "Spring Boot 3", "Microservices", "PostgreSQL", "Electron", "ElysiaJS", "C#", "RabbitMQ", "Docker", "Kubernetes"))
                        .build(),

                Experience.builder()
                        .role("Solution Engineer")
                        .company("IBS Software Pvt Ltd")
                        .companyUrl("https://www.ibsplc.com")
                        .location("India")
                        .type(Experience.ExperienceType.WORK)
                        .startDate("2023")
                        .endDate("2025")
                        .currentRole(false)
                        .description("Architected and optimized cloud-native RESTful APIs for Emirates Airline and China Airlines loyalty platforms on the iFly Loyalty SaaS platform.")
                        .displayOrder(2)
                        .accomplishments(List.of(
                                "China Airline Loyalty Implementation: Optimized Quarkus REST APIs, PostgreSQL, and AWS, reducing booking & loyalty transaction latency by 20%",
                                "Emirates Airlines Loyalty Implementation: Successfully built 50+ features using Spring Boot, PostgreSQL, and AWS on the SaaS iFly Loyalty platform",
                                "Identified and resolved 40+ critical production bugs through root cause analysis, achieving a 15% reduction in application crash rate",
                                "Collaborated across teams to design custom solutions by deeply analyzing complex airline loyalty business workflows"
                        ))
                        .techStack(List.of("Java", "Quarkus", "Spring Boot", "PostgreSQL", "AWS", "REST APIs", "Docker", "Git", "Postman"))
                        .build()
        );

        experienceRepository.saveAll(experiences);
    }

    private void seedSkills() {
        List<Skill> skills = List.of(
                // Languages
                Skill.builder().name("Java").category("Languages").proficiency(95).iconName("java").featured(true).displayOrder(1).build(),
                Skill.builder().name("JavaScript").category("Languages").proficiency(90).iconName("javascript").featured(true).displayOrder(2).build(),
                Skill.builder().name("TypeScript").category("Languages").proficiency(88).iconName("typescript").featured(true).displayOrder(3).build(),
                Skill.builder().name("C#").category("Languages").proficiency(78).iconName("csharp").featured(true).displayOrder(4).build(),

                // Frameworks
                Skill.builder().name("Spring Boot 3.x").category("Frameworks").proficiency(96).iconName("springboot").featured(true).displayOrder(5).build(),
                Skill.builder().name("Quarkus").category("Frameworks").proficiency(90).iconName("quarkus").featured(true).displayOrder(6).build(),
                Skill.builder().name("React").category("Frameworks").proficiency(85).iconName("react").featured(true).displayOrder(7).build(),
                Skill.builder().name("Angular").category("Frameworks").proficiency(80).iconName("angular").featured(true).displayOrder(8).build(),
                Skill.builder().name("Electron & ElysiaJS").category("Frameworks").proficiency(85).iconName("electron").featured(true).displayOrder(9).build(),

                // Databases
                Skill.builder().name("PostgreSQL").category("Databases").proficiency(94).iconName("postgresql").featured(true).displayOrder(10).build(),
                Skill.builder().name("MongoDB").category("Databases").proficiency(86).iconName("mongodb").featured(true).displayOrder(11).build(),
                Skill.builder().name("Microsoft SQL Server (MSSQL)").category("Databases").proficiency(84).iconName("mssql").featured(true).displayOrder(12).build(),

                // Cloud & DevOps
                Skill.builder().name("AWS (EC2, S3, RDS)").category("Cloud & DevOps").proficiency(88).iconName("aws").featured(true).displayOrder(13).build(),
                Skill.builder().name("Docker").category("Cloud & DevOps").proficiency(90).iconName("docker").featured(true).displayOrder(14).build(),
                Skill.builder().name("Kubernetes").category("Cloud & DevOps").proficiency(85).iconName("kubernetes").featured(true).displayOrder(15).build(),
                Skill.builder().name("CI/CD Pipelines").category("Cloud & DevOps").proficiency(86).iconName("cicd").featured(true).displayOrder(16).build(),

                // Tools & Messaging
                Skill.builder().name("Git & GitHub").category("Tools & Messaging").proficiency(95).iconName("git").featured(true).displayOrder(17).build(),
                Skill.builder().name("RabbitMQ").category("Tools & Messaging").proficiency(88).iconName("rabbitmq").featured(true).displayOrder(18).build(),
                Skill.builder().name("Postman").category("Tools & Messaging").proficiency(94).iconName("postman").featured(true).displayOrder(19).build(),
                Skill.builder().name("GitHub Copilot & Claude Code").category("Tools & Messaging").proficiency(92).iconName("copilot").featured(true).displayOrder(20).build(),

                // Architecture & Concepts
                Skill.builder().name("Microservices Architecture").category("Architecture & Concepts").proficiency(96).iconName("layers").featured(true).displayOrder(21).build(),
                Skill.builder().name("REST APIs & WebSockets").category("Architecture & Concepts").proficiency(98).iconName("api").featured(true).displayOrder(22).build(),
                Skill.builder().name("Distributed Systems").category("Architecture & Concepts").proficiency(92).iconName("network").featured(true).displayOrder(23).build(),
                Skill.builder().name("OOP & Design Patterns").category("Architecture & Concepts").proficiency(94).iconName("code").featured(true).displayOrder(24).build(),
                Skill.builder().name("Agile / Scrum").category("Architecture & Concepts").proficiency(92).iconName("agile").featured(true).displayOrder(25).build()
        );

        skillRepository.saveAll(skills);
    }
}
