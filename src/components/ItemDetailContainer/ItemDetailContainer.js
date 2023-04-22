import "./ItemDetailContainer.scss"
import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase/config";
import { CartContext } from "../../Context/CartContext";
import SkeletonProductosId from "../Skeletons/SkeletonProductosId";
import 'react-loading-skeleton/dist/skeleton.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ProductoId = () => {
    const { id } = useParams();

    const { cart, setCart, isInCart, producto, setProducto, data, setData, loadingSkeleton, setLoadingSkeleton,
        cantidad, setCantidad, quantity, setQuantity } = useContext(CartContext);

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const productoRef = doc(db, "productos-store", id);
        getDoc(productoRef)
            .then((productoDoc) => {
                if (productoDoc.exists()) {
                    setProducto(productoDoc.data());
                } else {
                    console.log("No se encontró el producto.");
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);


    console.log(cart)


    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    };

    const handleSumar = () => {
        if (cantidad < producto.stock) {
            setCantidad(cantidad + 1);
        }
    };


    const handleAgregar = () => {
        const productoExistente = cart.find(item => item.nombre === producto.nombre);

        if (productoExistente) {
            const productoActualizado = { ...productoExistente, contador: productoExistente.contador + cantidad };
            setCart(cart.map(item => (item.nombre === producto.nombre ? productoActualizado : item)));
        } else {
            setCart([...cart, { ...producto, contador: cantidad }]);
        }

        toast.success(cantidad === 1 ? (
            ("¡Usted agrego exitosamente 1 articulo al carrito!")
        ) : (
            (`¡Usted agrego exitosamente ${cantidad} articulos al carrito!`)
        ))
    };


    if (loading) {
        return <SkeletonProductosId />
    }


    return (

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img className="producto-imagen" src={producto.imagen} /></div>
                <div className="col-md-6 producto-info">
                    <h2 className="producto-titulo">{producto.categoria} de {producto.nombre}</h2>
                    <p className="producto-precio">{producto.descripcion}</p>
                    <p className="producto-precio">$ {producto.precio}</p>
                    <p className="producto-categoria">Categoría: {producto.categoria}</p>

                    <div className="cantidad">
                        <button className="btn btn-cantidad" onClick={handleRestar} >
                            -
                        </button>

                        <input
                            type="number"
                            className="form-control d-inline-block"
                            style={{ width: "60px", textAlign: "center" }}
                            value={cantidad}
                            onChange={(event) => setCantidad(Number(event.target.value))}
                            min="1"
                            max={producto.stock}
                        />
                        <button className="btn btn-cantidad" onClick={handleSumar}>
                            +
                        </button>
                    </div>
                    <button className="btn btn-success" onClick={handleAgregar}>
                        Agregar al Carrito
                    </button>
                    <ToastContainer autoClose={1500} draggable={true} />
                    <Link to="/carrito" className="btn btn-warning" onClick={() => setCantidad(1)}>
                        Terminar compra
                    </Link>

                </div>
            </div>
        </div>

    );
}

export default ProductoId;
