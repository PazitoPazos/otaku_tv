import './App.css'

function App () {
  return (
    <div className='app'>
      <div className='header'>
        <div className='header-logo'>
          <a className='header-logo-link' href="/">
            <img src="../logo.png" alt="Otaku TV logo" />
          </a>
        </div>
        <div className='header-left'>
          <div className='state-visible-on-mobile'>
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
          </div>
        </div>
        <div className='header-right'>
          <ul className='user-actions'>
            <li className='user-action-item'>
              <div className='premium-button'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
                </svg>
              </div>
            </li>
            <li className='user-action-item'>
              <div className='search-button'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
            </li>
            <li className='user-action-item'>
              <div role='button' className='profile-button'>
                <img src="https://somoskudasai.com/wp-content/uploads/2023/07/portada_jujutsu-kaisen-164.jpg" alt="" />
              </div>
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
                    <a href="/watchlist">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                      </svg>
                      <div>
                        <h5>Mi Lista</h5>
                      </div>
                    </a>
                    <a href="/history">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-history" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 8l0 4l2 2"></path>
                        <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"></path>
                      </svg>
                      <div>
                        <h5>Historial</h5>
                      </div>
                    </a>
                  </div>
                  <div className='user-menu-section'>
                    <a href="/notifications">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                        <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                      </svg>
                      <div>
                        <h5>Notificaciones</h5>
                      </div>
                    </a>
                    <a href="/account">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                        <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
                      </svg>
                      <div>
                        <h5>Mi Cuenta</h5>
                      </div>
                    </a>
                  </div>
                  <div className='user-menu-section'>
                    <a href="/logout">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                        <path d="M9 12h12l-3 -3"></path>
                        <path d="M18 15l3 -3"></path>
                      </svg>
                      <div>
                        <h5>Desconectar</h5>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='content'></div>
      <div className='fader-background' />
      <footer className='footer'>
        <p>Made by Pazos</p>
      </footer>
    </div>
  )
}

export default App
