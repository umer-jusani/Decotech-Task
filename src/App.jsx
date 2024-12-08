import './App.css'
import Character from './components/Character'
import Footer from './components/Footer/Footer'
import GameOverView from './components/GameOverView'
import GamePlay from './components/GamePlay'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import LatestNews from './components/LatestNews'
import Parellell from './components/Parellell'
import Sample from './components/Sample'
import SeasonPass from './components/SeasonPass'
import SocialIcons from './components/SocialIcons'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <SocialIcons />
      <Parellell />
      <GamePlay />
      <SeasonPass />
      <Character />
      <LatestNews />
      <SocialIcons />
      <Footer />



      {/* <Sample /> */}
      {/* <GameOverView /> */}

    </>
  )
}

export default App
