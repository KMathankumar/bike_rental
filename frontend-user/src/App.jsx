import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom"; // Keep Routes and Route here, no need for BrowserRouter
import 'react-datepicker/dist/react-datepicker.css';


import HomePage from "./Components/HomePage";
import ExploreSection from "./Components/ExploreSecton";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Login from "./Login";
import SignUp from "./SignUp";

import HeroSection from "./Components/HeroSection";
import Preference from "./Components/preference";

import Search from "./Components/Search";
import VendorCard from "./Components/VendorCard";
import VehicleRentalPage from "./Components/VehicleRentalPage";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const MainPage = () => (
    <>
      <HomePage
        ref={homeRef}
        onScrollHome={() => scrollToSection(homeRef)}
        onScrollAbout={() => scrollToSection(aboutRef)}
        onScrollContact={() => scrollToSection(contactRef)}
      />
      <ExploreSection />
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <div ref={contactRef}>
        <ContactUs />
      </div>
      <Footer />
    </>
  );

  const DashboardPage = () => (
    <>
      <HeroSection
        onScrollHome={() => scrollToSection(homeRef)}
        onScrollAbout={() => scrollToSection(aboutRef)}
        onScrollContact={() => scrollToSection(contactRef)}
      />
      <Preference />
      <Footer />
    </>
  );
  const SearchResultsPage = () => (
    <>
      <Search
        onScrollHome={() => scrollToSection(homeRef)}
        onScrollAbout={() => scrollToSection(aboutRef)}
        onScrollContact={() => scrollToSection(contactRef)}
      />
      <VendorCard />
      <Footer />
    </>
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/results" element={<SearchResultsPage />} />
      </Routes>
      <VehicleRentalPage/>
    </>
  );
}

export default App;
