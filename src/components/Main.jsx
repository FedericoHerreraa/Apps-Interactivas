import React from 'react';
import Navbar from './Navbar';
import MenuSection from './MenuSection/MenuSection';
import GalleryHoverZoom from './GalleryHoverZoom';
import Footer from './Footer';
import heroBg from "../images/hero-bg.jpg";
import IntroOverlay from './IntroOverlay';
import Review from './Review';
import { useState, useEffect } from 'react';

export default function Main() {
    const [showName, setShowName] = useState(false);

    const handleNavigation = (section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const hasVisited = sessionStorage.getItem('hasVisited');
        if (!hasVisited) {
            setShowName(true);
            sessionStorage.setItem('hasVisited', 'true');

            setTimeout(() => {
                setShowName(false);
            }, 3000); 
        }
    }, []);

    return (
        <div className="App">
            {showName && <IntroOverlay />}

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
            <Review/>
            <GalleryHoverZoom />
            <Footer />

        </div>
    );
}