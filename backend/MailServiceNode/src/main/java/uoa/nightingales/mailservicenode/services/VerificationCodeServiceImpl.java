package uoa.nightingales.mailservicenode.services;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring6.SpringTemplateEngine;

@RequiredArgsConstructor
@Service("verificationCodeService")
public class VerificationCodeServiceImpl implements VerificationCodeService{

    final JavaMailSender mailSender;

    final SpringTemplateEngine templateEngine;

    @Value("${url}")
    private String baseUrl;

    private static final String HOST_EMAIL = "unimedia.noble.nightingales@gmail.com";


    @Override
    public void sendVerificationCodeEmail(String targetEmailAddress, String verificationCode) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setFrom(HOST_EMAIL);
        helper.setSubject("Email Verification");
        helper.setTo(targetEmailAddress);
        Context context = new Context();
        context.setVariable("code", "1 2 3 4 5 6");
        context.setVariable("baseUrl", baseUrl);

        String htmlContent = templateEngine.process("verification.html", context);
        helper.setText(htmlContent, true);

        mailSender.send(message);
    }
}
