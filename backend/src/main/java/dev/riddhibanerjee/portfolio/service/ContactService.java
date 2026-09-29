package dev.riddhibanerjee.portfolio.service;

import dev.riddhibanerjee.portfolio.dto.ContactRequestDto;
import dev.riddhibanerjee.portfolio.dto.ContactResponseDto;
import dev.riddhibanerjee.portfolio.entity.ContactMessage;
import dev.riddhibanerjee.portfolio.repository.ContactMessageRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;

@Service
public class ContactService {

    private static final Logger log = LoggerFactory.getLogger(ContactService.class);

    private final ContactMessageRepository contactMessageRepository;
    private final JavaMailSender mailSender;

    @Value("${app.contact.notification-email:riddhi@riddhibanerjee.dev}")
    private String notificationEmail;

    @Value("${app.contact.smtp-enabled:false}")
    private boolean smtpEnabled;

    public ContactService(ContactMessageRepository contactMessageRepository,
                          @Autowired(required = false) JavaMailSender mailSender) {
        this.contactMessageRepository = contactMessageRepository;
        this.mailSender = mailSender;
    }

    @Transactional
    public ContactResponseDto processContactMessage(ContactRequestDto request) {
        // 1. Persist message to database
        ContactMessage message = ContactMessage.builder()
                .name(request.getName().trim())
                .email(request.getEmail().trim().toLowerCase())
                .subject(request.getSubject() != null && !request.getSubject().isBlank() ? request.getSubject().trim() : "Portfolio Contact Form")
                .message(request.getMessage().trim())
                .receivedAt(Instant.now())
                .responded(false)
                .build();

        ContactMessage saved = contactMessageRepository.save(message);
        log.info("Persisted new contact message #{} from {} <{}>", saved.getId(), saved.getName(), saved.getEmail());

        // 2. Dispatch email if SMTP is configured and enabled
        if (smtpEnabled && mailSender != null) {
            try {
                SimpleMailMessage mail = new SimpleMailMessage();
                mail.setTo(notificationEmail);
                mail.setSubject("[Portfolio Contact] " + saved.getSubject());
                mail.setText(String.format("New message from %s <%s>:\n\n%s\n\nReceived at: %s",
                        saved.getName(), saved.getEmail(), saved.getMessage(), saved.getReceivedAt()));
                mailSender.send(mail);
                log.info("Email notification sent successfully to {}", notificationEmail);
            } catch (Exception e) {
                log.warn("Failed to send email notification (message is safely saved in DB): {}", e.getMessage());
            }
        } else {
            log.info("SMTP email delivery is disabled in config. Contact message #{} stored in database successfully.", saved.getId());
        }

        return ContactResponseDto.builder()
                .success(true)
                .message("Thank you! Your message has been received. I'll get back to you shortly.")
                .messageId(saved.getId())
                .timestamp(saved.getReceivedAt())
                .build();
    }
}
