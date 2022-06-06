import React from 'react';
import './home.css';
import Product from '../Product/product.jsx';
import { headerItems, products } from '../../utils/ProductData';

function home () {
  return (
    <div className='home'>
    <div className="home__container">
        <div className="item__container">
          {headerItems && headerItems.map((item,index) => <p> {item}</p>)}
        </div>
        <img className='home__image' src="https://m.media-amazon.com/images/I/61cVtPiiXsL._SX3000_.jpg
" alt="" />

        <div className="home__row">
          {products.slice(0,2).map((item) => (
            <Product
            key={item.key}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              specification={item.specification}
              detail={item.detail}
            />

          ))}
        </div> 
        <div className="home__row">
          {products.slice(2,5).map((item) => (
            <Product
            key={item.key}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              specification={item.specification}
              detail={item.detail}
            />

          ))}
        </div> 
        <div className="home__row">
          {products.slice(5,6).map((item) => (
            <Product
            key={item.key}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              specification={item.specification}
              detail={item.detail}
            />

          ))}
        </div> 
    </div>
    </div>
  )
}

export default home