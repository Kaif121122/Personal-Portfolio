import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import Services from './Services'
import Contact from './Contact'
import { useGlobalContext } from '../context/context'

const Home = () => {

  const { homePage } = useGlobalContext();

  useEffect(() => {

    homePage();

  }, [])

  return (<>
    <HeroSection />
    <Services />
    <Contact />
  </>
  )
}

export default Home