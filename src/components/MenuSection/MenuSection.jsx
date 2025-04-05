import React, { useState } from 'react';
import './Menu.css';
import { menuData } from '../../data/data';

function MenuSection() {
  const [selectedImg, setSelectedImg] = useState(null);

  const handleClickOutside = () => {
    setSelectedImg(null);
  };

  return (
    <div id="menuSection" className="menu-container">
      <h1>Menú</h1>
      <p>Descubre nuestras deliciosas opciones</p>

      {menuData.map((section, index) => (
        <div key={index} className="menu-section">
          <h2>{section.category}</h2>
          {section.subcategories ? (
            <div className="subcategories" style={{ textAlign: 'left' }}>
              {section.subcategories.map((subcategory, subIndex) => (
                <div key={subIndex} className="menu-subcategory">
                  <h3 style={{ fontSize: '23px' }}>{subcategory.name}</h3>
                  {subcategory.items.map((item, i) => (
                    <div key={i} className="menu-item">
                      <div>
                        <div style={{ marginBottom: '10px', textAlign: 'start' }}>
                          <h3>{item.name}</h3>
                          <p>{item.description}</p>
                        </div>
                        <p><strong>Ingredientes:</strong> {item.ingredientes}</p>
                        <p><strong>Alérgenos:</strong> {item.alergenos}</p>
                        <span className="price">{item.price}</span>
                      </div>
                      <img
                        src={item.img}
                        alt={item.name}
                        className="menu-item-img"
                        onClick={() => setSelectedImg(item.img)}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            section.items.map((item, i) => (
              <div key={i} className="menu-item">
                <div>
                  <div style={{ marginBottom: '10px', textAlign: 'start' }}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <p><strong>Ingredientes:</strong> {item.ingredientes}</p>
                  <p><strong>Alérgenos:</strong> {item.alergenos}</p>
                  <span className="price">{item.price}</span>
                </div>
                <img
                  src={item.img}
                  alt={item.name}
                  className="menu-item-img"
                  onClick={() => setSelectedImg(item.img)}
                />
              </div>
            ))
          )}
        </div>
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
