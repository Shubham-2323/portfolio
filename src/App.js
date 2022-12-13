import logo from './logo.svg';
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Intro from './components/intro/Intro';
import Services from './components/services/Services';
import Experience from './components/experience/Experience';
import Port from './components/Port/Port';
import Testimonial from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';
import{themeContext} from'./Context'
import{ useContext } from'react';



function App() {
  // const theme =useContext(themeContext);
  // const darkMode =theme.state.darkMode;
  return (
    <div className="App">
    
    <Navbar/>
  <Intro/>
  <Services/>
  <Experience/>
  <Port/>
  <Testimonial/>
  <Contact/>
  <Footer/>
    </div>
  );
}

export default App;
