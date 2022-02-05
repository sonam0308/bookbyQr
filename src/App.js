import logo from './logo.svg';
import './App.css';
import Banner from './Component/Banner';
import ZastaDoing from './Component/ZastaDoing';
import ZastaAdvantage from './Component/ZastaAdvantage';
import Video from './Component/Video';
import MobileBannerImg from './Component/MobileBannerImg';
import ZastaDashboard from './Component/ZastaDashboard';
import Testimonial from './Component/Testimonial';
import Footer from './Component/Footer';
import Contact from './Component/Contact';
import Pricing from './Component/Pricing';
import Promise from './Component/Promise';
import Signup from './InternalPages/Signup/Signup';
function App() {
  return (
    <>
    <Signup/>
      {/* <Banner />
      <ZastaDoing />
      <ZastaAdvantage/>
      <Promise />
      <Video/>
      <MobileBannerImg/>
      <Pricing />
      <Testimonial  />
      <ZastaDashboard/>
      
      <Contact /> */}
      <Footer/>
    </>
  );
}

export default App;
