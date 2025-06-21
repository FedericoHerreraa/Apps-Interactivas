import React, { useState, useEffect } from 'react';
import './Menu.css';
import { menuData } from '../../data/data';
import { MenuItem } from './MenuItem';

function MenuSection() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [menuDataFetched, setMenuDataFetched] = useState(null);

  // Variables de entorno
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
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
      console.log(menuDataFetched)
    }

    fetchData()
  }, [])

  return (
    <div id="menuSection" className="menu-container">
      <h1 style={{ alignItems: 'center' }} >Menú</h1>
      <p>Descubre nuestras deliciosas opciones</p>

      {menuData.map((section, index) => (
        <MenuItem key={index} section={section} setSelectedImg={setSelectedImg} />
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
