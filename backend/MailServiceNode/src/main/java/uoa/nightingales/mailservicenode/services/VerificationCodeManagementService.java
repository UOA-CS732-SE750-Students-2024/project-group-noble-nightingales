package uoa.nightingales.mailservicenode.services;

public interface VerificationCodeManagementService {

    String generateVerificationCode(String userEmail);

    boolean verifyCode(String userEmail, Integer code);

}
