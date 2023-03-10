import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.scss'
import { NavBar } from "./components/Navbar/Navbar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div>

      <NavBar />

      <ItemListContainer greeting="¡Bienvenidos, fans de Pokemon!" texto={"Pikachu esta muy feliz de recibir tu visita a su futura Tienda Oficial. 😊"} />

    </div>
  );
}

export default App;
