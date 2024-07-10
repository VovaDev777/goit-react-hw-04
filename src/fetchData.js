import axios from 'axios'

const ACCES_KEY = "YGRmWj6GDedxJ_oXB0FmTQ150ytZjLND_WU28-vdnDY"

export const fetchPhotos = async (topic) => {
    const response = await axios.get(
        `https://api.unsplash.com/photos/?client_id=${ACCES_KEY}&query=${topic}`
    );
    return response.data;
}