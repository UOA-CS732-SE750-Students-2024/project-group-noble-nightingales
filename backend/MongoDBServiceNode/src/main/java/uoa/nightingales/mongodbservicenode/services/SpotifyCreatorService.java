package uoa.nightingales.mongodbservicenode.services;

import uoa.nightingales.mongodbservicenode.pojos.SpotifyCreatorData;

import java.util.List;

public interface SpotifyCreatorService {

    List<String> getCreatorListByUserId(String userId);

    void saveCreatorList(SpotifyCreatorData data);
}
