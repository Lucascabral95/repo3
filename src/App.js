import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.scss'
import { CartProvider } from "./Context/CartContext"
import AppRouter from "./routes/AppRouter"

function App() {

  return (
    <div>
      <CartProvider>
           <AppRouter />
      </CartProvider>

    </div>
  );
}

export default App;
