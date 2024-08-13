import css from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className={css.container}>
      <ul className={css.imageList}>
        {images.map((image) => (
          <li key={image.id} onClick={() => onImageClick(image)}>
            <img src={image.urls.small} alt={image.alt_description} className={css.image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
