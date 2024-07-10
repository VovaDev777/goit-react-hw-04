// import React from 'react'
import Header from '../Header/Header'
import { useEffect, useState } from 'react'
import '../../reset.css'
import axios from 'axios'


const App = () => {



    
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