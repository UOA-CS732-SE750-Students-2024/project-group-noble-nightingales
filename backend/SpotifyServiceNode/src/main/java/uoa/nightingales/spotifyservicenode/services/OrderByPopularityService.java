package uoa.nightingales.spotifyservicenode.services;

import uoa.nightingales.spotifyservicenode.domains.SpotifyResponse;
import uoa.nightingales.spotifyservicenode.pojos.Popularable;

public interface OrderByPopularityService {

    <T extends Popularable> SpotifyResponse<T> orderByPopularity(SpotifyResponse<T> infoList);


}
