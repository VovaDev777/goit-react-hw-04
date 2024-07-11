// import React from 'react'
import Header from '../Header/Header'
import { useEffect, useState } from 'react'
import '../../reset.css'
import ImageGallery from '../ImageGallery/ImageGallery'
import { fetchPhotos } from '../../fetchData'
import { ColorRing } from 'react-loader-spinner'
import css from './App.module.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
// import toast from 'react-hot-toast/headless'





const App = () => {
    const [topic, setTopic] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError]= useState(false);


    useEffect(() => {
        if (topic === "") {
            return;
        }

        async function getPhoto() {
            try {
                setLoading(true);
                const photos = await fetchPhotos(topic);
                setData(photos);
                setLoading(false);
            } catch (error) {
                setLoading(false)
                setError(true)
                console.log(error)
            }

        }
        getPhoto();
        

    }, [topic])

    console.log(data)


    return (
        <>
            <Header onAdd={setTopic} />
            {loading && (
                <div className={css.container}>
                    <ColorRing
                        className={css.loader}
                        height="130"
                        width="130"
                        colors={['#A3D0C3', '#7BA7AB', '#A3D0C3', '#7BA7AB', '#A3D0C3']}
                    />
                </div>
            )}
            {error ? <ErrorMessage /> : <ImageGallery images={data} />}
        </>
    )
}

export default App