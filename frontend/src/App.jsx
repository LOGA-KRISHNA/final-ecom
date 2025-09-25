import { useState } from 'react'
import './App.css'
import { HeroSection } from './components/HeroSection/HeroSection';
import NewArrivals from './components/Section/NewArrivals';

function App() {
  return (
    <>
      <HeroSection />
      <NewArrivals/>
    </>
  )
}

export default App;