import './App.css'
import Carousel from './components/Carousel/Carousel'
import Header from './components/Header/Header'
import HeroCarousel from './components/HeroCarousel/HeroCarousel'
import news from './news.json'
import popular from './popular.json'

function App () {
  const API_URL = 'https://graphql.anilist.co'
  const QUERY_VARIABLES = {
    page: 1,
    perPage: 5,
    season: 'SUMMER',
    seasonYear: 2023
  }
  const newsAnimes = news?.data?.Page?.media
  const newsAnimeInfo = newsAnimes.map(anime => ({
    id: anime?.id, title: anime?.title.romaji, bannerImage: anime?.bannerImage, coverImage: anime?.coverImage
  }))

  const popularAnimes = popular?.data?.Page?.media
  const popularAnimeInfo = popularAnimes.map(anime => ({
    id: anime?.id, title: anime?.title.romaji, bannerImage: anime?.bannerImage, coverImage: anime?.coverImage
  }))

  console.log(popularAnimeInfo)

  return (
    <div className='app'>
      <Header />
      <main className='content'>
        <HeroCarousel info={newsAnimeInfo} />
        <section className='popular-animes'>
          <div className='section-title'>
            <h2>Popular Animes</h2>
          </div>
          <Carousel info={popularAnimeInfo} />
        </section>
        <section className='trending-animes'>
          <div className='section-title'>
            <h2>Trending Animes</h2>
          </div>
          <Carousel info={newsAnimeInfo} />
        </section>
        <section className='upcoming-animes'>
          <div className='section-title'>
            <h2>Upcoming Animes</h2>
          </div>
          <Carousel info={newsAnimeInfo} />
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
