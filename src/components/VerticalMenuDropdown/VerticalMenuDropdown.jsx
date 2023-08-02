import './VerticalMenuDropdown.css'

function VerticalMenuDropdown () {
  return (
    <>
      <div role='button' className='menu-button-wrapper'>
        <div className='menu-button'>
          <span className='line' />
          <span className='line' />
          <span className='line' />
        </div>
      </div>
      <div className='vertical-menu-dropdown'>
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
