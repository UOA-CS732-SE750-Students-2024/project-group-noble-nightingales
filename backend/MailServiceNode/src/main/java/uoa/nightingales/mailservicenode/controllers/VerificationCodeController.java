package uoa.nightingales.mailservicenode.controllers;

import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import uoa.nightingales.mailservicenode.domains.VerificationRequest;
import uoa.nightingales.mailservicenode.services.VerificationCodeManagementService;
import uoa.nightingales.mailservicenode.services.VerificationCodeService;

@Slf4j
@RestController
@RequestMapping("/api/verification")
@RequiredArgsConstructor
public class VerificationCodeController {

    final VerificationCodeService verificationCodeService;

    final VerificationCodeManagementService verificationCodeManagementService;

    @GetMapping("/get")
    public void getVerificationCode(@RequestParam String userEmail) throws MessagingException {
        log.info("receiving request to generate random verification code");
        String code = verificationCodeManagementService.generateVerificationCode(userEmail);
        verificationCodeService.sendVerificationCodeEmail(userEmail, code);
    }

    @PostMapping("/verify")
    public ResponseEntity<?> verifyCode(@Validated @RequestBody VerificationRequest request) {
        log.info("receiving request to verify the verification code");
        boolean isVerified = verificationCodeManagementService.verifyCode(request.getUserEmail(), request.getVerificationCode());
        if (isVerified) {
            return ResponseEntity.ok().body("Verification successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Verification failed");
        }
    }

}
