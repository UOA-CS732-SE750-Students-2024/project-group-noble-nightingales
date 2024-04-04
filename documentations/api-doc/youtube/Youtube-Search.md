# YouTube Service API Documentation

## Overview

This API allows clients to interact with YouTube to fetch popular videos and search for videos based on queries. It returns structured video data, including pagination support through previous and next page tokens.

Base URL: `http://localhost:30050`

------

## Endpoints

### Search Videos Ordered By Relevance

> Searches YouTube for videos matching a given query string. This is the endpoint that should be used most generally for search functionality

- **URL:** `/api/search`

- **Method:** `GET`

- Query Parameters:

  - `query` (required): The search query string.
  - `maxResults` (optional, default=10): The maximum number of videos to return.
  - `pageToken` (optional): Token for pagination to fetch the next set of videos.

- Success Response:

  - **Code:** 200 OK

  - **Content:** `VideosResponse` object including a list of videos, `prevPageToken`, and `nextPageToken`.

  - **Example Content:**

    ```json
    {
      "prevPageToken": "CAUQAA",
      "nextPageToken": "CBkQAA",
      "videoList": [
        {
          "videoId": "dQw4w9WgXcQ",
          "title": "Never Gonna Give You Up",
          "description": "The official video for “Never Gonna Give You Up” by Rick Astley",
          "coverImgUrl": "https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg",
          "publishedAt": "1987-10-25T07:00:00Z",
          "channel": {
            "channelName": "RickAstleyVEVO",
            "channelId": "UCuAXFkgsw1L7xaCfnd5JJOw"
          },
          "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
      ]
    }
    ```

- Example Call:

  ```bash
  curl -X GET "http://localhost:30050/api/search?query=spring+boot&maxResults=5"
  ```

- **Error Responses:** Please refer to the common HTTP Status Codes section.

---



### Search Videos by Channel ID

> Retrieves videos from a specific YouTube channel.

- **URL:** `/api/searchByChannelId`

- **Method:** `GET`

- Query Parameters:

  - `channelId` (required): The YouTube channel ID.
  - `maxResults` (optional, default=10): The maximum number of videos to return.
  - `pageToken` (optional): Token for pagination to fetch the next set of videos.

- Success Response:

  - **Code:** 200 OK

  - **Content:** `VideosResponse` object including a list of videos, `prevPageToken`, and `nextPageToken`.

  - **Example Content:**

    ```json
    {
      "prevPageToken": null,
      "nextPageToken": "CAoQAA",
      "videoList": [
        {
          "videoId": "NeHwRcJiQqM",
          "title": "We Were WRONG About Blackbeard!",
          "description": "Subscribe for more One Piece content: https://www.youtube.com/grandlinereview?sub_confirmation=1 NEW MERCH!",
          "coverImgUrl": "https://i.ytimg.com/vi/NeHwRcJiQqM/default.jpg",
          "publishedAt": "2024-04-03T11:00:17.000Z",
          "channel": {
            "channelName": "GrandLineReview",
            "channelId": "UC2msEzmNU3Um7KF2EnXJBFA"
          },
          "videoUrl": "https://www.youtube.com/embed/NeHwRcJiQqM"
        }
      ]
    }
    ```

- Example Call:

  ```bash
  curl -X GET "http://localhost:30050/api/searchByChannelId?channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=5"
  ```

---



### Search Videos Ordered by Date

Searches for videos matching a query string, with results ordered by their upload date.

- **URL:** `/api/searchByDate`

- **Method:** `GET`

- Query Parameters:

  - `query` (required): The search query string.
  - `maxResults` (optional, default=10): The maximum number of results to return.
  - `pageToken` (optional): Token for pagination to fetch the next set of videos.

- Success Response:

  - **Code:** 200 OK

  - **Content:** `VideosResponse` object including a list of videos, `prevPageToken`, and `nextPageToken`.

  - **Example Content:**

    ```json
    {
      "prevPageToken": "CAUQAA",
      "nextPageToken": "CBkQAA",
      "videoList": [
        {
          "videoId": "dQw4w9WgXcQ",
          "title": "Never Gonna Give You Up",
          "description": "The official video for “Never Gonna Give You Up” by Rick Astley",
          "coverImgUrl": "https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg",
          "publishedAt": "1987-10-25T07:00:00Z",
          "channel": {
            "channelName": "RickAstleyVEVO",
            "channelId": "UCuAXFkgsw1L7xaCfnd5JJOw"
          },
          "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
      ]
    }
    ```

- Example Call:

  ```bash
  curl -X GET "http://localhost:30050/api/searchByDate?query=technology&maxResults=5"
  ```

---



### Fetch Popular Videos

> Retrieves a list of popular videos from YouTube.

- **URL:** `/api/popularVideos`

- **Method:** `GET`

- URL Parameters:

  - `maxResults` (optional): Maximum number of videos to return. Default is 10.
  - `pageToken` (optional): Token for pagination to fetch the next set of videos.

- Success Response:

  - **Code:** 200

  - Example Content:

    ```json
    {
      "prevPageToken": "CAUQAA",
      "nextPageToken": "CBkQAA",
      "videoList": [
        {
          "videoId": "dQw4w9WgXcQ",
          "title": "Never Gonna Give You Up",
          "description": "The official video for “Never Gonna Give You Up” by Rick Astley",
          "coverImgUrl": "https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg",
          "publishedAt": "1987-10-25T07:00:00Z",
          "channel": {
            "channelName": "RickAstleyVEVO",
            "channelId": "UCuAXFkgsw1L7xaCfnd5JJOw"
          },
          "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
      ]
    }
    ```

------

### **Search Videos** Ordered By Popularity

> Searches for videos on YouTube based on a specified query ordered by popularity. This endpoint can be used in AI-recommendation

- **URL:** `/api/searchPopularVideos`

- **Method:** `GET`

- URL Parameters:

  - `query` (required): The search query string.
  - `maxResults` (optional): Maximum number of videos to return. Default is 10.
  - `pageToken` (optional): Token for pagination to fetch the next set of videos.

- Success Response:

  - **Code:** 200

  - Example Content:

    ```json
    {
      "prevPageToken": "CAoQAA",
      "nextPageToken": "CGQQAA",
      "videoList": [
        {
          "videoId": "LSEYdU8Dp9Y",
          "title": "What is Spring-Boot Framework?",
          "description": "In this video, we're going to learn what is Spring-Boot framework.",
          "coverImgUrl": "https://i.ytimg.com/vi/LSEYdU8Dp9Y/default.jpg",
          "publishedAt": "2022-12-12T20:24:48Z",
          "channel": {
            "channelName": "Visual Computer Science",
            "channelId": "UCHd1qamEkVSlTWkEqIqJbEQ"
          },
          "videoUrl": "https://www.youtube.com/watch?v=LSEYdU8Dp9Y"
        }
      ]
    }
    ```

------

## Error Responses

- 400 Bad Request: if a required request parameter is not supplied
- 500 Server Internal Error: if server is unable to process your request



## Notes

- The `prevPageToken` and `nextPageToken` in the response facilitate pagination through the YouTube video dataset.
- Video URLs and cover image URLs are provided to easily access and display video content and thumbnails.
