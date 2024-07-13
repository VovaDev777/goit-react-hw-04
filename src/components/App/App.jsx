// import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { useEffect, useState } from 'react'
import '../../reset.css'
import ImageGallery from '../ImageGallery/ImageGallery'
import { fetchPhotos } from '../../fetchData'
import { ColorRing } from 'react-loader-spinner'
import css from './App.module.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
    const [topic, setTopic] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(0);

    const handleSearch = async (currentTopic) => {
        if (currentTopic === topic) {
            return;
        }
        setPage(1);
        setData([]);
        setTopic(currentTopic);
    };
    
    // console.log(data)
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
                if (photos.total === 0) {
                    toast.error('We found nothing');
                } else {
                    toast.success('Success!');
                }
                setData(prevData => {
                    return [...prevData, ...photos.results]
                });
                setMaxPage(photos.total_pages);
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
            <SearchBar onAdd={handleSearch} />
            {error ? <ErrorMessage /> : <ImageGallery images={data} />}
            {topic !== "" && !error && !loading && maxPage != page && maxPage != 0 && <LoadMoreBtn click={handleLoadMore} />}
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
            <Toaster />
        </>
    )
}

export default App