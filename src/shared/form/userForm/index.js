import { formLabels } from '../labels'

export const userForm = {
  firstName: {
    id: 'firstName',
    label: 'First Name:',
    options: { required: true },
    errorMessage: formLabels.required,
  },
  lastName: {
    id: 'lastName',
    label: 'Last Name:',
    options: { required: true },
    errorMessage: formLabels.required,
  },
  email: {
    id: 'email',
    label: 'Email:',
    options: {
      required: true,
      pattern: /[A-z0-9._!#$%&*-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    },
    errorMessage: formLabels.incorrectEmail,
  },
  phone: {
    id: 'phone',
    label: 'Phone:',
    options: {
      required: true,
      pattern: /^(\+|00)[0-9]{1,3}\s[0-9]{9}$/,
    },
    errorMessage: formLabels.incorrectPhone,
  },
  birthday: {
    id: 'birthday',
    label: 'Birthday:',
    options: { required: true },
    errorMessage: formLabels.required,
  },
  about: {
    id: 'about',
    label: 'About:',
    options: { required: true },
    errorMessage: formLabels.required,
  },
  avatar: {
    id: 'avatar',
    label: 'Avatar:',
    options: { required: true },
    errorMessage: formLabels.required,
  },
}
