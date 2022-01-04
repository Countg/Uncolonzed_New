import axios from "axios";


const latestEpisodes = async (data) => {

    try {
        const res = await axios.get(process.env.BASE_URL)
    
        let episodes = res.data.items;
        let fourEpisodes = episodes.splice(0, 7);
    
        return fourEpisodes;

    } catch (error) {
        console.log(error)
    }



};

export default latestEpisodes;