import { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from '../../Routes/routes'
import classNames from 'classnames'
import './styles.scss'
import { useWindowSize } from '../../../hooks/windowSize'

export const Navigation = () => {
  const navigationRef = useRef()
  const windowSize = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuOpenHandler = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  document.addEventListener('click', (event) => {
    const isClickNavigation = navigationRef.current?.contains(event.target)
    if (!isClickNavigation) {
      setIsMenuOpen(false)
    }
  })

  return (
    <nav ref={navigationRef}>
      {windowSize.width < 768 && (
        <button
          className={classNames('hamburger', {
            open: isMenuOpen,
          })}
          onClick={menuOpenHandler}
        >
          <span></span>
        </button>
      )}
      <div
        className={classNames('navigation', {
          open: isMenuOpen,
        })}
      >
        <div
          className={classNames({
            content: windowSize.width >= 1366,
          })}
        >
          {Object.keys(routes).map((route) => (
            <NavLink
              key={routes[route].path}
              to={routes[route].path}
              end
              onClick={() => setIsMenuOpen(false)}
            >
              {routes[route].name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
