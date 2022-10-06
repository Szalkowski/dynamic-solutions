import { useForm } from 'react-hook-form'
import { Form } from '../../shared/form'
import { formLabels } from '../../shared/form/labels'
import { userForm } from '../../shared/form/userForm'

export const UserInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submitFormHandler = (data) => {
    console.log(data)
  }
  return (
    <Form
      onSubmit={handleSubmit(submitFormHandler)}
      submitButtonText={'Submit Form'}
    >
      <input {...register('firstName', userForm.firstName.options)} />
      {errors.firstName && <span>{formLabels.required}</span>}
      <input {...register('lastName', userForm.lastName.options)} />
      {errors.lastName && <span>{formLabels.required}</span>}
      <input type={'email'} {...register('email', userForm.email.options)} />
      {errors.email && <span>{formLabels.incorrectEmail}</span>}
      <input type={'tel'} {...register('phone', userForm.phone.options)} />
      {errors.phone && <span>{formLabels.incorrectPhone}</span>}
      <input type={'date'} {...register('birthday')} />
      <textarea {...register('about')} />
      <input type={'file'} {...register('avatar')} />
    </Form>
  )
}
