import './styles.scss'
import { FormProvider, useForm } from 'react-hook-form'

export const Form = (props) => {
  const { children, onSubmit, buttonClassName, submitButtonText } = props
  const methods = useForm()
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
        <button className={buttonClassName} type={'submit'}>
          {submitButtonText}
        </button>
      </form>
    </FormProvider>
  )
}
