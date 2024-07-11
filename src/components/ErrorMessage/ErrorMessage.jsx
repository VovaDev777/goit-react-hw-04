import css from './ErrorMessage.module.css'

const ErrorMessage = () => {
  return (
    <div className={css.container}>
        <p className={css.errorMessage}>ERROR 404 PAGE NOT FOUND</p>
        <p className={css.errorMessage}>Sorry, there is an error of loading pictures</p>
        <p className={css.advice}>Try to refresh the page</p>
    </div>
  )
}

export default ErrorMessage