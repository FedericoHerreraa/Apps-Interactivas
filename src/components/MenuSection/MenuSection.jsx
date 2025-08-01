import React, { useState, useEffect } from 'react';
import './Menu.css';
import { MenuItem } from './MenuItem';

function MenuSection() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [menuDataFetched, setMenuDataFetched] = useState(null);

  const API_URL = import.meta.env.VITE_API_LOCAL_URL;

  const handleClickOutside = () => {
    setSelectedImg(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/api/dishes`)
      const dataDishes = await response.json()

      setMenuDataFetched(dataDishes)

      if (!response.ok) {
        throw new Error(dataDishes.message || "Error al obtener los platos")
      }
    }

    fetchData()
  }, [])

  if (!menuDataFetched) {
    return <div>Cargando...</div>
  }

  function groupByCategoryAndSubcategory(products) {
    const grouped = {};

    products.forEach(product => {
      const category = product.category || "Sin categoría";
      const subcategory = product.subcategory || "";

      if (!grouped[category]) grouped[category] = {};
      if (!grouped[category][subcategory]) grouped[category][subcategory] = [];

      grouped[category][subcategory].push(product);
    });

    return grouped;
  }

  const groupedMenu = groupByCategoryAndSubcategory(menuDataFetched);
  
  const categoryOrder = [
    'entrada',
    'principal', 
    'ensalada',
    'bebida',
    'bebida_alcoholica',
    'postre'
  ];

  const categoryNames = {
    'entrada': 'Entradas',
    'principal': 'Platos Principales',
    'ensalada': 'Ensaladas',
    'bebida': 'Bebidas',
    'bebida_alcoholica': 'Bebidas Alcohólicas',
    'postre': 'Postres'
  };

  const sortedCategories = Object.entries(groupedMenu).sort(([categoryA], [categoryB]) => {
    const indexA = categoryOrder.indexOf(categoryA);
    const indexB = categoryOrder.indexOf(categoryB);
    
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    
    return indexA - indexB;
  });

  return (
    <div id="menuSection" className="menu-container">
      <h1 style={{ alignItems: 'center' }} >Menú</h1>
      <p>Descubre nuestras deliciosas opciones</p>

      {sortedCategories.map(([category, subcats]) => (
        <div key={category}>
          <h2 style={{ textAlign: 'left', marginTop: '100px' }}>{categoryNames[category]}</h2>
          {Object.entries(subcats).map(([subcategory, items]) => (
            <div key={subcategory}>
              {subcategory && (
                <h3
                  style={{
                    textAlign: 'left',
                    color: '#cccccc',
                    marginTop: 0,
                    marginBottom: '10px'
                  }}
                                  >
                    {subcategory.replace("_", " ").charAt(0).toUpperCase() + subcategory.replace("_", " ").slice(1)}
                  </h3>
              )}
              {items.map(item => (
                <MenuItem key={item._id} item={item} setSelectedImg={setSelectedImg} />
              ))}
            </div>
          ))}
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
