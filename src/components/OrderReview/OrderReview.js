import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { clearTheCart, deleteFromDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useNavigate()
    const buttonHandler = key => {
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart);
        deleteFromDb(key);
    }
    const PlaceOrderHandler = () => {
        history('/placeorder');
        setCart([]);
        clearTheCart();
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(product => <ReviewItem
                        product={product}
                        key={product.key}
                        buttonHandler={buttonHandler}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>

                    <button onClick={PlaceOrderHandler} className='btn-regular'>Place order</button>
                </Cart>
            </div>

        </div>
    );
};

export default OrderReview;