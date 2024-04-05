package uoa.nightingales.spotifyservicenode.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import uoa.nightingales.spotifyservicenode.domains.SpotifyResponse;
import uoa.nightingales.spotifyservicenode.pojos.ArtistInfo;
import uoa.nightingales.spotifyservicenode.pojos.TrackInfo;



public interface SearchService {

    SpotifyResponse<TrackInfo> searchMusics(String query, int maxResults) throws JsonProcessingException;

    SpotifyResponse<ArtistInfo> searchArtists(String query, int maxResults) throws JsonProcessingException;
}
