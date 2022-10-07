import { useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'

export const DateInput = (props) => {
  const { name, options, label, errorText, isClearable = false } = props
  const [startDate, setStartDate] = useState(new Date())

  const {
    register,
    formState: { errors },
  } = useForm()
  return (
    <div className={'input'}>
      <label htmlFor={name}>{label}</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat={'dd-MM-yyyy'}
        isClearable={isClearable}
      />
      {errors.name && <span>{errorText}</span>}
    </div>
  )
}
