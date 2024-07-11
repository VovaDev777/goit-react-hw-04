// import React from 'react'
import Header from '../Header/Header'
import { useEffect, useState } from 'react'
import '../../reset.css'
import ImageGallery from '../ImageGallery/ImageGallery'
import { fetchPhotos } from '../../fetchData'
import { ColorRing } from 'react-loader-spinner'
import css from './App.module.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'


const App = () => {
    const [topic, setTopic] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1)

    // useEffect(() => {
    //     if (topic === "") {
    //         return;
    //     }
    //     async function getPhoto() {
    //         try {
    //             setLoading(true);
    //             const photos = await fetchPhotos(topic);
    //             setData(photos);
    //             setLoading(false);
    //         } catch (error) {
    //             setLoading(false)
    //             setError(true)
    //             console.log(error)
    //         }
    //     }
    //     getPhoto();
    // }, [topic])
    const handleSearch = async (currentTopic) => {
        if (currentTopic === topic) {
            return;
        }
        setData([]);
        setTopic(currentTopic);

    };

    console.log(data)
    const handleLoadMore = () => {
        setPage(page + 1);

    }

    useEffect(() => {
        if (topic === "") {
            return;
        }
        async function fetchData() {
            try {
                setLoading(true);
                const photos = await fetchPhotos(topic, page);
                setData(prevData => {
                    return [...prevData, ...photos]
                });
            } catch (error) {
                setError(true)
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [page, topic]);

    return (
        <>
            <Header onAdd={handleSearch} />
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
            {topic !== "" && <LoadMoreBtn click={handleLoadMore} />}
        </>
    )
}

export default App