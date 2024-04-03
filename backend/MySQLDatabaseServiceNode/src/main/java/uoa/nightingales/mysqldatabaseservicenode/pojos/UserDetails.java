package uoa.nightingales.mysqldatabaseservicenode.pojos;



import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class UserDetails {

    private Integer userDetailsID;

    @NotNull(message = "The user id must not be null")
    private Integer userID;
    private String gender;

    @Email
    @NotNull(message = "The user email must not be null")
    @NotBlank(message = "The user email must not be blank")
    private String email;
    private Integer age;
}
