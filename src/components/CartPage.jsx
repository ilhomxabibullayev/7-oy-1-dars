import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, changeQuantity } from '../redux/cartSlice';
import './CartPage.css'

function CartPage({ cart }) {
    const dispatch = useDispatch();

    const handleQuantityChange = (id, quantity) => {
        dispatch(changeQuantity({ id, quantity }));
    };

    return (
        <div className="cart-page">
            <h2>Karzinka</h2>
            {cart.length === 0 ? (
                <p>Karzinkangiz bo'sh.</p>
            ) : (
                cart.map((product) => (
                    <div key={product.id} className="cart-item">
                        <h4>{product.name}</h4>
                        <p>Mahsulot soni:</p>
                        <input
                            type="number"
                            value={product.quantity || 1}
                            onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                            min="1"
                        />
                        <button onClick={() => dispatch(removeFromCart(product.id))}>O'chirish</button>
                    </div>
                ))
            )}
        </div>
    );
}

export default CartPage;
