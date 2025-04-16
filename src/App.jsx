

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
      <DocumentAuthentication/>
    </div>
  );
}

export default App;
