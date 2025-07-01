import React, { useState, useEffect } from 'react';
import './Menu.css';
import { MenuItem } from './MenuItem';

function MenuSection() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [menuDataFetched, setMenuDataFetched] = useState(null);

  const API_URL = 'http://localhost:3000';
  const USER_EMAIL = import.meta.env.VITE_USER_EMAIL || 'fede.juan.herrera@gmail.com';
  const USER_PASSWORD = import.meta.env.VITE_USER_PASSWORD || '123456';

  const handleClickOutside = () => {
    setSelectedImg(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const responseLogin = await fetch(`${API_URL}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: USER_EMAIL,
          password: USER_PASSWORD
        })
      })

      const dataLogin = await responseLogin.json()

      if (!responseLogin.ok) {
        throw new Error(dataLogin.message || "Error al iniciar sesión")
      }

      const response = await fetch(`${API_URL}/api/dishes`, {
        headers: {
          Authorization: `Bearer ${dataLogin.token}`
        }
      })

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

  return (
    <div id="menuSection" className="menu-container">
      <h1 style={{ alignItems: 'center' }} >Menú</h1>
      <p>Descubre nuestras deliciosas opciones</p>

      {Object.entries(groupedMenu).map(([category, subcats]) => (
        <div key={category}>
          <h2 style={{ textAlign: 'left', marginTop: '100px' }}>{category.replace("_", " ").toLocaleUpperCase()}</h2>
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
                  {subcategory.replace("_", " ").toLocaleUpperCase()}
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
