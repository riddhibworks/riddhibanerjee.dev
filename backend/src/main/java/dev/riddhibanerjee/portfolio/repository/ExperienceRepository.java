package dev.riddhibanerjee.portfolio.repository;

import dev.riddhibanerjee.portfolio.entity.Experience;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExperienceRepository extends JpaRepository<Experience, Long> {
    List<Experience> findAllByOrderByDisplayOrderAscIdAsc();
    List<Experience> findByTypeOrderByDisplayOrderAsc(Experience.ExperienceType type);
}
