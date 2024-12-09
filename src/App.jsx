import React, { lazy, Suspense } from 'react';
import './App.css';

const Character = lazy(() => import('./components/Character'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Header = lazy(() => import('./components/Header'));
const HeroSection = lazy(() => import('./components/HeroSection'));
const LatestNews = lazy(() => import('./components/LatestNews'));
const Parellell = lazy(() => import('./components/Parellell'));
const SeasonPass = lazy(() => import('./components/SeasonPass'));
const SocialIcons = lazy(() => import('./components/SocialIcons'));
const GamePlay = lazy(() => import('./components/GamePlay'));

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
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
      </Suspense>
    </>
  );
}

export default App;
