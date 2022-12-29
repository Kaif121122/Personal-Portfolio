import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import { useGlobalContext } from '../context/context'
import styled from 'styled-components'

const Wrapper = styled.section`
max-width: 120rem;
margin: 0 auto;
padding: 2% 15%;
  background-color:${({ theme }) => theme.colors.secondcolor};

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


  return (<>

    <HeroSection
    />
    <Wrapper>

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
      </div>
    </Wrapper>
  </>
  )
}

export default About