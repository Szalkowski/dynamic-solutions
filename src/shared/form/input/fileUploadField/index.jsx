import { useForm } from 'react-hook-form'

export const FileUploadField = (props) => {
  const { name, options, label, errorText, acceptedFiles } = props
  const {
    register,
    formState: { errors },
  } = useForm()
  return (
    <div className={'input'}>
      <label htmlFor={name}>{label}</label>
      <input
        type={'file'}
        {...register(name, options)}
        accept={acceptedFiles}
      />
      {errors.name && <span>{errorText}</span>}
    </div>
  )
}
