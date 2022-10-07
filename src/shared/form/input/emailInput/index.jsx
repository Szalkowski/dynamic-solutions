import { useForm } from 'react-hook-form'

export const EmailInput = (props) => {
  const { name, options, label, errorText } = props
  const {
    register,
    formState: { errors },
  } = useForm()
  return (
    <div className={'input'}>
      <label htmlFor={name}>{label}</label>
      <input type={'email'} {...register(name, options)} />
      {errors.name && <span>{errorText}</span>}
    </div>
  )
}
