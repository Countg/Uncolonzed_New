import axios from 'axios';
import he from 'he';

const latestEpisodes = async () => {
  try {
    const res = await axios.get(process.env.BASE_URL);

    // Log response structure to debug
    console.log('Full API Response:', res.data);

    if (!res.data || !Array.isArray(res.data.items)) {
      console.error('API response does not contain a valid episodes array');
      return { image: null, episodes: [] };
    }

    let episodes = res.data.items; // This is now correctly pointing to an array
    let podImage = res.data.feed?.image || null; // Fix: Get image from `feed`

    console.log('Podcast Image:', podImage);

    const removeTags = (str) => {
      if (!str) return '';
      return he.decode(str.replace(/(<([^>]+)>)/gi, ''));
    };

    // Extract and clean episode data
    let fourEpisodes = episodes.slice(0, 7).map((episode) => ({
      ...episode,
      title: removeTags(episode.title),
      description: removeTags(episode.description),
    }));

    return { image: podImage, episodes: fourEpisodes };
  } catch (error) {
    console.error('Error fetching episodes:', error);
    return { image: null, episodes: [] };
  }
};

export default latestEpisodes;
