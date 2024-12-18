import React from 'react';
import './ProductList.css'

function ProductList({ products, addToCart }) {
    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-item">
                    <h3>{product.name}</h3>
                    <img src={product.image} alt="" />
                    <p>{product.description}</p>
                    <button onClick={() => addToCart(product)}>Karzinkaga qo'shish</button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
