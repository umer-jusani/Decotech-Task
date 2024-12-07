import './App.css'
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
      <Parellell />
      {/* <Sample /> */}
      {/* <HeroSection /> */}

      <SocialIcons />

      {/* <GameOverView /> */}
      <GamePlay />
      <SeasonPass />
      <LatestNews />
      <SocialIcons />
    </>
  )
}

export default App
