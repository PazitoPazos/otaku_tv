import './App.css'
import Header from './components/Header/Header'

function App () {
  return (
    <div className='app'>
      <Header />
      <div className='content'></div>
      <div className='fader-background' />
      <footer className='footer'>
        <p>Made by Pazos</p>
      </footer>
    </div>
  )
}

export default App
