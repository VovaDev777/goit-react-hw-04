// import React from 'react'
import Header from '../Header/Header'
import { useEffect, useState } from 'react'
import '../../reset.css'
// import ImageGallery from '../ImageGallery/ImageGallery'
import { fetchPhotos } from '../../fetchData'




const App = () => {
    const [topic, setTopic] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        
        
    }, [topic, data])

    // const getSearchValue = (value) => {
    //     console.log(value)
    // }

    
    

    return (
        <>
            <Header onAdd={setTopic} />
            {/* <ImageGallery/> */}
        </>
    )
}

export default App