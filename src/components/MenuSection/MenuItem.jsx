
import { Link } from "react-router-dom"

export const MenuItem = ({ section, setSelectedImg }) => {
    return (
        <div className="menu-section">
          <h2>{section.category}</h2>
          {section.subcategories ? (
            <div className="subcategories" style={{ textAlign: 'left' }}>
              {section.subcategories.map((subcategory, subIndex) => (
                <div key={subIndex} className="menu-subcategory">
                  <h3 >{subcategory.name}</h3>
                  {subcategory.items.map((item, i) => (
                    <Link to={`/plato/${item.id}`} key={i} className="menu-item">
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
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            section.items.map((item, i) => (
              <Link to={`/plato/${item.id}`}  key={i} className="menu-item">
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
              </Link>
            ))
          )}
        </div>
    )
}