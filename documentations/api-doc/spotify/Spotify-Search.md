# Spotify Search and Pagination API

## Endpoints

### Search Tracks

Searches for tracks based on a query.

- **URL**: `/api/tracks`
- **Method**: `GET`
- **URL Params**:
    - `query`: String (required)
    - `maxResults`: Integer (optional, default = 10)
- **Success Response**:
    - **Code**: 200 OK
    - **Content**: 
    ```json
    {
        "previousPage": null,
        "nextPage": "http://example.com/api/tracks/switch?page=2",
        "data": [
            {
                "trackTitle": "Track Name",
                "trackId": "track123",
                "playUrl": "http://example.com/play/track123",
                "coverImageUrl": "http://example.com/images/track123.jpg",
                "artistName": ["Artist One", "Artist Two"],
                "artistUrl": ["http://example.com/artists/1", "http://example.com/artists/2"],
                "popularity": 85
            }
        ]
    }
    ```
- **Error Response**:
    - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**: `json processing exception occurred during processing searching tracks`

### Search Artists

Searches for artists based on a query.

- **URL**: `/api/artists`
- **Method**: `GET`
- **URL Params**:
    - `query`: String (required)
    - `maxResults`: Integer (optional, default = 10)
- **Success Response**:
    - **Code**: 200 OK
    - **Content**: 
    ```json
    {
        "previousPage": null,
        "nextPage": "http://example.com/api/artists/switch?page=2",
        "data": [
            {
                "artistId": "artist123",
                "name": "Artist Name",
                "artistUrl": "http://example.com/artists/artist123",
                "numOfFollowers": 1000000,
                "popularity": 90,
                "imageUrl": "http://example.com/images/artist123.jpg",
                "genres": ["Pop", "Dance"]
            }
        ]
    }
    ```
- **Error Response**:
    - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**: `json processing exception occurred during processing searching artists`

### Order Tracks By Popularity

Orders tracks by popularity for a given query.

- **URL**: `/api/tracks/popularity`
- **Method**: `GET`
- **URL Params**:
    - `query`: String (required)
    - `maxResults`: Integer (optional, default = 10)
- **Success Response**:
    - **Code**: 200 OK
    - **Content**: Similar to "Search Tracks" but ordered by popularity.
- **Error Response**:
    - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**: `json processing exception occurred during processing ordering tracks`

### Order Artists By Popularity

Orders artists by popularity for a given query.

- **URL**: `/api/artists/popularity`
- **Method**: `GET`
- **URL Params**:
    - `query`: String (required)
    - `maxResults`: Integer (optional, default = 10)
- **Success Response**:
    - **Code**: 200 OK
    - **Content**: Similar to "Search Artists" but ordered by popularity.
- **Error Response**:
    - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**: `json processing exception occurred during processing ordering artists`

### Switch Page (Tracks)

Fetches the next or previous page of track results.

- **URL**: `/api/tracks/switch`
- **Method**: `GET`
- **URL Params**:
    - `pageUrl`: String (required)
- **Success Response**:
    - **Code**: 200 OK
    - **Content**: Similar to "Search Tracks".
- **Error Response**:
    - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**: `json exception occurred while processing switching page of tracks`

### Switch Page (Artists)

Fetches the next or previous page of artist results.

- **URL**: `/api/artists/switch`
- **Method**: `GET`
- **URL Params**:
    - `pageUrl`: String (required)
- **Success Response**:
    - **Code**: 200 OK
    - **Content**: Similar to "Search Artists".
- **Error Response**:
    - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**: `json exception occurred while processing switching