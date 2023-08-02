import { Fire, Search } from '../Icons/Icons'
import UserMenu from '../UserMenu/UserMenu'
import './UserActions.css'

function UserActions () {
  return (
    <ul className='user-actions'>
      <li className='user-action-item'>
        <div className='premium-button'>
          <Fire />
        </div>
      </li>
      <li className='user-action-item'>
        <div className='search-button'>
          <Search />
        </div>
      </li>
      <li className='user-action-item'>
        <div role='button' className='profile-button'>
          <img src="https://somoskudasai.com/wp-content/uploads/2023/07/portada_jujutsu-kaisen-164.jpg" alt="User Avatar" />
        </div>
        <UserMenu />
      </li>
    </ul>
  )
}

export default UserActions
