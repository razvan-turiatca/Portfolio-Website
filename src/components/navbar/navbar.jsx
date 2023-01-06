import React from 'react'
import { Link } from 'react-router-dom'
import { FaReact } from 'react-icons/fa'
import { navMenus } from './navmenus'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar--container">
          <Link to={'/'} className="navbar--container-logo">
            <FaReact size={30} />
          </Link>
          <ul className="navbar--container-menu">
            {navMenus.map((item, id) => {
              const { label, to } = item

              return (
                <li key={id} className="navbar--container-menu-item">
                  <Link to={to} className="navbar--container-menu-links">
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
