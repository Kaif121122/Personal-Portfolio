import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { CgMenu, CgCloseR } from 'react-icons/cg'

const NavBar = styled.nav`

.navbar-ul{
    display: flex;
    gap:3.2rem;

    li{
        a{
            color:${({ theme }) => theme.colors.teal_color};
            font-size:1.75rem;
            text-transform:uppercase;
            padding: 2rem 0;
            
            &:hover
            {
                opacity:0.8;
                
            }
            
           
        }
    }
}
    .active{
               color:${({ theme }) => theme.colors.teal_color} !important;
                border-bottom:2px solid ${({ theme }) => theme.colors.teal_color};
            }

            .menu-btns{
          display: none;
         
            }
            .menu-close-icon{
            display: none;
          }

            @media (max-width:${({ theme }) => theme.media.mobile}) {
                .menu-btns{
                    display:inline-block;
                    z-index: 999;
                   
                }
                .menu-icons{
                    font-size:4.2rem;
                    position: absolute;
                    color:${({ theme }) => theme.colors.teal_color};
                    top:35%;
                    right: 5%;
                    z-index: 9999;
                    cursor: pointer;
                    }

                .navbar-ul{
                    position: absolute;
                    top: 0;
                    right: 0;
                    width:0px;
                    height: 0px;
                    background-color:${({ theme }) => theme.colors.dark_Black_color};
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    z-index: 9999;
                    transition: all 0.5s ease;
                    li{
                        a{
                            font-size: 0rem;
                        }
                    }
                }
                .active{
                    border: none;
                }

                .none{
                    display: none;
                    
                }
                .show-menu-close-icon{
                    display: inline-block;
                    font-size: 4rem;
                   
                }
                .mob-navbar-ul{
                    width:100vw;
                    height: 100vh;
                    touch-action: none;
                    li{
                        a{
                            font-size: 4.2rem;
                        }
                    }
                }
            }
    `
const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [openMenuBtn, setOpenMenuBtn] = useState(false);

    const openNav = () => {
        setOpenMenu(false);
        setTimeout(() => { setOpenMenuBtn(false) }, 600)
    }

    const openBtn = () => {
        setOpenMenu(true);
        setTimeout(() => { setOpenMenuBtn(true) }, 600)
    }

    const closeBtn = () => {
        setOpenMenu(false);
        setTimeout(() => { setOpenMenuBtn(false) }, 600)
    }

    return (
        <NavBar>
            <div className="menu-icon">
                <ul className={openMenu ? 'mob-navbar-ul navbar-ul' : 'navbar-ul'}>
                    <li><NavLink onClick={openNav} end to='/'>Home</NavLink></li>
                    <li><NavLink onClick={openNav} to='/about'>About</NavLink></li>
                    <li><NavLink onClick={openNav} to='/services'>Projects</NavLink></li>
                    <li><NavLink onClick={openNav} to='/contact'>Contact</NavLink></li>
                </ul>
                <div className="menu-btns">
                    <div className={openMenu && 'none'} onClick={openBtn}>
                        <CgMenu className={openMenuBtn ? ' none' : 'menu-icons '} /></div>
                    <div className={!openMenu && 'none'} onClick={closeBtn}> <CgCloseR className={openMenuBtn ? 'show-menu-close-icon menu-icons' : 'none'} /></div>
                </div>
            </div>
        </NavBar>
    )
}

export default Navbar