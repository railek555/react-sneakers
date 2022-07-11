function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unliked.png" alt="Unliked" />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.png" alt="Sneakers" />
      <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена</span>
          <b>12 990 руб.</b>
        </div>
        <img className="button" src="/img/plus.svg" alt="Plus" />
      </div>
    </div>
  );
}
export default Card;
