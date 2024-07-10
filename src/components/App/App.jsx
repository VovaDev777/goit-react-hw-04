// import React from 'react'
import Header from '../Header/Header'
import { useEffect, useState } from 'react'
import '../../reset.css'


const App = () => {
const [searchWord, setSearchWord] = useState('');

    console.log(searchWord)

  return (
    <>
        <Header onAdd={setSearchWord}/>
    </>
  )
}

export default App