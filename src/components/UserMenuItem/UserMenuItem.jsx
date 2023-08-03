import './UserMenuItem.css'

function UserMenuItem ({ icon, label, href }) {
  return (
    <a className='user-menu-item' href={href}>
      {icon}
      <div>
        <h5>{label}</h5>
      </div>
    </a>
  )
}

export default UserMenuItem
