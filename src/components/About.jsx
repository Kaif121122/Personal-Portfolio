import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import { useGlobalContext } from '../context/context'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 2% 5%;
  background-color:${({ theme }) => theme.colors.light_Black_color};

  .skills-ul{
    display: grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    text-align:center;
    gap:1rem;
  }

 .skills-name{
  font-size:3rem;
  text-transform:capitalize;
  cursor: pointer;
  color:${({ theme }) => theme.colors.grey_color};
  transition:all 0.3s ease;
}

 .skills-name:hover{
  transform:scale(0.95)
}
`

const About = () => {

  const { aboutPage } = useGlobalContext();

  useEffect(() => {

    aboutPage()
  }, [])


  return <>

    <HeroSection
    />
    <Wrapper>
<div className="container">
      <h2 className='common-heading'>My Skills</h2>
      <div className="skills-container">
        <ul className="skills-ul">
          <li className="skills-name">html / html5</li>
          <li className="skills-name">css / css3</li>
          <li className="skills-name">javascript</li>
          <li className="skills-name">jquery</li>
          <li className="skills-name">bootstrap</li>
          <li className="skills-name">react</li>
          <li className="skills-name">react-bootstrap</li>
          <li className="skills-name">node</li>
          <li className="skills-name">express</li>
          <li className="skills-name">ejs</li>
          <li className="skills-name">mongodb</li>
        </ul>
      </div></div>
    </Wrapper>
  </>
  
}

export default About