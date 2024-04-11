# Subscription Email API Documentation

## Overview

The Subscription Email API allows for the sending of subscription confirmation emails to users. This service is designed to notify users upon successful subscription, requiring only their email address to send the confirmation.

## Base URL

> http://3.25.133.136:30056

## Endpoints

### Send Subscription Email

Sends a subscription confirmation email to the specified email address.

- **URL**

  ```bash
  /api/subscribe
  ```

- **Method:**

  ```sql
  GET
  ```

- **URL Params**

  **Required:**

  `userEmail=[string]`: The email address of the subscription recipient. Must be in a valid email format.

- **Success Response:**

  - **Code:** 200 <br /> **Content:** None

- **Error Responses:**

  - **Code:** 400 BAD REQUEST <br /> **Content:** `{ error : "Invalid Email Address" }`
  - **Code:** 500 INTERNAL SERVER ERROR <br /> **Content:** `{ error : "MessagingException: [error description]" }`

- **Sample Call:**

  ```bash
  curl -X GET "http://3.25.133.136:30056/api/subscribe?userEmail=user@example.com"
  ```

- **Notes:**

  - This endpoint logs the action of sending a subscription email.
  - A `MessagingException` will be thrown if there is an error during the email sending process, indicating a failure in the email system or configuration.