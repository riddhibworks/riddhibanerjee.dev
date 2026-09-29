package dev.riddhibanerjee.portfolio.repository;

import dev.riddhibanerjee.portfolio.entity.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, Long> {
    Optional<Profile> findFirstByOrderByIdAsc();
}
