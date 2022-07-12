import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  { sname: 'Мужские кроссовки Nike Blazer Mid Suede', price: 12990 },
  { sname: 'Мужские кроссовки Nike Air Max 270', price: 15600 },
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
          <Card
            title="11Мужские кроссовки Nike Blazer Mid Suede"
            price={12990}
            imageUrl="/img/sneakers/1.png"
          />
          <Card
            title="11Мужские кроссовки Nike Blazer Mid Suede"
            price={12990}
            imageUrl="/img/sneakers/2.jpg"
          />

          {/*  {arr.map((obj) => (
            <Card />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default App;
