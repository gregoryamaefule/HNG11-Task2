import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Category from './Category.jsx'
import Newin from './Newin.jsx'
import SS from './Summersale.jsx'
import Footer from './Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Hero />
    <Category />
    <Newin />
    <SS />
    <Footer />
  </React.StrictMode>,
)
