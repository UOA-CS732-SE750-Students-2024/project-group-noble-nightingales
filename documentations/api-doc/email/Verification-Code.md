# Verification Code API Documentation

## Overview

This API is used for generating and verifying email verification codes.

## Base URL

```
http://localhost:30056/api/verification
```

------

## Endpoints

### 1. Generate Verification Code

Generates a verification code for the given email and sends it via email.

- **URL**: `/get`

- **Method**: `GET`

- **Query Parameters**:

  - `userEmail` (required): The email address for which to generate and send the verification code.

- **Success Response**:

  - **Code**: `200 OK`
  - **Content**: Email sent successfully with the verification code.

- **Error Response**:

  - **Code**: `500 Internal Server Error`
  - **Content**: `{ error : "Error message" }`

- **Example Request**:

  ```sql
  GET /api/verification/get?userEmail=user@example.com
  ```

- **Example cURL**:

  ```bash
  curl -X GET "http://localhost:30056/api/verification/get?userEmail=user@example.com"
  ```

------

### 2. Verify Verification Code

Verifies if the provided verification code matches the one sent to the given email.

- **URL**: `/verify`

- **Method**: `POST`

- **Content-Type**: `application/json`

- **Request Body**:

  ```json
  {
    "userEmail": "user@example.com",
    "verificationCode": 123456
  }
  ```

- **Success Response**:

  - **Code**: `200 OK`
  - **Content**: `"Verification successful"`

- **Error Response**:

  - **Code**: `401 Unauthorized`
  - **Content**: `"Verification failed"`

  OR

  - **Code**: `400 Bad Request`
  - **Content**: `{ "error": "Validation error messages" }`

- **Example Request**:

  ```bash
  curl -X POST "http://localhost:30056/api/verification/verify" \
       -H "Content-Type: application/json" \
       -d '{"userEmail": "user@example.com", "verificationCode": 123456}'
  ```

**Note**: Replace `user@example.com` and `123456` with the actual email address and verification code you are testing with.

------

## Error Responses

Common error responses and their meanings:

- **400 Bad Request**: The request was unacceptable, often due to missing a required parameter or invalid data.
- **401 Unauthorized**: Verification failed, often due to an incorrect verification code.
- **500 Internal Server Error**: We had a problem with our server. Try again later.