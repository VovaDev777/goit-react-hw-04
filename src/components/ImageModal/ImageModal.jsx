import css from './ImageModal.module.css';

const ImageModal = ({ isOpen, modalUrl, desc, onClose }) => {
  // if (!isOpen) return null;

  return (
    <div className={css.modalOverlay} onClick={onClose}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={modalUrl} alt={desc} className={css.modalImage} />
      </div>
    </div>
  );
};

export default ImageModal;
