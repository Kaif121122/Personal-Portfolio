import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../styles/Button'
import { useGlobalContext } from '../context/context'
const Wrapper = styled.section`

padding: 5% 15%;
background-color:${({ theme }) => theme.colors.topcolor};

.hero-comment-section{
    display: flex;
    flex-direction:column;
    align-items: flex-start;
    justify-content: center;

    .hero-name{
      text-transform:uppercase;
    }
}

.hero-img{
    max-width: 85%;
    height: auto;
    display:block;
    margin-left: auto;
    cursor: pointer;
    transition:all 0.3s ease;
}

.hero-img:hover{
  transform:scale(0.95)
}


@media (max-width:${({ theme }) => theme.media.tab}) {
  .hero-img{
    max-width: 95%;
}
  }
  
@media (max-width:${({ theme }) => theme.media.mobile}) {
  .hero-img{
    max-width: 100%;
    margin: auto;
}
  }
`
const HeroSection = () => {

  const { firstPara, secondPara, name, image } = useGlobalContext()
  return (
    <Wrapper>
      <div className='container grid grid-two-column'>
        <div className='hero-comment-section'>
          <p>{firstPara}</p>
          <h1 className='hero-name'>{name}</h1>
          <p>{secondPara}</p>
          <Button>
            <NavLink to='/contact'>Hire me
            </NavLink>
          </Button>
        </div>
        <div className='hero-img-section'>
          <picture>
            <img className='hero-img' src={image} alt="hero-image" />
          </picture>
        </div>
      </div>
    </Wrapper>
  )
}

export default HeroSection;