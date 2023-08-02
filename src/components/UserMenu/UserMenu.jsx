import { Bell, Bookmark, History, Logout, User } from '../Icons/Icons'
import './UserMenu.css'

function UserMenu () {
  return (
    <div className='user-menu'>
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
          <a className='user-menu-item' href="/watchlist">
            <Bookmark />
            <div>
              <h5>Mi Lista</h5>
            </div>
          </a>
          <a className='user-menu-item' href="/history">
            <History />
            <div>
              <h5>Historial</h5>
            </div>
          </a>
        </div>
        <div className='user-menu-section'>
          <a className='user-menu-item' href="/notifications">
            <Bell />
            <div>
              <h5>Notificaciones</h5>
            </div>
          </a>
          <a className='user-menu-item' href="/account">
            <User/>
            <div>
              <h5>Mi Cuenta</h5>
            </div>
          </a>
        </div>
        <div className='user-menu-section'>
          <a className='user-menu-item' href="/logout">
            <Logout />
            <div>
              <h5>Desconectar</h5>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default UserMenu
