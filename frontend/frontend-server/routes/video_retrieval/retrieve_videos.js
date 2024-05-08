import express from 'express';
import { concatenateUrl } from '../../helpers/UrlHelper.js';
import youtubeConfig from '../../configs/youtube-config.json' assert { type: 'json' };
import mongoDBConfig from '../../configs/mongodb-config.json' assert { type: 'json' };
import engineConfig from '../../configs/engine-config.json' assert { type: 'json' };
import aiConfig from '../../configs/ai-config.json' assert { type: 'json' };
import axios from 'axios';

const router = express.Router();

router.get('/recommendation', async (req, res) => {
    const { userId } = req.query;  // Correct extraction of userId from query

    // Construct URLs using configuration files
    const findYoutubeHistoryUrl = concatenateUrl(mongoDBConfig, mongoDBConfig.findById);
    const searchUrl = concatenateUrl(youtubeConfig, youtubeConfig.searchVideos);

    try {
        // Fetching YouTube history data from MongoDB using params
        const historyResponse = await axios.get(findYoutubeHistoryUrl, { params: { id: userId } });
        // Check if response data is not in the expected format or is empty
        if (typeof historyResponse.data !== 'object' || historyResponse.data === null || !historyResponse.data.genreDataList) {
            console.log('Unexpected data format or no data:', historyResponse.data);
            historyResponse.data = { genreDataList: [{ name: 'movie', significance: 1}] }; // Default genre list
        }

        // Ensure there's at least one genre to work with
        if (historyResponse.data.genreDataList.length === 0) {
            historyResponse.data.genreDataList.push({ name: 'movie', significance: 1});
        }

        // Get a random genre from the top three genres
        const topGenres = historyResponse.data.genreDataList.slice(0, 3);
        const randomGenre = topGenres[Math.floor(Math.random() * topGenres.length)];

        try {
            // Search for videos on YouTube using the random genre, with params for better handling
            const searchResult = await axios.get(searchUrl, { 
                params: {
                    query: randomGenre.name,
                    maxResults: 30,
                    pageToken: req.query.pageToken ? req.query.pageToken : ''
                }
            });

            console.log('Search result:', searchResult.data);

            // Send the results
            res.status(200).send(searchResult.data);
        } catch (searchError) {
            console.error('Error during YouTube search:',searchError); 
            res.status(500).send({ message: 'Error during YouTube search' });
        }
    } catch (historyError) {
        console.error('Error fetching YouTube history data:', historyError);
        res.status(500).send({ message: 'Error fetching YouTube history data' });
    }
});



router.post('/click', async (req, res) => {
    const { userId, videoDescription } = req.body;

   // URLs configured from your system's configuration
   const findYoutubeHistoryUrl = concatenateUrl(mongoDBConfig, mongoDBConfig.findById);
   const increaseSignificanceUrl = concatenateUrl(engineConfig, engineConfig.adjustGenreSignificance);
   const saveYoutubeHistoryUrl = concatenateUrl(mongoDBConfig, mongoDBConfig.saveData);
   const getAiExtractionsUrl = concatenateUrl(aiConfig, aiConfig.getYoutubeCategories);

   let relatedGenres, historyData;

   // Step 1: Send videoDescription to AI Endpoint
   try {
       const aiResponse = await axios.get(getAiExtractionsUrl, { params: { youtubeDesc: videoDescription } });
       relatedGenres = aiResponse.data;
   } catch (aiError) {
       console.error('Error fetching AI extractions:', aiError);
       return res.status(500).send({ message: 'Error fetching AI extractions' });
   }

   // Step 2: Fetch YouTube history data
   try {
       const historyResponse = await axios.get(findYoutubeHistoryUrl, { params: { id: userId } });
       if (!historyResponse.data) {
           return res.status(404).send({ message: 'YouTube history data not found' });
       }
       console.log(historyResponse.data)
       historyData = historyResponse.data;
   } catch (historyError) {
       console.error('Error fetching YouTube history data:', historyError);
       return res.status(500).send({ message: 'Error fetching YouTube history data' });
   }

   // Step 3: Increase the significance of related genres
   try {
       const updatedGenresResponse = await axios.post(increaseSignificanceUrl, {
           indexMap: historyData.indexGenreMap,
           genreDataList: historyData.genreDataList,
           relatedGenres: relatedGenres,
           isWanted: true
       });
       
       historyData.genreDataList = updatedGenresResponse.data.genreDataList;
       historyData.indexGenreMap = updatedGenresResponse.data.indexMap;
   } catch (adjustError) {
       console.error('Error adjusting genre significance:', adjustError);
       return res.status(500).send({ message: 'Error adjusting genre significance' });
   }

   // Step 4: Save the updated history data
   try {
       const saveResponse = await axios.post(saveYoutubeHistoryUrl, historyData);
       res.status(200).send(saveResponse.data);
   } catch (saveError) {
       console.error('Error saving YouTube history data:', saveError);
       return res.status(500).send({ message: 'Error saving YouTube history data' });
   }
    


})

export default router;