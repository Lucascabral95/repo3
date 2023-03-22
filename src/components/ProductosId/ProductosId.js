import "./ProductosId.scss"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mockData from "../../data/MOCK_DATA.json";

const ProductoId = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [cantidad, setCantidad] = useState(1);

    const restarCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const sumarCantidad = () => {
        setCantidad(cantidad + 1);
    };

    const actualizarCantidad = () => {
        setCantidad(0);
    };

    useEffect(() => {
        const productoEncontrado = mockData.find((p) => p.id == id);
        setProducto(productoEncontrado);
    }, [id]);

    if (!producto) {
        return <div>Cargando...</div>;
    }

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img className="producto-imagen" src={producto.imagen} />
                </div>
                <div className="col-md-6 producto-info">
                    <h2 className="producto-titulo">{producto.categoria} de {producto.nombre} </h2>
                    <p className="producto-precio">{producto.descripcion}</p>
                    <p className="producto-precio">$ {producto.precio}</p>
                    <p className="producto-categoria">Categoría: {producto.categoria}</p>
                    <div className="cantidad">
                        <button className="btn btn-cantidad" onClick={restarCantidad} >-</button>
                        <input type="text" className="form-control d-inline-block" style={{ width: '60px', textAlign: 'center' }}
                            value={cantidad} readOnly />
                        <button className="btn btn-cantidad" onClick={sumarCantidad} >+</button>

                        
                    <button className="btn btn-primary btn-actualizacion" onClick={actualizarCantidad} >Actualizar</button>
                   
                   
                    </div>
                    {/* <button className="btn btn-primary btn-actualizacion" onClick={actualizarCantidad} >Actualizar</button> */}
                    <button className="btn btn-success">Agregar al Carrito</button>
                </div>
            </div>
        </div>
    );
}

export default ProductoId;