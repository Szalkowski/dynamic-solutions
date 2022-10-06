import { formLabels } from '../labels'

export const userForm = {
  firstName: {
    label: 'First Name',
    options: { required: true },
    errorMessage: formLabels.required,
  },
  lastName: {
    label: 'Last Name',
    options: { required: true },
    errorMessage: formLabels.required,
  },
  email: {
    label: 'Email',
    options: {
      required: true,
      pattern: /[A-z0-9._!#$%&*-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    },
    errorMessage: formLabels.incorrectEmail,
  },
  phone: {
    label: 'Phone',
    options: { pattern: /^(\+|00)[0-9]{1,3}\s[0-9]{9}$/ },
    errorMessage: formLabels.incorrectPhone,
  },
  birthday: {
    name: 'birthday',
    label: 'Birthday',
  },
  about: {
    name: 'about',
    label: 'About',
  },
  avatar: {
    name: 'avatar',
    label: 'Avatar',
  },
}
