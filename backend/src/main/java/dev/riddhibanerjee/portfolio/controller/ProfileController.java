package dev.riddhibanerjee.portfolio.controller;

import dev.riddhibanerjee.portfolio.dto.ProfileDto;
import dev.riddhibanerjee.portfolio.service.ProfileService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/profile")
@Tag(name = "Profile", description = "Endpoints for developer profile and bio")
public class ProfileController {

    private final ProfileService profileService;

    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @GetMapping
    @Operation(summary = "Get developer profile", description = "Retrieves current profile, bio, social links, and quick facts")
    public ResponseEntity<ProfileDto> getProfile() {
        return ResponseEntity.ok(profileService.getProfile());
    }
}
