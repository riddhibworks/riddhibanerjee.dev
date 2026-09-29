package dev.riddhibanerjee.portfolio.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Riddhi Bandyopadhyay Portfolio API")
                        .version("1.0.0")
                        .description("REST API serving backend portfolio information, projects, skills, career timeline, and contact inquiries for Riddhi Bandyopadhyay.")
                        .contact(new Contact()
                                .name("Riddhis")
                                .email("riddhib.works@gmail.com")
                                .url("https://www.linkedin.com/in/riddhi-bandyopadhyay/"))
                        .license(new License().name("MIT").url("https://opensource.org/licenses/MIT")))
                .servers(List.of(
                        new Server().url("http://localhost:8080").description("Local Development Server")
                ));
    }
}
