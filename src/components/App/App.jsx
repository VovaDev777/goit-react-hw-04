// import React from 'react'
import Header from '../Header/Header'
import { useEffect, useState } from 'react'
import '../../reset.css'
import ImageGallery from '../ImageGallery/ImageGallery'




const App = () => {
    const [searchWord, setSearchWord] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        
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