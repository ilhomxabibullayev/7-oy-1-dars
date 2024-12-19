import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, changeQuantity } from '../redux/cartSlice';
import './CartPage.css';

function CartPage({ cart }) {
    const dispatch = useDispatch();

    const handleQuantityChange = (id, quantity) => {
        dispatch(changeQuantity({ id, quantity }));
    };

    const increaseQuantity = (id, quantity) => {
        dispatch(changeQuantity({ id, quantity: quantity + 1 }));
    };

    const decreaseQuantity = (id, quantity) => {
        if (quantity > 1) {
            dispatch(changeQuantity({ id, quantity: quantity - 1 }));
        }
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
                        <div className="quantity-controls">
                            <button onClick={() => decreaseQuantity(product.id, product.quantity || 1)}>-</button>
                            <span>{product.quantity || 1}</span>
                            <button onClick={() => increaseQuantity(product.id, product.quantity || 1)}>+</button>
                        </div>
                        <button onClick={() => dispatch(removeFromCart(product.id))}>O'chirish</button>
                    </div>
                ))
            )}
        </div>
    );
}

export default CartPage;
