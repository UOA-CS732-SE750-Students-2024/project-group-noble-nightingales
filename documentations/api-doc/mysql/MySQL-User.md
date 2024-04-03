# User API Documentation

## Overview

This documentation outlines the User API endpoints, including methods for creating, retrieving by ID, and finding users by username. Validation is enforced on incoming requests to ensure data integrity and compliance with defined constraints.

## Entities

- User
  - `id` (Integer): Unique identifier for the User.
  - `username` (String): Username of the User. Must not be null or blank.
  - `password` (String): Password of the User. Stored securely.

## API Endpoints

### Retrieve User by ID

- **Method:** GET

- **Endpoint:** `/api/users/{id}`

- **Description:** Retrieves the details of a user by their unique identifier.

- URL Parameters:

  - `id` (Integer): The ID of the user to retrieve.

- Responses:

  - `200 OK`: Successfully found and returned the user details.
  - `404 Not Found`: No user found with the provided ID.

- **Example Request:** `GET /api/users/1`

- Example Response:

  ```json
  {
    "id": 1,
    "username": "johndoe",
    "password": "encrypted_password"
  }
  ```

### Insert New User

- **Method:** POST

- **Endpoint:** `/api/users`

- **Description:** Inserts a new user record into the system. The user's password is encoded for security before insertion.

- Request Body:

  ```json
  {
    "username": "janedoe",
    "password": "securePassword123"
  }
  ```

- Responses:

  - `201 Created`: The user was successfully inserted.
  - `500 Internal Server Error`: An error occurred during the insertion process.

- Example Request:

  ```json
  POST /api/users
  {
    "username": "janedoe",
    "password": "securePassword123"
  }
  ```

### Find User by Username

- **Method:** GET

- **Endpoint:** `/api/users/find`

- **Description:** Searches for a user by their username. This search is case-sensitive.

- Query Parameters:

  - `username` (String): The username of the user to find.

- Responses:

  - `200 OK`: Successfully found and returned the user details.
  - `404 Not Found`: No user found with the provided username.

- **Example Request:** `GET /api/users/find?username=janedoe`

- Example Response:

  ```
  jsonCopy code{
    "id": 2,
    "username": "janedoe",
    "password": "encrypted_password"
  }
  ```

## Validation

Requests to create or update `User` entities are validated against the model's constraints. If a request violates these constraints, a `400 Bad Request` response is returned along with a message detailing the validation errors.