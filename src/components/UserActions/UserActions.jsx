import { useState } from 'react'
import { Fire, Search } from '../Icons/Icons'
import UserMenu from '../UserMenu/UserMenu'
import './UserActions.css'

function UserActions () {
  const [showUserMenu, setShowUserMenu] = useState(false)

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu)
  }

  return (
    <ul className='user-actions'>
      <li className='user-action-item'>
        <a href='/premium' className='premium-button'>
          <div className='user-action-icon'>
            <Fire />
          </div>
        </a>
      </li>
      <li className='user-action-item'>
        <a href='/search' className='search-button'>
          <div className='user-action-icon'>
            <Search />
          </div>
        </a>
      </li>
      <li className='user-action-item'>
        <div role='button' className={'profile-button' + (showUserMenu ? ' is-active' : '')} onClick={toggleUserMenu}>
          <img src="https://somoskudasai.com/wp-content/uploads/2023/07/portada_jujutsu-kaisen-164.jpg" alt="User Avatar" />
        </div>
        <UserMenu showUserMenu={showUserMenu} />
      </li>
    </ul>
  )
}

export default UserActions
