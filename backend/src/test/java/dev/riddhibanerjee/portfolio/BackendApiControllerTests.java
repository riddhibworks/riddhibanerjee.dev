package dev.riddhibanerjee.portfolio;

import dev.riddhibanerjee.portfolio.dto.ContactRequestDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class BackendApiControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void testGetProfile() throws Exception {
        mockMvc.perform(get("/api/profile"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name", is("Riddhi Bandyopadhyay")))
                .andExpect(jsonPath("$.title", containsString("Backend-Focused Full Stack Engineer")))
                .andExpect(jsonPath("$.quickFacts", hasSize(greaterThan(0))));
    }

    @Test
    void testGetProjects() throws Exception {
        mockMvc.perform(get("/api/projects"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(greaterThan(0))))
                .andExpect(jsonPath("$[0].title", notNullValue()));
    }

    @Test
    void testGetExperience() throws Exception {
        mockMvc.perform(get("/api/experience"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(greaterThan(0))))
                .andExpect(jsonPath("$[0].company", notNullValue()));
    }

    @Test
    void testGetSkills() throws Exception {
        mockMvc.perform(get("/api/skills"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(greaterThan(0))))
                .andExpect(jsonPath("$[0].category", notNullValue()));
    }

    @Test
    void testPostContactValid() throws Exception {
        ContactRequestDto validRequest = ContactRequestDto.builder()
                .name("Alex Morgan")
                .email("alex@example.com")
                .subject("Project Inquiry")
                .message("Hello Riddhi, we would love to discuss a project with you.")
                .build();

        mockMvc.perform(post("/api/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(validRequest)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.success", is(true)))
                .andExpect(jsonPath("$.messageId", notNullValue()));
    }

    @Test
    void testPostContactInvalidPayload() throws Exception {
        ContactRequestDto invalidRequest = ContactRequestDto.builder()
                .name("")
                .email("not-an-email")
                .message("too short")
                .build();

        mockMvc.perform(post("/api/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(invalidRequest)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.validationErrors.name", notNullValue()))
                .andExpect(jsonPath("$.validationErrors.email", notNullValue()));
    }
}
