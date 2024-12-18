import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar.jsx';
import ProductList from './components/ProductList.jsx';
import CartPage from './components/CartPage.jsx';
import { Route, BrowserRouter as Router, Routes } from 'react-router';
import { setProducts } from './redux/productsSlice.jsx';
import { addToCart } from './redux/cartSlice';

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((response) => response.json())
      .then((data) => dispatch(setProducts(data.data)));
  }, [dispatch]);

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route
          path="/"
          element={<ProductList products={products} addToCart={(product) => dispatch(addToCart(product))} />}
        />
        <Route
          path="/cart"
          element={<CartPage cart={cart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
