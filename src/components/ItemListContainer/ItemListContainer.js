import "./ItemListContainer.scss"
import Swal from "sweetalert2";
import PikachuSaludo from "../../assets/img/pikachu-exito.png"

const ItemListContainer = ({ greeting, texto }) => {
  const handleClick = () => {
    Swal.fire({
      title: "¡Hola, visitante!",
        text: "¡La Tienda Oficial de Pokemon estará disponible muy pronto! ¡Sonríe!",
      imageUrl: PikachuSaludo,
      icon: "success",
      confirmButtonText: "Cerrar",
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div>
          <h3 className="texto-greeting text-center">{greeting}</h3>
          <img className="mx-auto d-block" src="https://media4.giphy.com/media/e4PkUJXi88n1C/giphy.gif?cid=ecf05e47gmnj63hotsmjm90hyc9xidbmj9n18pgc5w3dnfr3&rid=giphy.gif&ct=g" alt="Saludo de Pikachu"/>
          <p className="text-center"> {texto} </p>

          <button className="btn btn-danger mx-auto d-block" onClick={handleClick}>Click me, please</button>

        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
