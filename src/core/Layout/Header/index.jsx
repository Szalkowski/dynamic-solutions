import { Image } from '../../../shared/components/Image/image'
import Logo from '../../../assest/Logo/logo.png'
import smallLogo from '../../../assest/Logo/logo_360.png'
import largeLogo from '../../../assest/Logo/logo_1073.png'
import './styles.scss'
import { useWindowSize } from '../../../hooks/windowSize'
import classNames from 'classnames'

export const Header = () => {
  const windowSize = useWindowSize()
  return (
    <header>
      <div
        className={classNames({
          content: windowSize.width >= 1366,
        })}
      >
        <Image
          src={Logo}
          alt={'Company Logo'}
          srcSet={`${smallLogo} 360w, ${largeLogo} 1073w`}
        />
        <h1>Creates your world</h1>
      </div>
    </header>
  )
}
