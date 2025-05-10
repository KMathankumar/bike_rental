<<<<<<< HEAD
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
import { CommissionProvider } from './components/CommissionSettings';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Make sure to include this

const App = () => {
  return (
    <BrowserRouter>
      <CommissionProvider>
        <AppRoutes />
        <ToastContainer />
      </CommissionProvider>
    </BrowserRouter>
  );
};
=======


import Footer from "./Footer";
import HomePage from "./HomePage";
import Preferences from "./Preferences";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"
import ExploreSection from "./ExploreSecton";
import Search  from "./Search";
import Preference from "./Preference";
import Logo from "./Logo"
import Logo2 from "./Logo2"
import Login from "./Login";
import VendorCard from "./VendorCard";
import DocumentAuthentication from "./DocumentAuthentication";
import Header from "./Header";
import Payment from "./Payment";

import Booking from "./Booking";
import VehicleRentalPage from "./VehicleRentalPage";
import ReviewSection from "./ReviewSection";
import Review from "./Review";


function App() {
  return (
    <div>
      <HomePage />
      <ExploreSection/> 
      <AboutUs/>
      <ContactUs/>
      <Footer />
      <Login/>
      <HeroSection />
      <Preferences />
      <Preference/> 
      <Search/>
      <Footer />
      <Logo/>
      <Logo2/>
      <VendorCard/>
      <Booking/>
      <DocumentAuthentication/>
      <Footer/>
      <Header/>
      <Payment/>
      <Footer/>
      <VehicleRentalPage/>
      <ReviewSection/>
      <Review/>


    </div>
  );
}
>>>>>>> ac63892218a7777499e480241f25ad8ea469a2b6

export default App;
