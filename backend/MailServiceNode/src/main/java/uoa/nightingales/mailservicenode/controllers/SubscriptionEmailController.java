package uoa.nightingales.mailservicenode.controllers;


import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import uoa.nightingales.mailservicenode.services.SubscriptionEmailService;

@Slf4j
@RestController
@RequestMapping("/api/subscribe")
@RequiredArgsConstructor
public class SubscriptionEmailController {

    final SubscriptionEmailService subscriptionEmailService;

    /**
     * Sends a subscription confirmation email to the specified user email.
     * <p>
     * This method is mapped to the base path of this controller and expects a
     * {@code userEmail} query parameter containing the recipient's email address.
     * Upon receiving a request, it logs the action and delegates to the
     * {@code SubscriptionEmailService} for email dispatch.
     * </p>
     *
     * @param userEmail The email address of the subscription recipient. This must be a valid
     *                  email address format.
     * @throws MessagingException If there is an error during the email sending process.
     */
    @GetMapping
    public void sendSubscriptionEmail(@RequestParam String userEmail) throws MessagingException {

        log.info("receiving request to send subscription email to " + userEmail);
        subscriptionEmailService.sendSubscriptionEmail(userEmail);
    }

}
