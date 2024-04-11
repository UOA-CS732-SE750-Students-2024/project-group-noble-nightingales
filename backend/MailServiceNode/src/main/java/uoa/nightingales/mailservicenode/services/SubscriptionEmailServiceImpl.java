package uoa.nightingales.mailservicenode.services;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring6.SpringTemplateEngine;

@Slf4j
@RequiredArgsConstructor
@Service("subscriptionEmailService")
public class SubscriptionEmailServiceImpl implements SubscriptionEmailService{

    final JavaMailSender mailSender;

    final SpringTemplateEngine templateEngine;

    @Value("${url}")
    private String baseUrl;

    private static final String HOST_EMAIL = "unimedia.noble.nightingales@gmail.com";

    @Async
    @Override
    public void sendSubscriptionEmail(String userEmail) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setFrom(HOST_EMAIL);
        helper.setSubject("Email Verification");
        helper.setTo(userEmail);
        Context context = new Context();
        context.setVariable("baseUrl", baseUrl);
        String htmlContent = templateEngine.process("subscription.html", context);
        helper.setText(htmlContent, true);
        log.info("sending subscription notification email to " + userEmail);
        mailSender.send(message);
    }


}
