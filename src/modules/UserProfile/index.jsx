import { useSelector } from 'react-redux'
import { userForm } from '../../shared/form/userForm'
import { Image } from '../../shared/components/Image/image'
import './styles.scss'

export const UserProfile = () => {
  const formFields = useSelector((state) => state.submittedForm.value)
  return (
    <div className={'user-profile'}>
      <Image
        className={'avatar'}
        src={
          'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=500'
        }
        alt={'avatar'}
      />
      <p>
        {userForm.firstName.label}&nbsp;{formFields[userForm.firstName.id]}
      </p>
      <p>
        {userForm.lastName.label}&nbsp;{formFields[userForm.lastName.id]}
      </p>
      <p>
        {userForm.email.label}&nbsp;
        <a href={`mailto: ${formFields[userForm.email.id]}`}>
          {formFields[userForm.email.id]}
        </a>
      </p>
      <p>
        {userForm.phone.label}&nbsp;
        <a href={`tel: ${formFields[userForm.phone.id]}`}>
          {formFields[userForm.phone.id]}
        </a>
      </p>
      <p>
        {userForm.birthday.label}&nbsp;{formFields[userForm.birthday.id]}
      </p>
      <div className={'about'}>
        <p>{userForm.about.label}&nbsp;</p>
        <p>{formFields[userForm.about.id]}</p>
      </div>
    </div>
  )
}
