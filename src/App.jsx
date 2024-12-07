import './App.css'
import GameOverView from './components/GameOverView'
import GamePlay from './components/GamePlay'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Parellell from './components/Parellell'
import SeasonPass from './components/SeasonPass'
import SocialIcons from './components/SocialIcons'

function App() {
  return (
    <>
      <Header />
      <Parellell />
      {/* <HeroSection /> */}

      <SocialIcons />
      {/* <GameOverView /> */}
      <GamePlay />
      <SeasonPass />
    </>
  )
}

export default App
