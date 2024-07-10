import React from 'react'

const ImageCard = ({url, desc}) => {
  return (
    <div>
      <img src={url} alt={desc} />
    </div>
  )
}

export default ImageCard