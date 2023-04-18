import React, { useEffect, useState, useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import "./Carrito.scss"
import { Link } from "react-router-dom"
import { FcDownLeft } from "react-icons/fc";
import { FcFullTrash } from "react-icons/fc";
import Emptycart from "./EmptyCart";
//-------------------------------------------------------------------------
import Skeleton from "react-loading-skeleton"
//-------------------------------------------------------------------------


const Carrito = () => {
  const { cart, setCart, contador, setContador, quantity, setQuantity, total, setTotal, cantidad, setCantidad,
    producto, setProduct, isLoading, setIsLoading } = useContext(CartContext);


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
    // }, [JSON.stringify(cart)]);
  }, [cart]);

  useEffect(() => {
    let cantidadArticulos = 0;
    cart.forEach((item) => {
      cantidadArticulos += item.contador;
    });
    setQuantity(cantidadArticulos);
    // }, [JSON.stringify(cart)]);
  }, [cart.length]);
  //--------------------------------------------------------------------------
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 4000)
  // },[])


  //-------------------------------------------------------------------------------
  const actualizarCantidad = (index, nuevaCantidad) => {
    const newCart = [...cart];
    newCart[index].contador = nuevaCantidad;
    setCart(newCart);
  };
  //----------------------------------------------------------------------------




  return (

    <>
    {  quantity === 0 ? (
      
      <Emptycart />
      
      ): (
        
        
        <div className="container contenedor-carrito">
      
      <div className="contenedor-carrito">
        <h5 className="contenedor-carrito cart">Mi carrito</h5>
        <h5 className="contenedor-carrito items">{quantity} items</h5>
      </div>
      <hr />
      
      <table className="table">
      {/* <table className="table table-default table-striped "> */}
      {/* <thead> */}
      <tr>
      <th scope="col">Producto</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio</th>
      <th scope="col">Total</th>
      <th scope="col">Eliminar producto</th>
      </tr>
      {/* </thead> */}
      <tbody>
      {cart.map((item, index) => (
        <tr key={item.id}>
              <td className="align-middle">
                <div className="carrito-foto-nombre">
                  <img src={item.imagen} alt={item.nombre} className="item-img" />
                  <p className="item-name">{item.nombre}</p>
                </div>
              </td>
              <td className="align-middle">
                {/* <div className="carrito-contador" >
                  <button className="btn btn-cantidad"
                  onClick={() => (item.contador > 1 ? (actualizarCantidad(index, item.contador - 1), setQuantity(quantity - 1)) : null)}>
                  -
                  </button>
                  <p>{item.contador}</p>
                  <button className="btn btn-cantidad"
                  onClick={() => actualizarCantidad(index, item.contador + 1, setQuantity(quantity + 1))}>
                  +
                  </button>
                </div> */}

                {/* <div class="btn-group" role="group" aria-label="Basic mixed styles example"> */}
                <div className="btn-group" >
                  <button type="button" className="btn btn-info" 
                    onClick={() => (item.contador > 1 ? (actualizarCantidad(index, item.contador - 1), setQuantity(quantity - 1)) : null)}
                    >
                    -
                  </button>
                  <button type="button" class="btn"> {item.contador} </button>
                  <button type="button" class="btn btn-info"
                    onClick={() => actualizarCantidad(index, item.contador + 1, setQuantity(quantity + 1))}
                    >
                    +
                  </button>
                </div>
              </td>
              <td className="align-middle">
                <div className="carrito-precio">
                  <p>${(item.precio).toLocaleString().replace(",", ".")},00</p>
                </div>
              </td>
              <td className="align-middle">
                <div className="carrito-precio">
                  <p>${(item.precio * item.contador).toLocaleString().replace(",", ".")},00</p>
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
        
        {/* <hr /> */}
        <div className="row finalizacion">
        {/* <h4>Cantidad de productos agregados: {quantity}</h4> */}
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
          )
          
        };
        export default Carrito
        //---------------------------------------------------------------------------------------------------------------------------------------------------------
        // import React, { useEffect, useState, useContext } from "react"
        // import { CartContext } from "../../Context/CartContext"
        // import "./Carrito.scss"
        // import { Link } from "react-router-dom"
        // //-------------------------------------------------------------------------
        // import Skeleton from "react-loading-skeleton"
        // //-------------------------------------------------------------------------
        
        
// const Carrito = () => {
//   const { cart, setCart, contador, setContador, quantity, setQuantity, total, setTotal, cantidad, setCantidad,
//     producto, setProduct, isLoading, setIsLoading } = useContext(CartContext);


//   const vaciarCarrito = () => {
//     setCart([]);
//     setContador(0);
//   };

//   const eliminarProducto = (index) => {
//     const newCart = [...cart];
//     newCart.splice(index, 1);
//     setCart(newCart);
//     setContador(contador - 1);
//     setCantidad(1)
//   };


//   useEffect(() => {
//     let newTotal = 0;
//     cart.forEach((item) => {
//       newTotal += item.precio * item.contador;
//     });
//     setTotal(newTotal);
//     // }, [JSON.stringify(cart)]);
//   }, [cart]);

//   useEffect(() => {
//     let cantidadArticulos = 0;
//     cart.forEach((item) => {
//       cantidadArticulos += item.contador;
//     });
//     setQuantity(cantidadArticulos);
//     // }, [JSON.stringify(cart)]);
//   }, [cart.length]);
//   //--------------------------------------------------------------------------
// // useEffect(() => {
// //   setTimeout(() => {
// //     setIsLoading(false)
// //   }, 4000)
// // },[])


//   //-------------------------------------------------------------------------------
//   const actualizarCantidad = (index, nuevaCantidad) => {
//     const newCart = [...cart];
//     newCart[index].contador = nuevaCantidad;
//     setCart(newCart);
//   };
//   //----------------------------------------------------------------------------




//   return (

//     <div className="container contenedor-carrito">
//       <h5>Mi carrito ({quantity})</h5>
//       <hr />

//       <table className="table table-default table-striped ">
//         <thead>
//           <tr>
//             <th scope="col">Producto</th>
//             <th scope="col">Cantidad</th>
//             <th scope="col">Precio</th>
//             <th scope="col">Total</th>
//             <th scope="col">Eliminar producto</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cart.map((item, index) => (
//             <tr key={item.id}>
//               <td className="align-middle">
//                 <div className="carrito-foto-nombre">
//                   <img src={item.imagen} alt={item.nombre} className="item-img" />
//                   <p className="item-name">{item.nombre}</p>
//                 </div>
//               </td>
//               <td className="align-middle">
//                 <div className="carrito-contador" >
//                   <button className="btn btn-cantidad"
//                     onClick={() => (item.contador > 1 ? (actualizarCantidad(index, item.contador - 1), setQuantity(quantity - 1)) : null)}>
//                     -
//                   </button>
//                   <p>{item.contador}</p>
//                   <button className="btn btn-cantidad"
//                     onClick={() => actualizarCantidad(index, item.contador + 1, setQuantity(quantity + 1))}>
//                     +
//                   </button>
//                 </div>
//               </td>
//               <td className="align-middle">
//                 <div className="carrito-precio">
//                   <p>${(item.precio).toLocaleString().replace(",", ".")},00</p>
//                 </div>
//               </td>
//               <td className="align-middle">
//                 <div className="carrito-precio">
//                   <p>${(item.precio * item.contador).toLocaleString().replace(",", ".")},00</p>
//                 </div>
//               </td>
//               <td className="align-middle">
//                 <div className="carrito-button">
//                   <button className="btn btn-danger" onClick={eliminarProducto}>
//                     Eliminar
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <hr />
//       <div className="row finalizacion">
//         {/* <h4>Cantidad de productos agregados: {quantity}</h4> */}
//       <Link to="/" className="btn btn-danger" >
//         Regresa al incio
//       </Link>
//         <h4 className="total-carrito">Total: ${(total).toLocaleString().replace(",", ".")},00</h4>
//       </div>


//       <button className="btn btn-danger" onClick={vaciarCarrito}>
//         Vaciar Carrito
//       </button>
//       <Link to="/checkout" className="btn btn-warning">
//         Terminar compra
//       </Link>

//     </div>

//   )

// };
// export default Carrito




















//---------------------------------------------------------













// import React, { useEffect, useState, useContext } from "react"
// import { CartContext } from "../../Context/CartContext"
// import "./Carrito.scss"


// const Carrito = () => {
//   const { cart, setCart, contador, setContador, quantity, setQuantity } = useContext(CartContext);
//   const [total, setTotal] = useState(0);
//   // const [cantidad, setCantidad ] = useState(0)
//   // const [quantity, setQuantity ] = useState(0)


//   const vaciarCarrito = () => {
//     setCart([]);
//     setContador(0);
//   };

//   useEffect(() => {
//     let newTotal = 0;
//     cart.forEach((item) => {
//       newTotal += item.precio * item.contador;
//     });
//     setTotal(newTotal);
//     // }, [JSON.stringify(cart)]);
//   }, [cart]);

//   useEffect(() => {
//     let cantidadArticulos = 0;
//     cart.forEach((item) => {
//       cantidadArticulos += item.contador;
//     });
//     setQuantity(cantidadArticulos);
//     // }, [JSON.stringify(cart)]);
//   }, [cart.length]);


//   return (
//     <div className="container contenedor-carrito">
//       <h6>Hola, soy el carrito de compras.</h6>

//       <div className="row">
//         {cart.map((item) => (
//           <div className="item col-12" key={item.id}>
//             <img src={item.imagen} alt={item.nombre} className="item-img" />
//             <div className="item-info">
//               <h3 className="item-name">{item.nombre}</h3>
//               <p className="item-description">{item.descripcion}</p>
//               <div className="item-details">
//                 <p className="item-stock">Stock: {item.stock}</p>
//                 <p className="item-category">Categoría: {item.categoria}</p>
//                 <p className="item-price">Precio: ${item.precio}</p>
//                 <p className="item-price">Cantidad: {item.contador}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="row">
//         <h4>Total: ${total}</h4>
//         <h4>Cantidad de productos agregados: {quantity}</h4>
//       </div>

//       <button className="btn btn-danger" onClick={vaciarCarrito}>
//         Vaciar Carrito
//       </button>
//     </div>
//   );
// };
// export default Carrito 