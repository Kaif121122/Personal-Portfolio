import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Logo from "../../public/images/vadim-bogulov-In9Tha9_Hu4-unsplash.jpg"

const MainHeader = styled.header`

  padding:0 4.8rem;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo{
    width:5rem;
    margin-top:2rem;
  }
  `
const Header = () => {

  return (
    <MainHeader>
      <NavLink to='/'><img className='logo' src={Logo} alt="main_logo" /></NavLink>
      <Navbar />
    </MainHeader>
  )

}

export default Header