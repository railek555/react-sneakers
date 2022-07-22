import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://62d932349eedb6996355eec9.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск ..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
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

          {items.map((obj) => (
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
