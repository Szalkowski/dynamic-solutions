import { useForm } from 'react-hook-form'
import './styles.scss'

export const Textarea = (props) => {
  const { name, options, label, errorText } = props
  const {
    register,
    formState: { errors },
  } = useForm()
  return (
    <div className={'input'}>
      <label htmlFor={name}>{label}</label>
      <textarea {...register(name, options)} />
      {errors.name && <span>{errorText}</span>}
    </div>
  )
}
