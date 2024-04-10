# Video Significance API

The Video Significance API allows for the adjustment of significance levels for both genres and channels based on their relevance. Below are the available endpoints within this API.

## Base URL

http://localhost:30055/api/youtube

## Adjust Genre Significance

Adjusts the significance of specified genres either upwards or downwards.

**POST** `/adjustGenreSignificance`

### Request Body

- `indexMap`: Map linking genre names to their indices.
- `genreDataList`: List of `GenreData` objects.
- `relatedGenres`: List of genre names to adjust.
- `isWanted`: Boolean indicating whether to increase (`true`) or decrease (`false`) the significance.

#### Example

```json
{
  "indexMap": {"Pop": 2, "Rock": 0, "Jazz": 1},
  "genreDataList": [
    {"name": "Rock", "significance": 10},
    {"name": "Jazz", "significance": 5},
    {"name": "Pop", "significance": 7}
  ],
  "relatedGenres": ["Jazz", "Pop"],
  "isWanted": true
}
```

### Responses

- `200 OK`: Returns the updated list of `GenreData` objects.
- `400 Bad Request`: If the request body is not properly formed.
- `500 Internal Server Error`: If an unexpected error occurs.

------

## Adjust Channel Significance

Adjusts the significance of specified channels.

**POST** `/adjustChannelSignificance`

### Request Body

- `indexMap`: Map linking channel names to their indices.
- `channelDataList`: List of `ChannelData` objects.
- `relatedChannels`: List of channel names to adjust.

#### Example

```json
{
  "indexMap": {"ChannelA": 0, "ChannelB": 1},
  "channelDataList": [
    {"channelId": "ChannelA", "significance": 15},
    {"channelId": "ChannelB", "significance": 9}
  ],
  "relatedChannels": ["ChannelB"]
}
```

### Responses

- `200 OK`: Returns the updated list of `ChannelData` objects.
- `400 Bad Request`: If the request body is not properly formed.
- `500 Internal Server Error`: If an unexpected error occurs.

------

## Adjust Both Genre and Channel Significance

Composite operation to adjust the significance of both genres and channels.

**POST** `/adjustAll`

### Request Body

Includes fields for both genre and channel adjustments, similar to the individual endpoints.

#### Example

```json
{
  "indexMap": {"Pop": 2, "Rock": 0, "Jazz": 1},
  "genreDataList": [
    {"name": "Rock", "significance": 10},
    {"name": "Jazz", "significance": 5},
    {"name": "Pop", "significance": 7}
  ],
  "relatedGenres": ["Jazz", "Pop"],
  "isWanted": false,
  "indexMapForChannel": {"ChannelA": 0, "ChannelB": 1},
  "channelDataList": [
    {"channelId": "ChannelA", "significance": 15},
    {"channelId": "ChannelB", "significance": 9}
  ],
  "relatedChannels": ["ChannelB"]
}
```

### Responses

- `200 OK`: Returns a map with the updated list of `GenreData` and `ChannelData` objects.
- `400 Bad Request`: If the request body is not properly formed.
- `500 Internal Server Error`: If an unexpected error occurs.