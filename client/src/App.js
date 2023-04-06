import logo from './logo.svg';
import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Services from './components/services';
import oceanImage from './images/ocean.jpg';
import Rsvp from './components/rsvp';

function App() {
  return (
    <div className="App" style={{
      backgroundColor: 'purple',
      minHeight: '100vh',
    }}>
      <div style={{
        backgroundImage: `url(${oceanImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
      }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/directions" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rsvp" element={<Rsvp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
