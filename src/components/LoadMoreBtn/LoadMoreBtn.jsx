import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ click }) => {
  return (
    <div className={css.con}>
      <button onClick={click} className={css.btn}>Load more</button>
    </div>
  )
}

export default LoadMoreBtn