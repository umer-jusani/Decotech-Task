import React, { lazy, Suspense } from 'react';
import './App.css';
import Character from './components/Character';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LatestNews from './components/LatestNews';
import Parellell from './components/Parellell';
import SeasonPass from './components/SeasonPass';
import SocialIcons from './components/SocialIcons';

const GamePlay = lazy(() => import('./components/GamePlay'));

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <SocialIcons />
      <Parellell />
      <Suspense fallback={<div>Loading GamePlay...</div>}>
        <GamePlay />
      </Suspense>
      <SeasonPass />
      <Character />
      <LatestNews />
      <SocialIcons />
      <Footer />
    </>
  );
}

export default App;
