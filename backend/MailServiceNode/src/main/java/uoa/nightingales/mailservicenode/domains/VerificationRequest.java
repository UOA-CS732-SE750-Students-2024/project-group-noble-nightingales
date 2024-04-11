package uoa.nightingales.mailservicenode.domains;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;


@Data
public class VerificationRequest {

    @NotNull(message = "The user email should not be null")
    @NotBlank(message = "The user email should not be blank")
    private String userEmail;

    @NotNull(message = "The verification code should not be null")
    private Integer verificationCode;
}
