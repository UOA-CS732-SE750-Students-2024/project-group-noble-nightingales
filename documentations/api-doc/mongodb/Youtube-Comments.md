# YouTube Comments API
## Overview

This API allows clients to save new YouTube comments, update existing ones, and retrieve comments associated with a specific video ID.

## Base URL

*http://localhost:30053*

## Endpoints

### **Save or Update a Comment**

- **URL**: `/api/youtube/comments`
- **Method**: `POST`
- **Auth required**: No
- **Permissions required**: None

#### Request Body

- **Content-Type**: `application/json`
- **Required Fields**: `videoId`, `userId`, `comments`

```json
{
  "videoId": "string",
  "userId": "string",
  "comments": ["string"]
}
```

#### Success Response

- **Code**: `200 OK`
- **Content-Type**: `application/json`
- **Content**:

```json
{
  "id": "generatedId",
  "videoId": "string",
  "userId": "string",
  "comments": ["string"]
}
```

#### Error Responses

- **Condition**: If any required field is missing or validation fails.
- **Code**: `400 Bad Request`
- **Content**: `{"error": "Video ID cannot be blank", "field": "videoId"}`

### Get Comments by Video ID

- **URL**: `/api/youtube/comments`
- **Method**: `GET`
- **Auth required**: No
- **Permissions required**: None
- Query Parameters:
  - `videoId`: The unique identifier of the video.

#### Success Response

- **Code**: `200 OK`
- **Content-Type**: `application/json`
- **Content**:

```json
[
  {
    "id": "commentId",
    "videoId": "videoId",
    "userId": "userId",
    "comments": ["This is a comment"]
  }
]
```

#### Error Responses

- **Condition**: If `videoId` is not provided.
- **Code**: `400 Bad Request`
- **Content**: `{"error": "Missing required query parameter: videoId"}`

## Examples

### Saving a New Comment

```bash
curl -X POST "/api/youtube/comments" -H "Content-Type: application/json" -d '{
  "videoId": "xYz",
  "userId": "user123",
  "comments": ["This is a great video"]
}'
```

### Retrieving Comments for a Video

```bash
curl "/api/youtube/comments?videoId=xYz"
```