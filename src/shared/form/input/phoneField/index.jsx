import { useFormContext } from 'react-hook-form'

export const PhoneField = (props) => {
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
          type={'tel'}
          {...register(name, options)}
          placeholder={'+000 000000000'}
        />

        {errors[name] && <span>{errorText}</span>}
      </div>
    </div>
  )
}
