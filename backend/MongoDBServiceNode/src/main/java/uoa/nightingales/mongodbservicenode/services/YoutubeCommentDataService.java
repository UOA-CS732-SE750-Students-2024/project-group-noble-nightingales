package uoa.nightingales.mongodbservicenode.services;

import uoa.nightingales.mongodbservicenode.pojos.YoutubeCommentData;

import java.util.List;

/**
 * Service interface for managing YouTube comment data.
 * <p>
 * This interface defines the operations for saving YouTube comment data
 * and retrieving comments associated with a specific video ID.
 */
public interface YoutubeCommentDataService {

    /**
     * Saves a {@link YoutubeCommentData} entity to the database.
     * <p>
     * If the {@code data} entity has an {@code id} that matches an existing document,
     * the existing document is updated with the values from the {@code data} entity.
     * If the {@code data} entity does not have an {@code id}, or the {@code id} does not
     * match any existing document, a new document is inserted into the database.
     *
     * @param data the {@link YoutubeCommentData} entity to be saved or updated
     * @return the saved or updated {@link YoutubeCommentData} entity, including the generated ID
     *         if a new document was inserted
     */
    YoutubeCommentData saveData(YoutubeCommentData data);

    /**
     * Retrieves a list of {@link YoutubeCommentData} entities associated with a specific video ID.
     * <p>
     * This method searches the database for comments that are linked to the given {@code videoId}.
     * It returns all matching comments as a list. If no comments are found for the specified {@code videoId},
     * an empty list is returned.
     *
     * @param videoId the unique identifier of the video for which comments are being retrieved
     * @return a list of {@link YoutubeCommentData} entities associated with the specified {@code videoId};
     *         if no comments are found, the list will be empty
     */
    List<YoutubeCommentData> getCommentsByVideoId(String videoId);
}
