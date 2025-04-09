import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/poppins';
import App from './App.jsx'
import HomePage from './HomePage'
import ExploreSection from './ExploreSecton'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs';
import Footer from './Footer';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <HomePage/>
    <ExploreSection/>
    <AboutUs/>
    <ContactUs/>
    <Footer/>
  </StrictMode>,
)
