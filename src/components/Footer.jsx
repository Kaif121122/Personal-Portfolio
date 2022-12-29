import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../styles/Button'
import { FaFacebookSquare, FaInstagram, FaGithub } from "react-icons/fa";
const Wrapper = styled.section`

.pad-container{

  padding: 1% 15%;
}

.footer-top-contact{
  padding:2rem;
  display: flex;
  justify-content: space-between;
  align-items:center;
  background-color:white;
  transform:translateY(65%);
}
.footer-contact-btn{
  margin-top:0;
}
footer{
color:${({ theme }) => theme.colors.topcolor};
background-color:${({ theme }) => theme.colors.fourthcolor};
padding-top:5%;
}
.flex{
  display: flex;
  gap: 1rem;
}
.icons-div{
  padding: 0.5rem 0.5rem 0.3rem;
  background-color:#343e74;
  border-radius:5px;

  &:hover{
    
opacity: 0.8;
    transform: scale(0.96);
  }
}

.social-links{
  text-decoration:none;
  color:white;
}
.icons{
  font-size: 3rem;
  cursor: pointer;
  
}

.pad-btm{
padding-bottom:1rem;
}
 hr{
  height: 2px;
  background-color:white;
}
.footer-bottom-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text-white{
color:${({ theme }) => theme.colors.topcolor};
opacity: 1;
}


@media (max-width:${({ theme }) => theme.media.mobile}) {
  .pad-container{
    padding: 1% 2%;
  }
  footer{
    padding-top:6rem;
  }
  }
`

const Footer = () => {

  return (
    <Wrapper>

      <section className=" pad-container">
        <div className='container footer-top-contact'>

          <div>
            <h3>Ready to get started</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <NavLink to='/'><Button className='footer-contact-btn'>Get Started</Button></NavLink>
          </div>
        </div>
      </section>

      { /*footer section */}

      <footer>
        <div className="pad-container">
          <div className="container grid grid-four-column footer-container">
            <div className="footer-about">
              <h3 className='pad-btm'>Md Kaif Ansari</h3>
              <p className='text-white'>Web developer</p>
            </div>
            <div className="footer-subscribe">
              <h3 className='pad-btm'>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder='Email' autoComplete='off' required />
                <Button type='submit' className='footer-submit-btn'>Subscribe</Button>
              </form>
            </div>
            <div className="footer-social">
              <h3 className='pad-btm'>Follow Us</h3>
              <div className="flex">
                <div className="icons-div"><a className='social-links' href="https://www.facebook.com/profile.php?id=100009195231164" target="_blank"><FaFacebookSquare className='icons' /></a></div>
                <div className="icons-div">
                  <a className='social-links' href='https://www.instagram.com/mdkaifansari999' target='_blank'><FaInstagram className='icons' /></a></div>
                <div className="icons-div">
                  <a className='social-links' href='https://github.com/Kaif121122' target='_blank'> <FaGithub className='icons' /></a></div>
              </div>
            </div>
            <div className="footer-contact">
              <h3 className='pad-btm'>Call us</h3>
              <h3>+91 8092415273</h3>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom-section  pad-container">

          <div className="container grid grid-two-columns footer-bottom-container">
            <p className='text-white'>
              @{new Date().getFullYear()} Md Kaif Ansari
            </p>
            <div >
              <p className='text-white'>PRIVACY POLICY</p>
              <p className='text-white'>

                TERMS & CONDITIONS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  )
}

export default Footer