import css from './ImageCard.module.css'


const ImageCard = ({url, desc}) => {
  return (
    <div>
      <img src={url} alt={desc} className={css.image}/>
    </div>
  )
}

export default ImageCard

