import { useFormContext } from 'react-hook-form'

export const FileUploadField = (props) => {
  const { name, options, label, acceptedFiles, errorText, maxSize } = props

  const {
    register,
    formState: { errors },
  } = useFormContext()

  const fileSizeLimiter = (data) => {
    if (data.files[0].size > maxSize) {
      alert('File is too big!')
      data.value = ''
    }
  }

  return (
    <div className={'input'}>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          type={'file'}
          {...register(name, options)}
          accept={acceptedFiles}
          onChange={(data) => fileSizeLimiter(data.target)}
        />
        {errors[name] && <span>{errorText}</span>}
      </div>
    </div>
  )
}
