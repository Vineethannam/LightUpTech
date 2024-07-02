import './App.css';
import Banner from './Components/Banner/Banner';
import Contact from './Components/ContactForm/Contact';
import Foot from './Components/Foot/Foot';
import Cards from './Components/Hero/Cards';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <>
     <NavBar/> 
     <Banner/>
     <Cards/>
     <Contact/>
     <Foot/>
    </>
  );
}

export default App;
