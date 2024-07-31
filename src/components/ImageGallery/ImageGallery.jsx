import { useState } from 'react';
import ImageModal from '../ImageModal/ImageModal';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={css.container}>
      <ul className={css.imageList}>
        {images.map((image) => (
          <li key={image.id} onClick={() => openModal(image)}>
            <img src={image.urls.small} alt={image.alt_description} className={css.image} />
          </li>
        ))}
      </ul>
      {selectedImage && (
        <ImageModal
          isOpen={modalIsOpen}
          modalUrl={selectedImage.urls.regular}
          desc={selectedImage.alt_description}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ImageGallery;
