import './styles.scss'

export const Form = (props) => {
  const { children, onSubmit, buttonClassName, submitButtonText } = props
  return (
    <form onSubmit={onSubmit}>
      {children}
      <button className={buttonClassName} type={'submit'}>
        {submitButtonText}
      </button>
    </form>
  )
}
