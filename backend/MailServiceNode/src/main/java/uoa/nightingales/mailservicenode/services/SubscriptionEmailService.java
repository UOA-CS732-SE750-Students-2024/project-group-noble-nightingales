package uoa.nightingales.mailservicenode.services;

import jakarta.mail.MessagingException;

public interface SubscriptionEmailService {

    void sendSubscriptionEmail(String userEmail) throws MessagingException;

}
