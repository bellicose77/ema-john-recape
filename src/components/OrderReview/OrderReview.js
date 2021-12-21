import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart] = useCart(products);
    return (
        <div>
            <h2>Total number of product:{products.length}</h2>
            <h2>Cart product: {cart.length}</h2>
        </div>
    );
};

export default OrderReview;