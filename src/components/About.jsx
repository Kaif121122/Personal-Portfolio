import React,{useEffect} from 'react'
import HeroSection from './HeroSection'
import { useGlobalContext } from '../context/context'

const About = () => {

  const {aboutPage} = useGlobalContext();

useEffect(() => {
  
  aboutPage()
}, [])

  
  return (

    <HeroSection
    />
  )
}

export default About