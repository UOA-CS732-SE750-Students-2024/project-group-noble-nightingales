package uoa.nightingales.mailservicenode.services;

import jakarta.mail.MessagingException;

public interface VerificationCodeService {

    void sendVerificationCodeEmail(String targetEmailAddress, String verificationCode) throws MessagingException;
}
