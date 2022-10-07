import { useForm } from 'react-hook-form'
import { Form } from '../../shared/form'
import { userForm } from '../../shared/form/userForm'
import {
  DateInput,
  EmailInput,
  FileUploadField,
  PhoneField,
  Textarea,
  TextField,
} from '../../shared/form/input'

export const UserInformation = () => {
  const { register, handleSubmit } = useForm()

  const submitFormHandler = (data) => {
    console.log(data)
  }
  return (
    <Form
      onSubmit={handleSubmit(submitFormHandler)}
      submitButtonText={'Submit Form'}
    >
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
        isClearable
      />
      <Textarea name={userForm.about.id} label={userForm.about.label} />
      <FileUploadField
        name={userForm.avatar.id}
        label={userForm.avatar.label}
      />
    </Form>
  )
}
