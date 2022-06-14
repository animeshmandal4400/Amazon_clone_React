import React from 'react';
import './home.css';
import Product from '../Product/product.jsx';
import { headerItems, products } from '../../utils/ProductData';
import Slider from '../slideBanner/slider';

import banner1 from '../assets/Banner1.jpg'
import banner2 from '../assets/Banner2.jpg'
import banner3 from '../assets/Banner3.jpg'
import banner4 from '../assets/Banner4.jpg'
import banner5 from '../assets/Banner5.jpg'
import banner6 from '../assets/Banner6.jpg'

function home() {
  const bannerImages = [banner1, banner2, banner3, banner4, banner5, banner6,];

  return (
    <div className='home'>
      <div className="home__container">
        <div className="item__container">
          {headerItems && headerItems.map((item, index) => <p> {item}</p>)}
        </div>
        <Slider images={bannerImages} />
        <div className="home__row">
          {products.slice(0, 2).map((item) => (
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
          {products.slice(2, 5).map((item) => (
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
          {products.slice(2, 5).map((item) => (
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
          {products.slice(5, 6).map((item) => (
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