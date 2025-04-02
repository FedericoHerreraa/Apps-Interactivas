import bruschetta from '../images/bruschetta.jpeg';
import caesar from '../images/caesar.jpeg';
import caprese from '../images/caprese.jpeg';
import carne from '../images/carne.jpeg';
import carpaccio from '../images/carpaccio.jpg';
import gourmet from '../images/gourmet.jpeg';
import gourmet1 from '../images/gourmet1.jpeg';
import gourmet2 from '../images/gourmet2.jpeg';
import muzzarelitas from '../images/muzzarelitas.jpeg';

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
      { name: "Ensalada Rúcula y Parmesano", description: "Rúcula fresca con lascas de parmesano", ingredientes: "Rúcula, parmesano, aceite de oliva", alergenos: "Lácteos", price: "$1200", img: gourmet1 },
      { name: "Ensalada Tropical", description: "Lechuga, mango, palta y aderezo cítrico", ingredientes: "Lechuga, mango, palta, aderezo", alergenos: "Ninguno", price: "$1300", img: gourmet2 },
      { name: "Ensalada Rusa", description: "Papas, zanahorias, arvejas y mayonesa", ingredientes: "Papas, zanahorias, arvejas, mayonesa", alergenos: "Huevo", price: "$900", img: gourmet },
      { name: "Ensalada de Quinoa", description: "Quinoa con vegetales frescos y limón", ingredientes: "Quinoa, pepino, tomate, limón", alergenos: "Ninguno", price: "$1400", img: gourmet1 },
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
        name: "Carnes Blancas",
        items: [
          { name: "Pollo a la Parrilla", description: "Con ensalada mixta", ingredientes: "Pollo, lechuga, tomate, cebolla", alergenos: "Ninguno", price: "$1700", img: gourmet1 }
        ]
      },
      {
        name: "Pescado",
        items: [
          { name: "Salmón a la Plancha", description: "Con verduras salteadas", ingredientes: "Salmón, pimientos, cebolla, zanahoria", alergenos: "Pescado", price: "$2000", img: gourmet2 }
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
