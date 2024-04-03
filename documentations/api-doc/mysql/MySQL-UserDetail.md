
# UserDetails API Documentation

## Overview

This documentation outlines the `UserDetails` API endpoints, including methods for creating, retrieving, updating, and deleting user details within the system. Validation is enforced on incoming requests to ensure data integrity and compliance with defined constraints.

## Entities

- **UserDetails**
  - `userDetailsID` (Integer): Unique identifier.
  - `userID` (Integer): Associated user ID. Must not be null or blank.
  - `gender` (String): Gender of the user.
  - `email` (String): Email address of the user. Must not be null or blank.
  - `age` (Integer): Age of the user.

## API Endpoints

### Create User Details

- **Method:** POST
- **Endpoint:** `/api/user-details`
- **Description:** Creates new user details. Requires a valid `UserDetails` object.
- **Validation:** Request body must conform to the `UserDetails` constraints. Violations return a `400 Bad Request`.
- **Request Body:**
  ```json
  {
    "userID": 1,
    "gender": "male",
    "email": "user@example.com",
    "age": 30
  }
  ```
- **Responses:**
  - `201 Created` on success.
  - `400 Bad Request` if validation fails.

### Get User Details by UserID

- **Method:** GET
- **Endpoint:** `/api/user-details/{userID}`
- **Description:** Retrieves user details by the unique user ID.
- **Responses:**
  - `200 OK` with `UserDetails` object.
  - `404 Not Found` if no user details exist for the given `userID`.

### Update User Details

- **Method:** PUT
- **Endpoint:** `/api/user-details`
- **Description:** Updates existing user details. Requires a valid `UserDetails` object.
- **Validation:** Request body must meet `UserDetails` constraints. Violations return a `400 Bad Request`.
- **Request Body:**
  ```json
  {
    "userDetailsID": 2,
    "userID": 1,
    "gender": "female",
    "email": "newuser@example.com",
    "age": 25
  }
  ```
- **Responses:**
  - `200 OK` on success.
  - `400 Bad Request` if validation fails.
  - `404 Not Found` if the user details cannot be found.

### Delete User Details by UserID

- **Method:** DELETE
- **Endpoint:** `/api/user-details/{userID}`
- **Description:** Deletes user details by the unique user ID.
- **Responses:**
  - `200 OK` on successful deletion.
  - `404 Not Found` if no user details exist for the given `userID`.

## Validation

Requests to create or update `UserDetails` are validated against the model's constraints. If a request violates these constraints, a `400 Bad Request` response is returned along with a message detailing the validation errors.

