import bruschetta from '../Images/bruschetta.jpeg';
import caesar from '../Images/caesar.jpeg';
import caprese from '../Images/caprese.jpeg';
import carne from '../Images/carne.jpeg';
import carpaccio from '../Images/carpaccio.jpg';
import gourmet from '../Images/gourmet.jpeg';
import gourmet1 from '../Images/gourmet1.jpeg';
import gourmet2 from '../Images/gourmet2.jpeg';
import muzzarelitas from '../Images/muzzarelitas.jpeg';

export const menuData = [
    {
      category: "Entrantes",
      items: [
        { name: "Carpaccio de Res", description: "Finas láminas de res con rúcula, parmesano y limón", ingredientes: "Res, rúcula, parmesano, limón", alergenos: "Lácteos", price: "$1200", img: carpaccio },
        { name: "Bruschetta", description: "Pan tostado con tomate, ajo y albahaca", ingredientes: "Pan, tomate, ajo, albahaca", alergenos: "Gluten", price: "$800", img: bruschetta },
        { name: "Muzzarelitas", description: "Queso mozzarella rebozado y frito", ingredientes: "Mozzarella, pan rallado, huevo", alergenos: "Gluten, lácteos, huevo", price: "$1100", img: muzzarelitas },
        { name: "Empanadas de Carne", description: "Empanadas fritas de carne sazonada", ingredientes: "Carne vacuna, cebolla, masa", alergenos: "Gluten", price: "$800", img: carne },
        { name: "Provoleta", description: "Queso provolone a la parrilla con chimichurri", ingredientes: "Queso provolone, chimichurri", alergenos: "Lácteos", price: "$1500", img: gourmet },
        { name: "Langostinos al Ajillo", description: "Langostinos salteados con ajo y perejil", ingredientes: "Langostinos, ajo, perejil", alergenos: "Mariscos", price: "$2500", img: gourmet1 },
        { name: "Tabla de Fiambres", description: "Selección de fiambres y quesos", ingredientes: "Jamón, salame, queso, aceitunas", alergenos: "Lácteos", price: "$3000", img: gourmet2 },
      ]
    },
    {
      category: "Ensaladas",
      items: [
        { name: "Ensalada César", description: "Lechuga, crutones, parmesano y aderezo", ingredientes: "Lechuga, pan, parmesano, aderezo César", alergenos: "Gluten, lácteos, pescado", price: "$950", img: caesar },
        { name: "Ensalada Caprese", description: "Mozzarella, tomate y albahaca", ingredientes: "Mozzarella, tomate, albahaca", alergenos: "Lácteos", price: "$1000", img: caprese },
        { name: "Ensalada Mediterránea", description: "Pepino, aceitunas negras, cebolla morada y queso feta", ingredientes: "Pepino, aceitunas negras, cebolla, queso feta", alergenos: "Lácteos", price: "$1100", img: gourmet },
        { name: "Ensalada Tropical", description: "Lechuga, mango, palta y aderezo cítrico", ingredientes: "Lechuga, mango, palta, aderezo", alergenos: "Ninguno", price: "$1300", img: gourmet2 },
      ]
    },
    {
      category: "Platos Principales",
      subcategories: [
        {
          name: "Carnes Rojas",
          items: [
            { name: "Milanesa Napolitana", description: "Con papas fritas", ingredientes: "Carne vacuna, pan rallado, mozzarella, tomate, papas", alergenos: "Gluten, lácteos, huevo", price: "$1800", img: carne }
          ]
        },
        {
          name: "Pescados",
          items: [
            { name: "Salmón a la Parrilla", description: "Con guarnición de vegetales", ingredientes: "Salmón, limón, especias", alergenos: "Pescado", price: "$2000", img: gourmet2 }
          ]
        }
      ]
    },
    {
      category: "Pastas",
      items: [
        { name: "Ravioles de Ricotta", description: "Con salsa fileto", ingredientes: "Ricotta, harina, huevo, tomate", alergenos: "Gluten, lácteos, huevo", price: "$1600", img: gourmet }
      ]
    },
    {
      category: "Bebidas",
      items: [
        { name: "Coca-Cola", description: "500ml", ingredientes: "Agua carbonatada, azúcar", alergenos: "Ninguno", price: "$950", img: gourmet }
      ]
    },
    {
      category: "Bebidas Alcohólicas",
      items: [
        { name: "Vino Malbec", description: "Cosecha 2020", ingredientes: "Uvas Malbec", alergenos: "Sulfitos", price: "$3000", img: gourmet1 }
      ]
    },
    {
      category: "Postres",
      items: [
        { name: "Flan Casero", description: "Con dulce de leche o crema", ingredientes: "Huevos, leche, azúcar", alergenos: "Huevo, lácteos", price: "$700", img: gourmet2 }
      ]
    }
];
