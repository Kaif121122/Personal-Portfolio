import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaArrowUp } from "react-icons/fa";

const Wrapper = styled.section`

display: flex;
justify-content: center;
align-items: center;

.gotop-btn{

    font-size:2.4rem;
    width: 6rem;
    height: 6rem;
    color: white;
    border-radius:50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 999;
    cursor: pointer;
  background-color:#343e74;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.top-icon{
    
    animation: gototop 1.2s linear infinite alternate-reverse;
}
@keyframes gototop {
    0%{
        transform: translateY(-0.5rem);
    }
    100%{
        transform: translateY(1rem);
    }
}
`
const GoToTop = () => {

    const [isVisible, setIsVisible] = useState(false)

    const goTop = () => {

        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
    }

    const listenToScroll = () => {


        let height = 220;
        const windowScroll = document.documentElement.scrollTop;
        if (windowScroll > height) {
            setIsVisible(true)

        } else {
            setIsVisible(false)
        }

    }

    useEffect(() => {

        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener('scroll', listenToScroll);
    }, []);
    return (
        <Wrapper>
            {isVisible && <div className="gotop-btn" onClick={goTop}>
                <FaArrowUp className='top-icon' />
            </div>}
        </Wrapper>
    )
}

export default GoToTop