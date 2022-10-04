import { useState } from 'react'
import { Link } from 'react-router-dom'
import { elements } from './config'
import './styles.scss'

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuOpenHandler = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <nav>
      <button className={'hamburger'} onClick={menuOpenHandler}>
        <span></span>
      </button>
      {isMenuOpen &&
        elements.map((element) => (
          <Link to={element.href} target={element.target}>
            {element.name}
          </Link>
        ))}
    </nav>
  )
}
