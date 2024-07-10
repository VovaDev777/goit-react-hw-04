
import ImageCard from '../ImageCard/ImageCard'
import css from './ImageGallery.module.css'

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.imageList}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard
            url={image.urls.small}
            desc={image.alt_description}
          />
        </li>
      ))}
    </ul>

  )
}

export default ImageGallery