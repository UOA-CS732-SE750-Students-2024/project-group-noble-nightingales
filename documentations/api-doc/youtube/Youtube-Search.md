
# Video Search API Documentation

## Overview

This document outlines the usage of the Video Search API, which allows clients to search for YouTube videos based on a query string or channel ID. The API supports pagination through the use of page tokens.

Base URL: `http://localhost:30050`

## Video Entity

Each video is represented by a JSON object with the following structure:

```json
{
  "videoId": "string",
  "title": "string",
  "description": "string",
  "thumbnailUrl": "string",
  "publishedAt": "string",
  "channelName": "string",
  "channelId": "string"
}
```

- `videoId`: The unique identifier for the video on YouTube.
- `title`: The title of the video.
- `description`: A brief description of the video content.
- `thumbnailUrl`: URL to the video's thumbnail image.
- `publishedAt`: The publication date and time of the video in RFC 3339 format.
- `channelName`: The name of the channel that published the video.
- `channelId`: The unique identifier for the channel.

## Endpoints

### 1. Search Videos

Searches for videos on YouTube based on a specified query string.

- **URL**: `/search`
- **Method**: `GET`
- **URL Parameters**:
  - `query`: The search query string to find videos related to. (Required)
  - `maxResults`: The maximum number of video results to return. Defaults to 10. (Optional)
  - `pageToken`: The token for pagination. A null or empty string indicates the first page. (Optional)
- **Example:**

  ```bash
  curl -X GET "http://localhost:30050/search?query=Spring+Boot&maxResults=5"
  ```
- **Success Response**:
  - **Code**: 200 OK
  - **Content**: JSON array of `Video` objects.
- **Example Response**:

  ```json
  [
      {
          "videoId": "dQw4w9WgXcQ",
          "title": "Never Gonna Give You Up",
          "description": "The official video for “Never Gonna Give You Up” by Rick Astley",
          "thumbnailUrl": "https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg",
          "publishedAt": "1987-10-25T07:00:00Z",
          "channelName": "RickAstleyVEVO",
          "channelId": "UCuAXFkgsw1L7xaCfnd5JJOw"
      }
  ]
  ```

- **Error Response**:

  - **Code**: 500 INTERNAL SERVER ERROR

  - **Content**: `An error occurred while processing your request. Please try again later.`

### 2. Search Videos by Channel ID

Searches for videos published by a specific YouTube channel, identified by the channel's unique ID.

- **URL**: `/searchByChannelId`

- **Method**: `GET`

- **URL Parameters**:
  - `channelId`: The unique identifier of the YouTube channel whose videos are to be retrieved. (Required)
  - `maxResults`: The maximum number of video results to return. Defaults to 10. (Optional)
  - `pageToken`: The token for pagination. A null or empty string indicates the first page. (Optional)
  
- **Example:**

  ```bash
  curl -X GET "http://localhost:30050/searchByChannelId?channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=5"
  ```

- **Success Response**:

  - **Code**: 200 OK
  - **Content**: JSON array of `Video` objects.
- **Example Response**:

  ```json
  [
      {
          "videoId": "k85mRPqvMbE",
          "title": "Uptown Funk",
          "description": "Mark Ronson feat. Bruno Mars - Uptown Funk (Official Video)",
          "thumbnailUrl": "https://i.ytimg.com/vi/k85mRPqvMbE/default.jpg",
          "publishedAt": "2014-11-19T14:00:00Z",
          "channelName": "MarkRonsonVEVO",
          "channelId": "UCRr1x_A1kxnpU6RjHWgWLBg"
      }
  ]
  ```

- **Error Response**:

  - **Code**: 500 INTERNAL SERVER ERROR

  - **Content**: `An error occurred while processing your request. Please try again later.`

## Notes

- These endpoints are designed to facilitate the searching of YouTube videos either by generic search queries or specifically by YouTube channel IDs.
- Pagination support is provided via `pageToken`, allowing for efficient browsing through large sets of search results.
