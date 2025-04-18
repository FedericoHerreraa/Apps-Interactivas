import React from 'react';
import Navbar from './components/Navbar';
import MenuSection from './components/MenuSection/MenuSection';
import './App.css';
import GalleryHoverZoom from './components/GalleryHoverZoom';
import Footer from './components/Footer';
import heroBg from "./images/hero-bg.jpg";

function App() {

  const handleNavigation = (section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <div
        className="hero-section"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          position: 'relative'
        }}
      >
        <Navbar />
        <div className="hero-text">
          <h1>Bienvenidos a <span className="highlight">L'Atelier Gourmet</span></h1>
          <p>Realizando comida especial hace 18 años!</p>
          <button onClick={() => handleNavigation('menuSection')} className="menu-button">NUESTRO MENÚ</button>
        </div>
      </div>

      <MenuSection />
      <GalleryHoverZoom />
      <Footer/>
      
    </div>
  );
}

export default App;
