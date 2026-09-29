package dev.riddhibanerjee.portfolio.service;

import dev.riddhibanerjee.portfolio.dto.ProfileDto;
import dev.riddhibanerjee.portfolio.entity.Profile;
import dev.riddhibanerjee.portfolio.exception.ResourceNotFoundException;
import dev.riddhibanerjee.portfolio.repository.ProfileRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Service
@Transactional(readOnly = true)
public class ProfileService {

    private final ProfileRepository profileRepository;

    public ProfileService(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    public ProfileDto getProfile() {
        Profile profile = profileRepository.findFirstByOrderByIdAsc()
                .orElseThrow(() -> new ResourceNotFoundException("Profile information not found"));
        return mapToDto(profile);
    }

    private ProfileDto mapToDto(Profile p) {
        return ProfileDto.builder()
                .id(p.getId())
                .name(p.getName())
                .title(p.getTitle())
                .headline(p.getHeadline())
                .bio(p.getBio())
                .avatarUrl(p.getAvatarUrl())
                .location(p.getLocation())
                .email(p.getEmail())
                .githubUrl(p.getGithubUrl())
                .linkedinUrl(p.getLinkedinUrl())
                .twitterUrl(p.getTwitterUrl())
                .resumeUrl(p.getResumeUrl())
                .quickFacts(p.getQuickFacts() != null ? new ArrayList<>(p.getQuickFacts()) : new ArrayList<>())
                .build();
    }
}
