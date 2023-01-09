import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyles'
import GoToTop from './components/GoToTop'


const App = () => {
  const theme = {
    colors: {
      dark_Black_color: '#222831',
      light_Black_color: '#393E46',
      teal_color: '#00ADB5',
      grey_color: '#EEEEEE',
    },
    media: {
      mobile: '768px',
      tab: '998px'
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />

        </Routes>
        <GoToTop />
        <Footer />
      </HashRouter>
    </ThemeProvider>
  )
}

export default App