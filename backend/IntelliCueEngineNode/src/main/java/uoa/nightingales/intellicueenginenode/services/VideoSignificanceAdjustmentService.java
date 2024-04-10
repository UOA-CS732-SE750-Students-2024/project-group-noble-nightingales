package uoa.nightingales.intellicueenginenode.services;

import uoa.nightingales.intellicueenginenode.pojos.ChannelData;
import uoa.nightingales.intellicueenginenode.pojos.GenreData;

import java.util.List;
import java.util.Map;

/**
 * Interface for services that adjust the significance of video genres.
 * This interface defines a method for modifying the significance of a list of genres
 * based on their relation to a particular context, such as being associated with a video or set of videos.
 * Implementations of this interface should provide the logic to either increase or decrease
 * the significance of each genre in the list, depending on whether the genres are considered wanted or unwanted.
 */
public interface VideoSignificanceAdjustmentService {


    /**
     * Adjusts the significance of genres in a given list based on their relevance.
     *
     * @param indexMap A map linking genre names to their indices in the genreDataList.
     *                 This map should be updated if the order of genres in the list changes as a result
     *                 of adjusting their significances.
     * @param genreDataList A list of GenreData objects, each representing a genre with a significance level.
     *                      This list is expected to be sorted by significance in descending order,
     *                      and its order may be modified by this method to maintain this sorting after adjustments.
     * @param relatedGenres A list of genre names that are to have their significance adjusted. The significance
     *                      of genres not in this list should remain unchanged.
     * @param isWanted Indicates whether the significance of the genres in relatedGenres should be increased (true)
     *                 or decreased (false). An increase in significance might be used to promote genres related to
     *                 a popular or currently featured video, while a decrease might be used to de-emphasize genres
     *                 that are less relevant or overrepresented.
     * @return The modified list of GenreData objects, with adjustments to the significance of the specified genres
     *         and any necessary reordering to maintain sorting by descending significance. The original list is
     *         directly modified, and the same list reference is returned.
     */
    List<GenreData> adjustGenreSignificance(Map<String, Integer> indexMap, List<GenreData> genreDataList, List<String> relatedGenres, boolean isWanted);



    /**
     * Adjusts the significance of channels in the provided list based on their relevance or importance.
     * This method is designed to modify the significance of specific channels identified in the
     * relatedChannels list. The adjustment process should reflect the current needs or criteria of the
     * system, such as promoting channels that are gaining popularity or demoting those that are less relevant.
     *
     * @param indexMap A map associating channel names with their positions (indices) in the channelDataList.
     *                 This map is crucial for efficiently locating channels in the list. Any changes in the
     *                 order of channels as a result of significance adjustments must be reflected in this map.
     * @param channelDataList A list of ChannelData objects, where each object represents a channel along with
     *                        its current significance. The list is expected to be sorted in descending order of
     *                        significance. Adjustments to channel significances may alter the order of this list,
     *                        and it is the responsibility of this method to maintain the descending order.
     * @param relatedChannels A list of the names of channels whose significance needs to be adjusted. The method
     *                        will focus on these channels for any significance modification. The exact nature of
     *                        the adjustment (increase or decrease in significance) and the criteria for such
     *                        adjustments are determined by the implementation.
     * @return The adjusted list of ChannelData objects, with updated significances for the channels specified
     *         in relatedChannels and any necessary reordering to preserve sorting by descending significance.
     *         The method directly modifies the passed-in channelDataList and also returns this list for convenience.
     */
    List<ChannelData> adjustChannelSignificance(Map<String, Integer> indexMap, List<ChannelData> channelDataList, List<String> relatedChannels);




}
