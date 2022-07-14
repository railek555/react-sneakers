import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';

const arr = [
  {
    title: 'Мужские кроссовки Nike Blazer Mid Suede',
    price: 12990,
    imageUrl: '/img/sneakers/1.png',
  },
  { title: 'Мужские Кроссовки Nike Air Max 270', price: 15990, imageUrl: '/img/sneakers/2.jpg' },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede 2',
    price: 8990,
    imageUrl: '/img/sneakers/3.jpg',
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 9990,
    imageUrl: '/img/sneakers/4.jpg',
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск ..." />
          </div>
        </div>

        <div className="d-flex">
          {/*   <Card
            title="11Мужские кроссовки Nike Blazer Mid Suede"
            price={12990}
            imageUrl="/img/sneakers/1.png"
          />
          <Card
            title="11Мужские кроссовки Nike Blazer Mid Suede"
            price={12990}
            imageUrl="/img/sneakers/2.jpg"
          /> */}

          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onFavorite={() => console.log('Добавить в закладки')}
              onPlus={() => console.log('Нажали плюс')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
