import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.scss'
import { CartProvider } from "./Context/CartContext"
import AppRouter from "./routes/AppRouter"
import { WishProvider } from "./Context/WishListContext"
import { LoginProvider } from './Context/LoginContext';

function App() {

  return (
    <div>

      <LoginProvider>
        <WishProvider>
          <CartProvider>
            <AppRouter />
          </CartProvider>
        </WishProvider>
      </LoginProvider>

    </div>
  );
}

export default App;
