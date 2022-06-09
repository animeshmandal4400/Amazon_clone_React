import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../redux/StateProvider';
import './product.css';

const Product = ({ id, title, image, price, rating, specification, details }) => {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })

    }

    return (
        <div className='product'>
            <div className="product__info">
                <Link to={`/products/$(id)`} className='title'>
                    <p>{title}</p>
                </Link>

                <p className='product__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}

                </div>
            </div>
            <img src={image} alt="" />

            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    );
}

export default Product;