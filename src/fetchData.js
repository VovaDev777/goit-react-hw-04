import axios from 'axios'

const ACCES_KEY = "YGRmWj6GDedxJ_oXB0FmTQ150ytZjLND_WU28-vdnDY"

export const fetchPhotos = async (topic) => {
    const response = await axios.get(
        `https://api.unsplash.com/search/photos/?client_id=${ACCES_KEY}&page=1&query=${topic}`
    );
    return response.data.results;
}