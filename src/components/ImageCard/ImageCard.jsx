// import css from './ImageCard.module.css'
// import Modal from 'react-modal';


// const ImageCard = ({url, desc}) => {
//   return (
//     <div>
//       <img src={url} alt={desc} className={css.image}/>
//     </div
//   )
// }

// export default ImageCard

import { useState } from 'react';
import Modal from 'react-modal';
import css from './ImageCard.module.css';

Modal.setAppElement('#root');

const ImageCard = ({ url, desc, modalUrl }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <img src={url} alt={desc} className={css.image} onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className={css.modalContent}
        overlayClassName={css.modalOverlay}
      >
        <img src={modalUrl} alt={desc} className={css.modalImage} />
      </Modal>
    </div>
  );
}

export default ImageCard;
