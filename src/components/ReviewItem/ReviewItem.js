import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, key } = props.product;
    const { buttonHandler } = props;
    return (
        <div className='product'>
            <div>
                <h2 className='product-name'>{name}</h2>
                <p>{quantity}</p>
                <p>{price}</p>

                <button onClick={() => buttonHandler(key)} className='btn-regular'>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;