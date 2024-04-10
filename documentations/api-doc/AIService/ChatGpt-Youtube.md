# YouTube Recommendation API

## Overview

This API allows clients to retrieve YouTube video categories relevant to user input or a given video description. Which 
is used in Video Recommendation.

## Base URL

`http://localhost:30053`

## Endpoints

### Get Relevant Categories

#### Request

- **URL**: `/api/recommendations/relevant`
- **Method**: `GET`
- **Auth required**: No
- **Permissions required**: None
- **Query Parameters**:
    - `userInput`: User's input to get the relevant categories.

#### Response

- **Success**:
    - **Code**: `200 OK`
    - **Content-Type**: `application/json`
    - **Content**: A JSON array of strings containing relevant categories.
- **Error**:
    - **Condition**: If `userInput` is not provided.
    - **Code**: `400 Bad Request`
    - **Content**: `{"error": "Missing required query parameter: userInput"}`

### Get Not Relevant Categories

#### Request

- **URL**: `/api/recommendations/not-relevant`
- **Method**: `GET`
- **Auth required**: No
- **Permissions required**: None
- **Query Parameters**:
    - `userInput`: User's input to get the not relevant categories.

#### Response

- **Success**:
    - **Code**: `200 OK`
    - **Content-Type**: `application/json`
    - **Content**: A JSON array of strings containing not relevant categories.
- **Error**:
    - **Condition**: If `userInput` is not provided.
    - **Code**: `400 Bad Request`
    - **Content**: `{"error": "Missing required query parameter: userInput"}`

### Get YouTube Video Categories

#### Request

- **URL**: `/api/recommendations/youtube`
- **Method**: `GET`
- **Auth required**: No
- **Permissions required**: None
- **Query Parameters**:
    - `youtubeDesc`: Description of the YouTube video to get relevant categories.

#### Response

- **Success**:
    - **Code**: `200 OK`
    - **Content-Type**: `application/json`
    - **Content**: A JSON array of strings containing categories relevant to the given video description.
- **Error**:
    - **Condition**: If `youtubeDesc` is not provided.
    - **Code**: `400 Bad Request`
    - **Content**: `{"error": "Missing required query parameter: youtubeDesc"}`

## Examples

### Retrieving Relevant Categories

```bash
curl "/api/recommendations/relevant?userInput=latest tech news"
```
### Retrieving Not Relevant Categories
```bash
curl "/api/recommendations/not-relevant?userInput=latest tech news"
```
### Retrieving YouTube Video Categories
```bash
curl "/api/recommendations/youtube?youtubeDesc=educational video on space"
```