import './App.css';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Info from './components/info/Info';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';


function App() {
  return (
   <>
      <Header />
      <Nav />
      <Info />
      <Services />
      <Skills />      
      <Portfolio />
      <Contact />
      <Footer />
      


   </>
     
 
  )
}

export default App;
