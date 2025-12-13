import react from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import NewArrivalCards from './components/NewArrivalCards'
import SecHero from './components/SecHero'
import MostPopularCards from './components/MostPopularCards'
import AboutUs from './components/AboutUs'
import CustomerReviews from './components/CustomerReviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
       <Navbar/>
       <Hero/>
       <Cards/>
       <NewArrivalCards/>
       <SecHero/>
       <MostPopularCards/>
       <AboutUs/>
       <CustomerReviews/>
       <Contact/>
       <Footer/>
    </>
  )
}

export default App
