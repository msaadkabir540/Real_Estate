
import './App.css';
import Header from './header/header';
import Nav from './Nav/nav';
import 'animate.css';
import "animate.css/animate.min.css";
import Footer from './Footer/Footer';
import ProgressBar from './ProgressBar/ProgressBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About/About';
import Contact from './Contact/Contact';
import DHA_C from './Project/DHA_C';
import ProjectC from './Project/ProjectC';
import DetailPageOC from './Project/Detail/DetailPageOC';
import ScrollToTop from './pageScrollTop/ScrollToTop';
import Testimonial from './Testimonial/Testimonial';
import Buy from './Buy/Sell/Buy';


function App() {

  return (
    <>

      <BrowserRouter>

        <ScrollToTop />
        <ProgressBar />
        <Nav />
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/DHA/Lahore" element={<DHA_C />} />
          <Route path="/Project" element={<ProjectC />} />
          <Route path="/Detail/:id" element={<DetailPageOC />} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/Buy" element={<Buy />} />
        </Routes>

      
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
