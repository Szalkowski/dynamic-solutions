import { useFormContext } from 'react-hook-form'

export const FileUploadField = (props) => {
  const { name, options, label, errorText, acceptedFiles } = props
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <div className={'input'}>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          type={'file'}
          {...register(name, options)}
          accept={acceptedFiles}
        />

        {errors[name] && <span>{errorText}</span>}
      </div>
    </div>
  )
}
