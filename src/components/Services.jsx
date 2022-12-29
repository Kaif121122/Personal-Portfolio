import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/context'
import { Button } from '../styles/Button'

const Wrapper = styled.section`

padding: 2% 15%;
  background-color:${({ theme }) => theme.colors.topcolor};

.card{
  border-radius:5px;
  padding: 1rem 1rem 2rem;
  text-align: center;
  border:0.1rem solid rgb(170 170 170 /40%);
  background-color:white;
}

figure{
  position: relative;
  overflow: hidden;

  &::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    transition:all 0.2s linear;
    cursor: pointer;
  }
  &:hover::after{
    width: 100%;
  }
  &:hover img{
    transform:scale(1.2);
  }
}

.card-img{
  max-width:100%;
  height: 18rem;
}

.card-title{
  margin-top:1rem;
}

.card-description{
  padding:1rem 0;
}

.loading-container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  background-color:${({ theme }) => theme.colors.thirdcolor};
}
`

const Services = () => {

  const { cards, isLoading } = useGlobalContext()
  console.log(cards)


  return (


    <Wrapper>
      <h2 className='common-heading'>Our Services</h2>
      {isLoading ? <h3 className="container loading-container">
        Loading...
      </h3> : <div className='container grid grid-four-column'>
        {cards.map((elem) => {

          const { title, image, id, description, link } = elem;
          console.log(link)
          return <div className='card' key={id}>

            <figure>
              <img src={image} alt="" className="card-img" />
            </figure>
            <h3 className="card-title">
              {title}
            </h3>
            <p className="card-description">
              {description}
            </p>
            <a href={link} target="_blank"><Button>Read More</Button></a>

          </div>
        })}


      </div>}
    </Wrapper>
  )
}

export default Services