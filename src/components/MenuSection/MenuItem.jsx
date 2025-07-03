import { Link } from "react-router-dom"



export const MenuItem = ({ item, setSelectedImg }) => {
  const API_URL = import.meta.env.VITE_API_LOCAL_URL;

  return (
    <Link to={`/plato/${item._id}`} className="menu-item">
      <div>
        <div style={{ marginBottom: '10px', textAlign: 'start' }}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
        <p><strong>Ingredientes:</strong> {item.ingredientes}</p>
        <p><strong>Alérgenos:</strong> {item.alergenos}</p>
        <span className="price">${item.price}</span>
      </div>
      <img
        src={`${API_URL}/uploads/${item.image}`}
        alt={item.name}
        className="menu-item-img"
        onClick={() => setSelectedImg(item.image)}
      />
    </Link>
  )
}