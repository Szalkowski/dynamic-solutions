import { Form } from '../../shared/form'
import { userForm } from '../../shared/form/userForm'
import { useDispatch } from 'react-redux'
import {
  DateInput,
  EmailInput,
  FileUploadField,
  PhoneField,
  Textarea,
  TextField,
} from '../../shared/form/input'
import { submitForm } from './reducer'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

export const UserInformation = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const submitFormHandler = (data) => {
    const serializedForm = {}
    Object.keys(data).forEach((field) => {
      serializedForm[field] = data[field]
      if (userForm.birthday.id in serializedForm) {
        serializedForm[userForm.birthday.id] = moment(
          data[userForm.birthday.id]
        ).format('DD-MM-yyyy')
      }
      if (userForm.avatar.id in serializedForm) {
        serializedForm[userForm.avatar.id] = data.avatar[0]?.name
      }
    })
    dispatch(submitForm(serializedForm))
    navigate('/user-profile')
  }

  return (
    <Form onSubmit={submitFormHandler} submitButtonText={'Submit Form'}>
      <TextField
        name={userForm.firstName.id}
        options={userForm.firstName.options}
        label={userForm.firstName.label}
        errorText={userForm.firstName.errorMessage}
      />
      <TextField
        name={userForm.lastName.id}
        options={userForm.lastName.options}
        label={userForm.lastName.label}
        errorText={userForm.lastName.errorMessage}
      />
      <EmailInput
        name={userForm.email.id}
        options={userForm.email.options}
        label={userForm.email.label}
        errorText={userForm.email.errorMessage}
      />
      <PhoneField
        name={userForm.phone.id}
        options={userForm.phone.options}
        label={userForm.phone.label}
        errorText={userForm.phone.errorMessage}
      />
      <DateInput
        name={userForm.birthday.id}
        label={userForm.birthday.label}
        options={userForm.birthday.options}
        errorText={userForm.birthday.errorMessage}
        maxDate={moment(new Date()).toDate()}
        isClearable
      />
      <Textarea
        name={userForm.about.id}
        label={userForm.about.label}
        options={userForm.about.options}
        errorText={userForm.about.errorMessage}
      />
      <FileUploadField
        name={userForm.avatar.id}
        label={userForm.avatar.label}
        options={userForm.avatar.options}
        errorText={userForm.avatar.errorMessage}
      />
    </Form>
  )
}
