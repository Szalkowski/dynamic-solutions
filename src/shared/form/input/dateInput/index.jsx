import { Controller, useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import './styles.scss'

export const DateInput = (props) => {
  const { name, options, label, errorText, isClearable = false } = props
  const [startDate, setStartDate] = useState()
  const {
    control,
    formState: { errors },
  } = useForm()
  return (
    <div className={'input'}>
      <label htmlFor={name}>{label}</label>

      <Controller
        name={name}
        control={control}
        render={() => (
          <DatePicker
            name={name}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat={'dd-MM-yyyy'}
            isClearable={isClearable}
          />
        )}
        rules={options}
      />
      {errors.name && <span>{errorText}</span>}
    </div>
  )
}
