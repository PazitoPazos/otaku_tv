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
          <div className='menu-button-wrapper'>
            <div className='menu-button'>
              <span className='line' />
              <span className='line' />
              <span className='line' />
            </div>
          </div>
        </div>
        <div className='header-right'>
          <ul className='user-actions'>
            <li className='user-action-item'>
              <div className='search-button'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
            </li>
            <li className='user-action-item'>
              <div className='bookmark-button'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
              </div>
            </li>
            <li className='user-action-item'>
              <div className='profile-button'>
                <img src="https://somoskudasai.com/wp-content/uploads/2023/07/portada_jujutsu-kaisen-164.jpg" alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='content'></div>
      <footer className='footer'>
        <p>Made by Pazos (without 🛁)</p>
      </footer>
    </div>
  )
}

export default App
