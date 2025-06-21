import React, { useState, useEffect } from 'react';
import './Menu.css';
import { menuData } from '../../data/data';
import { MenuItem } from './MenuItem';

function MenuSection() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [menuDataFetched, setMenuDataFetched] = useState(null);

  const handleClickOutside = () => {
    setSelectedImg(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const responseLogin = await fetch(`http://localhost:3000/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: "fede.juan.herrera@gmail.com",
          password: "123456"
        })
      })

      const dataLogin = await responseLogin.json()

      if (!responseLogin.ok) {
        throw new Error(dataLogin.message || "Error al iniciar sesión")
      }

      const response = await fetch(`http://localhost:3000/api/dishes`, {
        headers: {
          Authorization: `Bearer ${dataLogin.token}`
        }
      })

      const dataDishes = await response.json()
      setMenuDataFetched(dataDishes)
      console.log(menuDataFetched)
    }

    fetchData()
  }, [menuDataFetched])

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
