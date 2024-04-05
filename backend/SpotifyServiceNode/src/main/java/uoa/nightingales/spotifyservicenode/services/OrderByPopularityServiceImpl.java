package uoa.nightingales.spotifyservicenode.services;

import org.springframework.stereotype.Service;
import uoa.nightingales.spotifyservicenode.domains.SpotifyResponse;
import uoa.nightingales.spotifyservicenode.pojos.Popularable;
import uoa.nightingales.spotifyservicenode.pojos.TrackInfo;

import java.util.Comparator;
import java.util.List;

@Service("orderByPopularityService")
public class OrderByPopularityServiceImpl implements OrderByPopularityService{

    @Override
    public <T extends Popularable> SpotifyResponse<T> orderByPopularity(SpotifyResponse<T> response) {
        List<T> sortedList = response.getData().stream()
                .sorted(Comparator.comparingInt(Popularable::getPopularity).reversed())
                .toList();

        return new SpotifyResponse<>(response.getPreviousPage(), response.getNextPage(), sortedList);
    }

}
