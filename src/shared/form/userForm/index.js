import { formLabels } from '../labels'

export const userForm = {
  firstName: {
    id: 'first-name-input',
    label: 'First Name:',
    options: { required: true },
    errorMessage: formLabels.required,
  },
  lastName: {
    id: 'last-name-input',
    label: 'Last Name:',
    options: { required: true },
    errorMessage: formLabels.required,
  },
  email: {
    id: 'email-input',
    label: 'Email:',
    options: {
      required: true,
      pattern: /[A-z0-9._!#$%&*-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    },
    errorMessage: formLabels.incorrectEmail,
  },
  phone: {
    id: 'phone-number-input',
    label: 'Phone:',
    options: { pattern: /^(\+|00)[0-9]{1,3}\s[0-9]{9}$/ },
    errorMessage: formLabels.incorrectPhone,
  },
  birthday: {
    id: 'birthday-input',
    label: 'Birthday:',
  },
  about: {
    id: 'about-input',
    label: 'About:',
  },
  avatar: {
    id: 'avatar-input',
    label: 'Avatar:',
  },
}
