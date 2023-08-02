import UserActions from '../UserActions/UserActions'
import VerticalMenuDropdown from '../VerticalMenuDropdown/VerticalMenuDropdown'
import './Header.css'

function Header () {
  return (
    <div className='header'>
      <div className='header-logo'>
        <a className='header-logo-link' href="/">
          <img src="../logo.png" alt="Otaku TV logo" />
        </a>
      </div>
      <div className='header-left'>
        <div className='state-visible-on-mobile'>
          <VerticalMenuDropdown />
        </div>
      </div>
      <div className='header-right'>
        <UserActions />
      </div>
    </div>
  )
}

export default Header
