package uoa.nightingales.mongodbservicenode.services;


import uoa.nightingales.mongodbservicenode.pojos.YoutubeHistoryData;

import java.util.Optional;

public interface YoutubeHistoryDataService {

    /**
     * This method either inserts a new record to the database, or updating the existing record
     * based on the existing id
     * @param data to be inserted
     * @return data that is saved
     */
    YoutubeHistoryData saveData(YoutubeHistoryData data);

    /**
     * Retrieves an {@link Optional} instance of {@link YoutubeHistoryData} by its unique identifier.
     * <p>
     * If a {@link YoutubeHistoryData} instance with the specified {@code id} exists in the database,
     * it is returned wrapped in an {@link Optional}. If no such instance exists, an empty {@link Optional}
     * is returned, indicating the absence of any {@link YoutubeHistoryData} with the given {@code id}.
     * <p>
     * This method provides a convenient way to access a potentially non-existent object without
     * the risk of throwing an exception. It allows for easy handling of cases where the
     * {@link YoutubeHistoryData} may or may not be present in the database.
     *
     * @param id The unique identifier of the {@link YoutubeHistoryData} to be retrieved.
     * @return An {@link Optional} containing the found {@link YoutubeHistoryData} instance or an
     *         empty {@link Optional} if no instance with the given {@code id} exists.
     */
    Optional<YoutubeHistoryData> findById(String id);

}
