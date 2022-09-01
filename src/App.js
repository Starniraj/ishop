import './App.css';
import Accessories from './components/Accessories';
import Nav from './components/Nav';
import {Routes , Route} from "react-router-dom"
import Home from './components/Home';
import Cart from './Cart';
import {CartProvider} from "react-use-cart"
import { useState } from 'react';
import Checkout from './components/checkout';
import {Link } from "react-router-dom";

function App() {
  const [cart , setCart] = useState(false);
  return (
    <div className="App">
      <Link to="/cart"><button onClick={()=>setCart(true)} className='btn btn-success , cart' style={{backgroundColor:"blue"}}><i class="fa-solid fa-cart-arrow-down"></i>Cart</button></Link>
      <CartProvider>
      <Nav/>
      <Routes>
        {cart? (<Route path="/cart" element={<Cart/>}/>): null}
      <Route path='/' element={<Home/>}/>
      <Route path='/store/Accessories'  element={<Accessories/>}/>
      <Route path='/buynow' element={<Checkout/>}/>
      </Routes>
      </CartProvider>
    </div>
  );
}

export default App;