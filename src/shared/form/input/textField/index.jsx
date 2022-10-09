import { useFormContext } from 'react-hook-form'

export const TextField = (props) => {
  const { name, options, label, errorText } = props
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <div className={'input'}>
      <label htmlFor={name}>{label}</label>
      <div>
        <input {...register(name, { ...options })} />
        {errors[name] && <span>{errorText}</span>}
      </div>
    </div>
  )
}
