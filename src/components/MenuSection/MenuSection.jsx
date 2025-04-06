import React, { useState } from 'react';
import './Menu.css';
import { menuData } from '../../data/data';
import { MenuItem } from './MenuItem';

function MenuSection() {
  const [selectedImg, setSelectedImg] = useState(null);

  const handleClickOutside = () => {
    setSelectedImg(null);
  };

  return (
    <div id="menuSection" className="menu-container">
      <h1 style={{ alignItems: 'center' }} >Menú</h1>
      <p>Descubre nuestras deliciosas opciones</p>

      {menuData.map((section, index) => (
        <MenuItem key={index} section={section} setSelectedImg={setSelectedImg}/>
      ))}

      
      {selectedImg && (
        <div className="image-overlay" onClick={handleClickOutside}>
          <img src={selectedImg} alt="ampliada" />
        </div>
      )}
    </div>
  );
}

export default MenuSection;
