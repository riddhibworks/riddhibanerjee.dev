package dev.riddhibanerjee.portfolio.controller;

import dev.riddhibanerjee.portfolio.dto.ContactRequestDto;
import dev.riddhibanerjee.portfolio.dto.ContactResponseDto;
import dev.riddhibanerjee.portfolio.service.ContactService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contact")
@Tag(name = "Contact", description = "Endpoints for receiving inquiries and messages")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    @Operation(summary = "Submit contact message", description = "Validates and stores a contact message, optionally forwarding via email")
    public ResponseEntity<ContactResponseDto> submitContactMessage(@Valid @RequestBody ContactRequestDto request) {
        ContactResponseDto response = contactService.processContactMessage(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
