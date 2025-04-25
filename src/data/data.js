import bruschetta from '../images/bruschetta.jpeg';
import caesar from '../images/caesar.jpeg';
import caprese from '../images/caprese.jpeg';
import carne from '../images/carne.jpeg';
import carpaccio from '../images/carpaccio.jpg';
import provoleta from '../images/provoleta.png'
import langostinosAjillo from '../images/langostinosAjillo.png';
import tablaPicadas from '../images/tablaPicadas.png'
import mediterranea from '../images/mediterranea.png';
import ruculaParmesano from '../images/ruculaParmesano.png'
import tropical from '../images/tropical.png';
import rusa from '../images/rusa.png'
import quinoa from '../images/quinoa.png'
import napolitana from '../images/napolitana.png'
import polloParrilla from '../images/polloParrilla.png'
import salmon from '../images/salmon.png'
import ricota from '../images/ricota.png'
import cocaCola from '../images/coca-cola.png'
import malbec from '../images/malbec.png'
import flan from '../images/flan.png'
import muzzarelitas from '../images/muzzarelitas.jpeg';
import tiramisu from '../images/tiramisu.jpeg';
import budin from '../images/budin.jpeg';  
import helado from '../images/helado.jpeg';
import cheesecake from '../images/cheesecake.jpeg';
import tartafruta from '../images/tartafruta.jpeg';
import delacasa from '../images/delacasa.jpeg';
import cerveza from '../images/cerveza.jpeg';
import champagne from '../images/champagne.jpeg';
import sprite from '../images/sprite.jpeg';
import aquarius from '../images/aquarius.jpeg';
import agua from '../images/agua.jpeg';
import rabas from '../images/rabas.jpeg';
import trucha from '../images/trucha.jpeg';
import ñoquis from '../images/ñoquis.jpeg';
import entraña from '../images/entraña.jpeg';
import asado from '../images/asado.jpeg';
import suprema from '../images/suprema.jpeg';
import fideos from '../images/fideos.jpeg';
import bife from '../images/bife.jpeg';
import lasagna from '../images/lasagna.jpeg';


export const menuData = [
  {
    category: "Entrantes",
    items: [
      { id: 1, name: "Carpaccio de Res", description: "Finas láminas de res con rúcula, parmesano y limón", ingredientes: "Res, rúcula, parmesano, limón", alergenos: "Lácteos", price: "$1200", img: carpaccio },
      { id: 2, name: "Bruschetta", description: "Pan tostado con tomate, ajo y albahaca", ingredientes: "Pan, tomate, ajo, albahaca", alergenos: "Gluten", price: "$800", img: bruschetta },
      { id: 3, name: "Muzzarelitas", description: "Queso mozzarella rebozado y frito", ingredientes: "Mozzarella, pan rallado, huevo", alergenos: "Gluten, lácteos, huevo", price: "$1100", img: muzzarelitas },
      { id: 4, name: "Empanadas de Carne", description: "Empanadas fritas de carne sazonada", ingredientes: "Carne vacuna, cebolla, masa", alergenos: "Gluten", price: "$800", img: carne },
      { id: 5, name: "Provoleta", description: "Queso provolone a la parrilla con chimichurri", ingredientes: "Queso provolone, chimichurri", alergenos: "Lácteos", price: "$1500", img: provoleta },
      { id: 6, name: "Langostinos al Ajillo", description: "Langostinos salteados con ajo y perejil", ingredientes: "Langostinos, ajo, perejil", alergenos: "Mariscos", price: "$2500", img: langostinosAjillo },
      { id: 7, name: "Tabla de Fiambres", description: "Selección de fiambres y quesos", ingredientes: "Jamón, salame, queso, aceitunas", alergenos: "Lácteos", price: "$3000", img: tablaPicadas },
    ]
  },
  {
    category: "Ensaladas",
    items: [
      { id: 8, name: "Ensalada César", description: "Lechuga, crutones, parmesano y aderezo", ingredientes: "Lechuga, pan, parmesano, aderezo César", alergenos: "Gluten, lácteos, pescado", price: "$950", img: caesar },
      { id: 9, name: "Ensalada Caprese", description: "Mozzarella, tomate y albahaca", ingredientes: "Mozzarella, tomate, albahaca", alergenos: "Lácteos", price: "$1000", img: caprese },
      { id: 10, name: "Ensalada Mediterránea", description: "Pepino, aceitunas negras, cebolla morada y queso feta", ingredientes: "Pepino, aceitunas negras, cebolla, queso feta", alergenos: "Lácteos", price: "$1100", img: mediterranea },
      { id: 11, name: "Ensalada Rúcula y Parmesano", description: "Rúcula fresca con lascas de parmesano", ingredientes: "Rúcula, parmesano, aceite de oliva", alergenos: "Lácteos", price: "$1200", img: ruculaParmesano },
      { id: 12, name: "Ensalada Tropical", description: "Lechuga, mango, palta y aderezo cítrico", ingredientes: "Lechuga, mango, palta, aderezo", alergenos: "Ninguno", price: "$1300", img: tropical },
      { id: 13, name: "Ensalada Rusa", description: "Papas, zanahorias, arvejas y mayonesa", ingredientes: "Papas, zanahorias, arvejas, mayonesa", alergenos: "Huevo", price: "$900", img: rusa },
      { id: 14, name: "Ensalada de Quinoa", description: "Quinoa con vegetales frescos y limón", ingredientes: "Quinoa, pepino, tomate, limón", alergenos: "Ninguno", price: "$1400", img: quinoa },
    ]
  },
  {
    category: "Platos Principales",
    subcategories: [
      {
        name: "Carnes Rojas",
        items: [
          { id: 15, name: "Milanesa Napolitana", description: "Con papas fritas", ingredientes: "Carne vacuna, pan rallado, mozzarella, tomate, papas", alergenos: "Gluten, lácteos, huevo", price: "$1800", img: napolitana },
          { id: 16, name: "Bife de Chorizo", description: "A la parrilla con guarnición", ingredientes: "Bife de chorizo, ensalada", alergenos: "Ninguno", price: "$2500", img: bife },
          { id: 17, name: "Entraña", description: "Con salsa BBQ y guarnición", ingredientes: "Costillas, salsa BBQ, ensalada", alergenos: "Ninguno", price: "$2300", img: entraña },
          { id: 18, name: "Asado", description: "Con papas fritas o Pure", ingredientes: "Carne vacuna", alergenos: "Ninguno", price: "$2300", img: asado },
        
        ]
      },
      {
        name: "Carnes Blancas",
        items: [
          { id: 19, name: "Pollo a la Parrilla", description: "Con ensalada mixta", ingredientes: "Pollo, lechuga, tomate, cebolla", alergenos: "Ninguno", price: "$1700", img: polloParrilla },
          { id: 20, name: "Suprema de Pollo ", description: "Con verduras grill ", ingredientes: "Pollo, zanahoria, espinaca, papa", alergenos: "Ninguno", price: "$1400", img: suprema }
        
        ]
      },
      {
        name: "Pescado",
        items: [
          { id: 21, name: "Salmón a la Plancha", description: "Con verduras salteadas", ingredientes: "Salmón, pimientos, cebolla, zanahoria", alergenos: "Pescado", price: "$2000", img: salmon },
          { id: 22, name: "Rabas", description: "Rabas fritas ", ingredientes: "Calamar, pan rallado, harina, huevo", alergenos: "Pescado", price: "$2000", img: rabas },
          { id: 23, name: "Trucha", description: "Con verduras y crema", ingredientes: "Trucha, espinacas, crema", alergenos: "Pescado", price: "$2000", img: trucha }
        ]
      }
    ]
  },
  {
    category: "Pastas",
    items: [
      { id: 24, name: "Ravioles de Ricotta", description: "Con salsa fileto", ingredientes: "Ricotta, harina, huevo, tomate", alergenos: "Gluten, lácteos, huevo", price: "$1600", img: ricota },
      { id: 25, name: "Fideos con Salsa Bolognesa", description: "Espaguetis con carne molida", ingredientes: "Espaguetis, carne molida, tomate", alergenos: "Gluten", price: "$1400", img: fideos },
      { id: 26, name: "Ñoquis soufle", description: "Con salsa de albahaca y nueces", ingredientes: "Papa, albahaca, nueces, aceite de oliva", alergenos: "Nueces, gluten", price: "$1500", img: ñoquis },
      { id: 27, name: "Lasaña de Carne", description: "Capas de pasta con verduras,carne y bechamel", ingredientes: "Pasta,Carne, verduras, bechamel", alergenos: "Gluten, lácteos", price: "$1700", img: lasagna },
    ]
  },
  {
    category: "Bebidas",
    items: [
      { id: 28, name: "Agua Mineral", description: "500ml", ingredientes: "Agua", alergenos: "Ninguno", price: "$950", img: agua }, 
      { id: 29, name: "Coca-Cola", description: "500ml", ingredientes: "Agua carbonatada, azúcar", alergenos: "Ninguno", price: "$950", img: cocaCola }, 
      { id: 30, name: "Sprite", description: "500ml", ingredientes: "Agua carbonatada, azúcar", alergenos: "Ninguno", price: "$950", img: sprite }, 
      { id: 31, name: "Jugo Aquarius", description: "500ml", ingredientes: "Agua, colorantes, azúcar, conservantes", alergenos: "Ninguno", price: "$950", img: aquarius }, 

    ]
  },
  {
    category: "Bebidas Alcohólicas",
    items: [
      { id: 32, name: "Vino Malbec", description: "Cosecha 2020", ingredientes: "Uvas Malbec", alergenos: "Sulfitos", price: "$3000", img: malbec },
      { id: 33, name: "Vino Atelier", description: "Cosecha 1990", ingredientes: "Uvas ", alergenos: "Sulfitos", price: "$1800", img: delacasa },
      { id: 34, name: "Cerveza Artesanal", description: "500ml", ingredientes: "Agua, malta, lúpulo, levadura", alergenos: "Gluten", price: "$1200", img: cerveza },
      { id: 35, name: "Champagne", description: "Botella 750ml", ingredientes: "Uvas", alergenos: "Sulfitos", price: "$5000", img: champagne },
    ]
  },
  {
    category: "Postres",
    items: [
      { id: 36, name: "Flan", description: "Flan casero con dulce de leche o crema ", ingredientes: "Huevo, azucar, vainilla", alergenos: "Huevo", price: "$950", img: flan},
      { id: 37, name: "Budín de Pan", description: "Budín de pan con dulce de leche", ingredientes: "Pan, leche, azúcar, huevo, dulce de leche", alergenos: "Gluten, lácteos, huevo", price: "$800", img: budin },
      { id: 38, name: "Helado Artesanal", description: "Variedad de sabores", ingredientes: "Leche, azúcar, saborizantes", alergenos: "Lácteos", price: "$1200", img: helado },
      { id: 39, name: "Tarta de Frutas", description: "Base de masa con crema y frutas frescas", ingredientes: "Masa, crema, frutas", alergenos: "Gluten, lácteos", price: "$1500", img: tartafruta },
      { id: 40, name: "Tiramisu", description: "Postre italiano con café y mascarpone", ingredientes: "Café, mascarpone, cacao", alergenos: "Gluten, lácteos, huevo", price: "$1800", img: tiramisu },
      { id: 41, name: "Cheesecake", description: "Tarta de queso con base de galleta", ingredientes: "Queso crema, galletas, mantequilla", alergenos: "Gluten, lácteos", price: "$1700", img: cheesecake},
    ]
  }
];
