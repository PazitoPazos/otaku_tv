import { Caret } from '../Icons/Icons'
import './Carousel.css'
import { useState } from 'react'

const Carousel = ({ info }) => {
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

  return (
    <div className='carousel' style={{ backgroundColor: info[currentImageIndex].color }}>
      <div className='carousel-buttons left' onClick={handlePrev}>
        <Caret />
      </div>
      <div className="image-container">
        <img src={info[currentImageIndex].extraLarge} alt={`Image ${currentImageIndex}`} />
      </div>
      <div className='carousel-buttons right' onClick={handleNext}>
        <Caret />
      </div>
    </div>
  )
}

export default Carousel
