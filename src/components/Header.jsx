import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const MainHeader = styled.header`

background-color:${({ theme }) => theme.colors.dark_Black_color};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  padding:0 5%;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo{
    margin-top:2rem;
  color:${({ theme }) => theme.colors.teal_color};
  }
  `
const Header = () => {

  return (
    <MainHeader>
      <NavLink to='/'><h2 className='logo'> {`< />`} </h2></NavLink>
      <Navbar />
    </MainHeader>
  )

}

export default Header