import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from "./imgs/restaurant.jpg";
import img2 from "./imgs/chicken.jpg";
import img3 from "./imgs/sushi.jpg";
import img4 from "./imgs/kimchi.jpg";
import img5 from "./imgs/quesadilla.jpg";
import img6 from "./imgs/pizza.jpg";

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the latest additions!</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem
              src={img2}
              text='A super easy, full flavoured Butter Chicken recipe that rivals any restaurant.'
              label='Butter Chicken'
              path='/'
            />
            <CardItem
              src={img3}
              text='a Japanese dish of prepared vinegared rice, usually with some sugar and salt.'
              label='sushi'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img4}
              text='Kimchi, is a traditional Korean banchan consisting of salted and fermented vegetables, most commonly using napa cabbage or Korean radish'
              label='kimchi'
              path='/services'
            />
            <CardItem
              src={img5}
              text='a Mexican dish consisting of a tortilla that is filled primarily with cheese, and sometimes meats, spices, and other fillings'
              label='Quesadilla'
              path='/products'
            />
            <CardItem
              src={img6}
              text='dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients,'
              label='Pizza'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;