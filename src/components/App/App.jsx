// import React from 'react'
import Header from '../Header/Header'
import { useEffect, useState } from 'react'
import '../../reset.css'
import ImageGallery from '../ImageGallery/ImageGallery'

const ACCES_KEY = "YGRmWj6GDedxJ_oXB0FmTQ150ytZjLND_WU28-vdnDY"


const App = () => {
    const [searchWord, setSearchWord] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchPhotos(query) {
            const response = await axios.get(
                `https://api.unsplash.com/photos/?client_id=${ACCES_KEY}&query=${query}`
            );
            setData(response.data);
        }
        // getData(searchWord);
        // console.log(data)
        
    }, [searchWord, data])

    // const getSearchValue = (value) => {
    //     console.log(value)
    // }

    

    return (
        <>
            <Header onAdd={setSearchWord} />
            {/* <ImageGallery/> */}
        </>
    )
}

export default App