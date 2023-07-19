import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Adv from './components/Adv.jsx';
import Photo from './components/Photo.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <About/>
      <Adv/>
      <Photo/>
      <Gallery/>
      <Contact/>
    </div>
  );
}

export default App;
