import { Controller, useFormContext } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './styles.scss'

export const DateInput = (props) => {
  const { name, options, label, errorText, isClearable = false } = props
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div className={'input'}>
      <label htmlFor={name}>{label}</label>
      <div>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              selected={value}
              onChange={onChange}
              dateFormat={'dd-MM-yyyy'}
              isClearable={isClearable}
            />
          )}
          rules={options}
        />

        {errors[name] && <span>{errorText}</span>}
      </div>
    </div>
  )
}
