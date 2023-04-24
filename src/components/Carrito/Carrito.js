import React, { useEffect, useState, useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import "./Carrito.scss"
import { Link } from "react-router-dom"
import { FcDownLeft } from "react-icons/fc";
import { FcFullTrash } from "react-icons/fc";
import Emptycart from "./EmptyCart";
import SkeletonCarrito from "../Skeletons/SkeletonCarrito"


const Carrito = () => {
  const { cart, setCart, contador, setContador, quantity, setQuantity, total, setTotal, cantidad, setCantidad,
    producto, setProduct, isLoading, setIsLoading, loadingSkeleton, setLoadingSkeleton } = useContext(CartContext);


  const vaciarCarrito = () => {
    setCart([]);
    setContador(0);
  };

  const eliminarProducto = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    setContador(contador - 1);
    setCantidad(1)
  };


  useEffect(() => {
    let newTotal = 0;
    cart.forEach((item) => {
      newTotal += item.precio * item.contador;
    });
    setTotal(newTotal);
  }, [cart]);

  useEffect(() => {
    let cantidadArticulos = 0;
    cart.forEach((item) => {
      cantidadArticulos += item.contador;
    });
    setQuantity(cantidadArticulos);
  }, [cart.length]);


  const actualizarCantidad = (index, nuevaCantidad) => {
    const newCart = [...cart];
    newCart[index].contador = nuevaCantidad;
    setCart(newCart);
  };


  useEffect(() => {
    setLoadingSkeleton(true)
    setTimeout(() => {
      setLoadingSkeleton(false)
    }, 400);
  }, [])


  return (

    <>
      {quantity === 0 ? (

        <Emptycart />

      ) : (

        <>
          {loadingSkeleton ? (

            <SkeletonCarrito />

          ) : (


            <div className="container contenedor-carrito">

              <div className="contenedor-carrito">
                <h5 className="contenedor-carrito cart">Mi carrito</h5>
                <h5 className="contenedor-carrito items">{quantity} items</h5>
              </div>
              <hr />

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Total</th>
                    <th scope="col">Eliminar producto</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index}>
                      <td className="align-middle">
                        <div className="carrito-foto-nombre">
                          <img src={item.imagen} alt={item.nombre} className="item-img" />
                          <p className="item-name">{item.nombre}</p>
                        </div>
                      </td>
                      <td className="align-middle">

                        <div className="btn-group" >
                          <button type="button" className="btn btn-info"
                            onClick={() => (item.contador > 1 ? (actualizarCantidad(index, item.contador - 1), setQuantity(quantity - 1)) : null)}
                          >
                            -
                          </button>
                          <button type="button" className="btn"> {item.contador} </button>
                          <button type="button" className="btn btn-info"
                            onClick={() => actualizarCantidad(index, item.contador + 1, setQuantity(quantity + 1))}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="carrito-precio">
                          <p>${item.precio},00</p>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="carrito-precio">
                          <p>${(item.precio * item.contador)},00</p>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="carrito-button">
                          <button className="btn btn-info" onClick={eliminarProducto}>
                            Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="row finalizacion">
                <div className="acomodador">
                  <div className="div-link btn btn-warning">
                    < FcDownLeft size={25} />
                    <Link to="/" className="btn" >
                      Regresar al incio
                    </Link>
                  </div>
                  <div className="div-total-carrito">
                    <h4 className="total-carrito">Total: ${(total).toLocaleString().replace(",", ".")},00</h4>
                  </div>
                </div>
                <div className="div-checkout">
                  <Link to="/checkout" className="btn btn-success">
                    Checkout
                  </Link>
                </div>
                <div className="div-trash">
                  <button className="btn btn-danger" onClick={vaciarCarrito}>
                    <FcFullTrash size={26} /> Vaciar Carrito <FcFullTrash size={26} />
                  </button>
                </div>
              </div>


            </div>

          )}
        </>
      )}
    </>
  )
};

export default Carrito
