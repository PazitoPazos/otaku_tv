import { useState } from 'react'
import './HeroCarousel.css'
import { Caret } from '../Icons/Icons'
import CarouselTab from '../CarouselTab/CarouselTab'

function HeroCarousel ({ info }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? info.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === info.length - 1 ? 0 : prevIndex + 1
    )
  }

  const title = info[currentImageIndex]?.title
  const coverImage = info[currentImageIndex]?.coverImage
  const colorImage = coverImage?.color

  return (
    <div className='hero-carousel'>
      <div className='hero-carousel-content' style={{ backgroundColor: colorImage }}>
        <div className='hero-carousel-buttons left' onClick={handlePrev}>
          <Caret />
        </div>
        <div className="hero-image-container">
          <img src={coverImage.extraLarge} alt={`Image ${currentImageIndex}`} />
        </div>
        <div className='hero-carousel-buttons right' onClick={handleNext}>
          <Caret />
        </div>
      </div>
      <CarouselTab title={title} />
    </div>
  )
}

export default HeroCarousel
