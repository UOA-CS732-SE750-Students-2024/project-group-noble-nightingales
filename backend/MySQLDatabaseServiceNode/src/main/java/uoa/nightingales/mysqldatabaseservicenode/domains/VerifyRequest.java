package uoa.nightingales.mysqldatabaseservicenode.domains;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class VerifyRequest {

    @NotNull(message = "The username must not be null")
    @NotBlank(message = "The username must not be blank")
    private String username;

    @NotNull(message = "The password must not be null")
    @NotBlank(message = "The password must not be blank")
    private String password;

}
