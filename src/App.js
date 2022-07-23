import { render } from "@testing-library/react";
import React from "react";
import PropsTypes from 'prop-types';

/* 컴포넌트명은 대문자로 시작 */
function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'salmon',
    image: 'http://m.62life.com/images/gdimg/71560001_main(0).jpg',
    rating: 4.7,
  },
  {
    id: 2,
    name: 'sushi',
    image: 'https://previews.123rf.com/images/hongee/hongee1608/hongee160800010/61684605-%EB%AA%A8%EB%93%AC-%EC%8A%A4%EC%8B%9C-%EC%84%B8%ED%8A%B8.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'bubble tea',
    image: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAPdgnJ.img?h=552&w=750&m=6&q=60&u=t&o=f&l=f',
    rating: 4.6
  },
  {
    id: 4,
    name: 'Sausage and rice cake',
    image: 'https://m.yoriking.com/web/product/medium/skewer/sotteok8p_s1.jpg',
    rating: 4.5
  },
  {
    id: 5,
    name: 'Duck Bulgogi',
    image: 'https://mblogthumb-phinf.pstatic.net/MjAxODEyMjhfMzEg/MDAxNTQ1OTUxMDIwNTEw.GDZI_JZSYhcc6fUApPepYN-tpUAOlZ84bJxIPdIQKmUg.LzbUzml9XCoLiwi6sL4RsmjlEGidxNoCbaC93XwLDXQg.JPEG.sable8270/%EB%B6%80%EC%82%B0_%EA%B0%80%EC%95%BC%EA%B3%B5%EC%9B%90_%EC%98%A4%EB%A6%AC%EA%B3%A0%EA%B8%B0_%EB%A7%9B%EC%A7%91_%EB%83%89%EC%88%98%ED%83%95%EA%B0%80%EB%93%A014.jpg?type=w800',
    rating: 4.8
  }
];

function App() {
  return (
  <div>
    {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
    ))}
  </div>
  );
}

Food.PropsTypes = {
  name: PropsTypes.string.isRequired,
  picture: PropsTypes.string.isRequired,
  rating: PropsTypes.number,
};

export default App;
