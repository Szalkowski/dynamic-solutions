import { useFormContext } from 'react-hook-form'

export const EmailInput = (props) => {
  const { name, options, label, errorText } = props
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <div className={'input'}>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          type={'email'}
          {...register(name, options)}
          placeholder={'example@example.com'}
        />

        {errors[name] && <span>{errorText}</span>}
      </div>
    </div>
  )
}
