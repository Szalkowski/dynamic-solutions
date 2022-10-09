import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from '../../Routes/routes'
import './styles.scss'
import classNames from 'classnames'

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuOpenHandler = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <nav>
      <button
        className={classNames('hamburger', {
          open: isMenuOpen,
        })}
        onClick={menuOpenHandler}
      >
        <span></span>
      </button>
      <div
        className={classNames('navigation', {
          open: isMenuOpen,
        })}
      >
        {Object.keys(routes).map((route) => (
          <NavLink key={routes[route].path} to={routes[route].path} end>
            {routes[route].name}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
