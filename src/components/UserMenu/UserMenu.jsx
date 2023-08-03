import { Bell, Bookmark, History, Logout, User } from '../Icons/Icons'
import UserMenuItem from '../UserMenuItem/UserMenuItem'
import './UserMenu.css'

function UserMenu ({ showUserMenu = false }) {
  return (
    <div className={'user-menu' + (showUserMenu ? ' is-open' : '')}>
      <div className='user-menu-content'>
        <div className='user-menu-section user-menu-account-section'>
          <div className='user-menu-account-item'>
            <div className='account-item-avatar'>
              <img src="https://somoskudasai.com/wp-content/uploads/2023/07/portada_jujutsu-kaisen-164.jpg" alt="" />
            </div>
            <div className='account-item-name'>
              <h4>Pazos</h4>
            </div>
          </div>
        </div>
        <div className='user-menu-section'>
          <UserMenuItem
            href={'/watchlist'}
            icon={<Bookmark />}
            label={'Mi Lista'}
          />
          <UserMenuItem
            href={'/history'}
            icon={<History />}
            label={'Historial'}
          />
        </div>
        <div className='user-menu-section'>
          <UserMenuItem
            href={'/notifications'}
            icon={<Bell />}
            label={'Notificaciones'}
          />
          <UserMenuItem
            href={'/account'}
            icon={<User />}
            label={'Mi Cuenta'}
          />
        </div>
        <div className='user-menu-section'>
          <UserMenuItem
            href={'/logout'}
            icon={<Logout />}
            label={'Desconectar'}
          />
        </div>
      </div>
    </div>
  )
}

export default UserMenu
