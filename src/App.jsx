import './App.css'
import Carousel from './components/Carousel/Carousel'
import Header from './components/Header/Header'
import HeroCarousel from './components/HeroCarousel/HeroCarousel'
import news from './news.json'

function App () {
  const API_URL = 'https://graphql.anilist.co'
  const QUERY_VARIABLES = {
    page: 1,
    perPage: 5,
    season: 'SUMMER',
    seasonYear: 2023
  }
  const newsAnimes = news?.data?.Page?.media
  const animeInfo = newsAnimes.map(anime => ({
    id: anime?.id, title: anime?.title.romaji, bannerImage: anime?.bannerImage, coverImage: anime?.coverImage
  }))

  return (
    <div className='app'>
      <Header />
      <main className='content'>
        <HeroCarousel info={animeInfo} />
        <section className='popular-animes'>
          <div className='section-title'>
            <h2>Popular Animes</h2>
          </div>
          <Carousel info={animeInfo} />
        </section>
        <section className='trending-animes'>
          <div className='section-title'>
            <h2>Trending Animes</h2>
          </div>
          <Carousel info={animeInfo} />
        </section>
        <section className='upcoming-animes'>
          <div className='section-title'>
            <h2>Upcoming Animes</h2>
          </div>
          <Carousel info={animeInfo} />
        </section>
      </main>
      <div className='fader-background' />
      <footer className='footer'>
        <p>Made by Pazos</p>
      </footer>
    </div>
  )
}

export default App
