import axios from "axios";


const latestEpisodes = async (data) => {

    try {
        const res = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.spreaker.com%2Fshow%2F4245532%2Fepisodes%2Ffeed')
    
        let episodes = res.data.items;
        let fourEpisodes = episodes.splice(0, 7);
    
        return fourEpisodes;

    } catch (error) {
        console.log(error)
    }



};

export default latestEpisodes;