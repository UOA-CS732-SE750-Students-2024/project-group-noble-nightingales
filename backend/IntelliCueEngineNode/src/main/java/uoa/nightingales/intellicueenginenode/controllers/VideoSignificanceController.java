package uoa.nightingales.intellicueenginenode.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import uoa.nightingales.intellicueenginenode.domains.GenreDataResponse;
import uoa.nightingales.intellicueenginenode.pojos.ChannelData;
import uoa.nightingales.intellicueenginenode.pojos.GenreData;
import uoa.nightingales.intellicueenginenode.services.VideoSignificanceAdjustmentService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/youtube")
public class VideoSignificanceController {

    final VideoSignificanceAdjustmentService videoSignificanceAdjustmentService;

    /**
     * Adjusts the significance of specified genres.
     *
     * @param indexMap A map linking genre names to their indices.
     * @param genreDataList List of GenreData objects.
     * @param relatedGenres List of related genres to adjust.
     * @param isWanted Flag indicating whether to increase (true) or decrease (false) the significance.
     * @return The updated list of GenreData objects.
     */
    @PostMapping("/adjustGenreSignificance")
    public GenreDataResponse adjustGenreSignificance(@RequestBody Map<String, Integer> indexMap,
                                                     @RequestBody List<GenreData> genreDataList,
                                                     @RequestBody List<String> relatedGenres,
                                                     @RequestParam boolean isWanted) {
        List<GenreData> genreData = videoSignificanceAdjustmentService.adjustGenreSignificance(indexMap, genreDataList, relatedGenres, isWanted);
        return new GenreDataResponse(genreData, indexMap);
    }

    /**
     * Adjusts the significance of specified channels.
     *
     * @param indexMap A map linking channel names to their indices.
     * @param channelDataList List of ChannelData objects.
     * @param relatedChannels List of related channels to adjust.
     * @return The updated list of ChannelData objects.
     */
    @PostMapping("/adjustChannelSignificance")
    public List<ChannelData> adjustChannelSignificance(@RequestBody Map<String, Integer> indexMap,
                                                       @RequestBody List<ChannelData> channelDataList,
                                                       @RequestBody List<String> relatedChannels) {
        return videoSignificanceAdjustmentService.adjustChannelSignificance(indexMap, channelDataList, relatedChannels);
    }


    /**
     * Adjusts the significance of both genres and channels in their respective lists based on their relevance.
     * This method serves as a composite operation that allows the adjustment of significance for both genres and
     * channels within a single API call. It delegates the adjustment tasks to the videoSignificanceAdjustmentService,
     * processing genres and channels according to the provided parameters, then returns a map containing the updated lists
     * of GenreData and ChannelData objects.
     *
     * @param indexMap The map linking genre names to their indices in the genreDataList. This map is used to efficiently
     *                 locate and update genres based on their significance adjustments.
     * @param genreDataList The list of GenreData objects, each representing a genre with a significance level that may be
     *                      adjusted based on the relatedGenres and isWanted parameters.
     * @param relatedGenres The list of genre names to have their significance adjusted. Only genres listed here will be
     *                      affected by the significance adjustment operation.
     * @param isWanted A boolean flag indicating whether the significance of the genres in relatedGenres should be increased
     *                 (true) or decreased (false). This allows for the dynamic promotion or demotion of genres based on
     *                 their current relevance or desirability.
     * @param indexMapForChannel The map linking channel names to their indices in the channelDataList. Similar to indexMap,
     *                           this allows for efficient location and update of channels based on their significance adjustments.
     * @param channelDataList The list of ChannelData objects, each representing a channel with a significance level that may
     *                        be adjusted based on the relatedChannels list.
     * @param relatedChannels The list of channel names to have their significance adjusted. Similar to relatedGenres, only
     *                        channels listed here will be targeted by the significance adjustment operation.
     * @return A map containing two entries: the first is the updated list of GenreData objects as the key, and the second is
     *         the updated list of ChannelData objects as the value. This structure allows for the encapsulation of both adjustments
     *         in a single return value, facilitating combined operations on genres and channels.
     */
    @PostMapping("/adjust")
    public Map<List<GenreData>, List<ChannelData>> adjustAll(@RequestBody Map<String, Integer> indexMap,
                                     @RequestBody List<GenreData> genreDataList,
                                     @RequestBody List<String> relatedGenres,
                                     @RequestParam boolean isWanted,
                                     @RequestBody Map<String, Integer> indexMapForChannel,
                                     @RequestBody List<ChannelData> channelDataList,
                                     @RequestBody List<String> relatedChannels) {

        Map<List<GenreData>, List<ChannelData>> resultMap = new HashMap<>();
        List<GenreData> genreData = videoSignificanceAdjustmentService.adjustGenreSignificance(indexMap, genreDataList, relatedGenres, isWanted);
        List<ChannelData> channelData = videoSignificanceAdjustmentService.adjustChannelSignificance(indexMapForChannel, channelDataList, relatedChannels);
        resultMap.put(genreData, channelData);
        return resultMap;

    }


}
