# YouTube History API

## Overview

This API facilitates operations related to YouTube viewing history, allowing clients to save history data and retrieve it based on a unique identifier.

## Base URL

*http://localhost:30053*

## API Endpoints

### Save YouTube History Data

- **URL**: `/api/youtube/history`
- **Method**: `POST`
- **Auth required**: No
- **Permissions required**: None

#### Request Body

- **Content-Type**: `application/json`
- **Required Fields**: `userId`

```json
{
  "userId": "uniqueUserId",
  "genreDataList": [],
  "indexGenreMap": {},
  "channelDataList": [],
  "indexChannelMap": {}
}
```

#### Success Response

- **Code**: `200 OK`
- **Content-Type**: `application/json`
- **Content**:

```json
{
  "userId": "uniqueUserId",
  "genreDataList": [],
  "indexGenreMap": {},
  "channelDataList": [],
  "indexChannelMap": {}
}
```

#### Error Responses

- **Condition**: If `userId` is null or blank.
- **Code**: `400 Bad Request`
- **Content**: `{"error": "User ID cannot be blank"}`

### Get YouTube History Data by ID

- **URL**: `/api/youtube/history/{id}`
- **Method**: `GET`
- **Auth required**: No
- **Permissions required**: None

#### URL Parameters

- **id** (required): The unique identifier of the YouTube history data to retrieve.

#### Success Response

- **Code**: `200 OK`
- **Content-Type**: `application/json`
- **Content**:

```json
{
  "userId": "retrievedUserId",
  "genreDataList": [],
  "indexGenreMap": {},
  "channelDataList": [],
  "indexChannelMap": {}
}
```

#### Error Responses

- **Condition**: If no data is found for the provided `id`.
- **Code**: `404 Not Found`
- **Content**: `{}`

## Examples

### Saving YouTube History Data

```bash
curl -X POST "/api/youtube/history" -H "Content-Type: application/json" -d '{
  "userId": "user123",
  "genreDataList": [],
  "indexGenreMap": {},
  "channelDataList": [],
  "indexChannelMap": {}
}'
```

### Retrieving YouTube History Data by ID

```bash
curl "/api/youtube/history/someUniqueId"
```