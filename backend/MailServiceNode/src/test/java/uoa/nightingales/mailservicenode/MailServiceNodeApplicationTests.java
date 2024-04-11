package uoa.nightingales.mailservicenode;

import jakarta.annotation.Resource;
import jakarta.mail.MessagingException;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import uoa.nightingales.mailservicenode.services.VerificationCodeService;

@SpringBootTest
class MailServiceNodeApplicationTests {

    @Resource
    private VerificationCodeService verificationCodeService;

    @Test
    void contextLoads() {
    }

    @Test
    void testSendingEmail() throws MessagingException {
        verificationCodeService.sendVerificationCodeEmail("jamesgong0719@gmail.com", "123456");
    }

}
