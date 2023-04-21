import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase/config";
import { CartContext } from "../Context/CartContext";
import SkeletonCategory from "../components/Skeletons/SkeletonCategory";


function Peluches() {
  const [data, setData] = useState([]);

  const { isLoading, setIsLoading, loadingSkeleton, setLoadingSkeleton } = useContext(CartContext)


  // const q = query(collection(db, "productos-store"), where("categoria", "==", "Peluche"));
  // getDocs(q).then((querySnapshot) => {
  //   const docs = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //   setData(docs);
  //   setIsLoading(false);
  // }).catch((error) => {
  //   console.log("Error getting documents: ", error);
  // });

  useEffect(() => {
    setLoadingSkeleton(true)
    setTimeout(() => {
      const q = query(collection(db, "productos-store"), where("categoria", "==", "Peluche"));
      getDocs(q).then((querySnapshot) => {
        const docs = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setData(docs);
        setIsLoading(false);
        setLoadingSkeleton(false)
      }).catch((error) => {
        console.log("Error getting documents: ", error);
      });
    }, 400);
  }, [])



  return (

    <>
      {loadingSkeleton ? (

        <SkeletonCategory />

      ) : (

        <div className="container">
          <h1>Lista de Peluches</h1>

          <div className="row">
            {data.map((producto) =>
              producto.categoria === "Peluche" ? (
                <div className="card" style={{ width: "18rem" }} key={producto.id}>
                  <img
                    src={producto.imagen}
                    className="card-img-top"
                    alt={producto.nombre}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.descripcion}</p>
                    <p>Categoría: {producto.categoria}</p>
                    <Link to={`/productos/peluches/detalle/${producto.id}`} className='btn btn-primary'>Ver más</Link>
                  </div>
                </div>
              ) : null
            )
            }

          </div>
        </div>

      )}
    </>
  );
}

export default Peluches;
// import React, { useState, useEffect } from "react";
// import Swal from "sweetalert2";
// import mockData from "../data/MOCK_DATA.json"
// import { Link } from "react-router-dom"

// function Peluches() {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const showLoading = async () => {
//       const result = await Swal.fire({
//         title: 'Por favor espere...',
//         imageUrl: "https://www.pngmart.com/files/2/Pikachu-Transparent-Background.png",
//         allowEscapeKey: false,
//         allowOutsideClick: false,
//         timer: 1000,
//         didOpen: () => {
//           Swal.showLoading();
//         }
//       });

//       if (result.dismiss === Swal.DismissReason.timer) {
//         console.log('Cerrado por temporizador')
//       }

//       setData(mockData);
//       setIsLoading(false);
//     };

//     showLoading();
//   }, []);

//   return (
//     <div className="container">
//       <h1>Lista de Peluches</h1>

//       <div className="row">
//         {data.map((producto) =>
//           producto.categoria === "Peluche" ? (
//             <div className="card" style={{ width: "18rem" }} key={producto.id}>
//               <img
//                 src={producto.imagen}
//                 className="card-img-top"
//                 alt={producto.nombre}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{producto.nombre}</h5>
//                 <p className="card-text">{producto.descripcion}</p>
//                 <p>Categoría: {producto.categoria}</p>
//                 <Link to={`/productos/peluches/detalle/${producto.id}`} className='btn btn-primary'>Ver más</Link>
//               </div>
//             </div>
//           ) : null
//         )
//         }

//       </div>
//     </div>
//   );
// }

// export default Peluches;




