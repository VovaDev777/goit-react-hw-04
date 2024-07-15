
import ImageCard from '../ImageCard/ImageCard'
import css from './ImageGallery.module.css'

const ImageGallery = ({ images }) => {
  return (
    <div className={css.container}>
      <ul className={css.imageList}>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard
              url={image.urls.small}
              desc={image.alt_description}
              modalUrl={image.urls.regular}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}



export default ImageGallery