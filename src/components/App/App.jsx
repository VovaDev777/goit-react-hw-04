// import React from 'react'
import Header from '../Header/Header'
import { useEffect, useState } from 'react'
import '../../reset.css'
import axios from 'axios'

const ACCES_KEY = "YGRmWj6GDedxJ_oXB0FmTQ150ytZjLND_WU28-vdnDY"


const App = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await axios.get(
                `https://api.unsplash.com/photos/?client_id=${ACCES_KEY}&query=car`
            );
            console.log(response.data);
        }

        getData();
    }, [])


    const getSearchValue = (value) => {
        console.log(value)
    }




    return (
        <>
            <Header onAdd={getSearchValue} />
        </>
    )
}

export default App