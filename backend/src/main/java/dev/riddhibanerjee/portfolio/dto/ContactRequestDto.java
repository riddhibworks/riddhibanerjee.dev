package dev.riddhibanerjee.portfolio.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Payload for submitting a contact message")
public class ContactRequestDto {

    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 100, message = "Name must be between 2 and 100 characters")
    @Schema(example = "Sarah Jenkins")
    private String name;

    @NotBlank(message = "Email is required")
    @Email(message = "Email must be a valid email address")
    @Schema(example = "sarah.jenkins@example.com")
    private String email;

    @Size(max = 150, message = "Subject cannot exceed 150 characters")
    @Schema(example = "Senior Full Stack Engineering Opportunity")
    private String subject;

    @NotBlank(message = "Message cannot be empty")
    @Size(min = 10, max = 4000, message = "Message must be between 10 and 4000 characters")
    @Schema(example = "Hi Riddhi, we loved your portfolio and would like to connect regarding an engineering role.")
    private String message;
}
