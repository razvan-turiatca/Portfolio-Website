import React, { useEffect, useState } from 'react'
import setTheme from '../../utilities/theme'
import { ImCog } from 'react-icons/im'

import './theme.scss'

const colorsArray = [
  { id: 'yellow', bgColor: '#ffdd40' },
  { id: 'red', bgColor: '#e82a2a' },
  { id: 'green', bgColor: '#6ac045' },
  { id: 'blue', bgColor: '#5078ff' },
]

const Theme = () => {
  const [theme, setCurrentTheme] = useState('yellow')
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    setTheme(theme)
  }, [])

  const handleToggleTheme = (id) => {
    setTheme(id)
    setToggle(false)
  }
  // setTheme(theme)

  return (
    <div className={` theme-wrapper ${toggle ? 'active' : ''}`}>
      <div className="theme-wrapper--toggle-icon">
        <ImCog size={40} onClick={() => setToggle(!toggle)} />
      </div>
      <div className="theme-wrapper--menu">
        <h4>Choose Theme</h4>
        <ul>
          {colorsArray.map((item, index) => {
            return (
              <li
                key={index}
                style={{ background: item.bgColor }}
                onClick={() => handleToggleTheme(item.id)}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Theme
