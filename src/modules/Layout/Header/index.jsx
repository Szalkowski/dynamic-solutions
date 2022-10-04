import { Image } from '../../../shared/components/Image/image'
import Logo from '../../../assest/Logo/logo.png'
import smallLogo from '../../../assest/Logo/logo_360.png'
import largeLogo from '../../../assest/Logo/logo_1073.png'
import './styles.scss'

export const Header = () => {
  return (
    <header>
      <Image
        src={Logo}
        alt={'Company Logo'}
        srcSet={`${smallLogo} 360w, ${largeLogo} 1073w`}
      />
      <h1>Creates your world</h1>
    </header>
  )
}
