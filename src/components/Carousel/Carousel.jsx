import './Carousel.css'

const Carousel = ({ info }) => {
  return (
    <div className='carousel'>
      {info.map(anime => (
        <div className='carousel-item' key={anime.id}>
          <img src={anime.coverImage.large} alt={anime.title} />
          <div className='carousel-item-info'>
            <h3>{anime.title}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Carousel
