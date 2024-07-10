// import React from 'react'
import Header from '../Header/Header'
import { useEffect, useState } from 'react'
import '../../reset.css'
import ImageGallery from '../ImageGallery/ImageGallery'
import { fetchPhotos } from '../../fetchData'




const App = () => {
    const [topic, setTopic] = useState("");
    const [data, setData] = useState([]);


    useEffect(() => {
        if (topic === "") {
            return;
        }
        async function getPhoto() {
            const photos = await fetchPhotos(topic)
            setData(photos);
        }
        getPhoto();
        
    }, [topic])

    console.log(data)
    

    
    

    return (
        <>
            <Header onAdd={setTopic} />
            <ImageGallery images={data}/>
        </>
    )
}

export default App