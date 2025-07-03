import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import heroBg from '../images/hero-bg.jpg';

export default function ProductDetail() {
    const { id } = useParams();
    const [producto, setProducto] = useState();
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_LOCAL_URL;

    useEffect(() => {
        if (!id) return;
        fetch(`${API_URL}/api/dishes/${id}`)
            .then(res => res.json())
            .then(data => setProducto(data))
            .catch(() => setProducto(null));
    }, [id, API_URL]);

    if (!producto) {
        return <div style={{ color: 'white' }}>Cargando producto...</div>;
    }

    return (
        <div style={{
            backgroundColor: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            position: 'relative',
            height: '100vh',
            overflow: 'hidden'
        }}>
            <div style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.2,
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 0
            }}></div>

            <div
                onClick={() => navigate(-1)}
                style={{
                    position: 'absolute',
                    top: 30,
                    left: 30,
                    zIndex: 2,
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: 16,
                    textDecoration: 'underline'
                }}
            >
                ← Volver al menú
            </div>

            <div style={{
                backgroundColor: '#1a1a1a',
                borderRadius: 20,
                height: 'auto',
                maxWidth: 700,
                width: '100%',
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.05)',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{ height: 300, overflow: 'hidden' }}>
                    <img
                        src={`${API_URL}/uploads/${producto.image}`}
                        alt={producto.name}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20
                        }}
                    />
                </div>

                <div style={{ padding: 24, color: 'white' }}>
                    <h1 style={{ fontSize: 28, marginBottom: 10 }}>{producto.name}</h1>
                    <p style={{ fontStyle: 'italic', marginBottom: 20 }}>{producto.description}</p>
                    <div style={{ marginBottom: 10 }}>
                        <strong>Ingredientes:</strong> {producto.ingredientes}
                    </div>
                    <div style={{ marginBottom: 10 }}>
                        <strong>Alérgenos:</strong> {producto.alergenos}
                    </div>
                    <div>
                        <strong>Precio:</strong> {producto.price}
                    </div>
                </div>
            </div>
        </div>
    )
}
