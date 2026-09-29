package dev.riddhibanerjee.portfolio.repository;

import dev.riddhibanerjee.portfolio.entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {
    List<Skill> findAllByOrderByDisplayOrderAscIdAsc();
    List<Skill> findByCategoryOrderByDisplayOrderAsc(String category);
}
