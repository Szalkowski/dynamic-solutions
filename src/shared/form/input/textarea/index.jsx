import { useFormContext } from 'react-hook-form'
import './styles.scss'

export const Textarea = (props) => {
  const { name, options, label, errorText } = props
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <div className={'input'}>
      <label htmlFor={name}>{label}</label>
      <div>
        <textarea {...register(name, options)} />

        {errors[name] && <span>{errorText}</span>}
      </div>
    </div>
  )
}
