import { React, useState } from 'react'
import './VerticalMenuDropdown.css'

function VerticalMenuDropdown () {
  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  return (
    <>
      <div role='button' className={'menu-button-wrapper' + (showDropdown ? ' is-active' : '')} onClick={toggleDropdown}>
        <div className='menu-button'>
          <span className='line' />
          <span className='line' />
          <span className='line' />
        </div>
      </div>
      <div className={'vertical-menu-dropdown' + (showDropdown ? ' is-open' : '')}>
        <div className='menu-dropdown-content'>
          <nav>
            <div className='menu-section'>
              <small className='menu-section-title'>Explorar</small>
              <ul>
                <li className='menu-item'>
                  <a href="/popular">Popular</a>
                </li>
                <li className='menu-item'>
                  <a href="/new">Novedades</a>
                </li>
                <li className='menu-item'>
                  <a href="/airing">En emisión</a>
                </li>
                <li className='menu-item'>
                  <a href="/list">Listado de animes</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default VerticalMenuDropdown
