import './CarouselTab.css'

function CarouselTab ({ title, isActive }) {
  return (
    <div className='hero-carousel-tab-wrapper'>
      <button className='hero-carousel-tab'>
        <div className={'hero-carousel-tab-indicator' + (isActive ? ' is-active' : '')} />
        <span className='hero-carousel-tab-text'>{title}</span>
      </button>
    </div>
  )
}

export default CarouselTab
