package uoa.nightingales.spotifyservicenode.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import uoa.nightingales.spotifyservicenode.domains.SpotifyResponse;

/**
 * The {@code SwitchPageService} interface defines the contract for services capable of fetching and parsing
 * paginated results from Spotify's Web API. It is designed to be generic, allowing for flexibility in the type
 * of entities being fetched, such as tracks, artists, albums, etc.
 * <p>
 * This interface supports operations that require pagination through Spotify's API responses, enabling
 * the implementation to navigate through pages of results based on a provided URL. It is typically used
 * when an initial request to Spotify's API returns a paginated response and subsequent requests are needed
 * to fetch additional pages.
 *
 * @param <Y> the type of the entities contained in the paginated results. This generic type allows for the
 *            use of this service with various types of data models representing Spotify entities.
 */
public interface SwitchPageService<Y> {


    /**
     * Fetches a page of results from Spotify's Web API based on the provided pagination URL. This method is
     * responsible for making the HTTP request to the given URL, parsing the JSON response, and converting
     * it into a {@link SpotifyResponse} object containing a list of entities of type {@code Y}.
     *
     * @param pageUrl the URL for fetching the next or previous page of results as provided by Spotify's API.
     *                This URL is typically extracted from the pagination links in a Spotify API response.
     * @return a {@link SpotifyResponse} object containing a list of entities of type {@code Y} that represent
     *         the data in the fetched page. The {@link SpotifyResponse} also includes pagination details
     *         such as links to the next and previous pages, if available.
     * @throws JsonProcessingException if there is an error in parsing the JSON response from Spotify's API.
     */
    SpotifyResponse<Y> switchPage(String pageUrl) throws JsonProcessingException;

}
