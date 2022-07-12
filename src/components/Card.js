function Card(props) {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unliked.png" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена</span>
          <b>{props.price}</b>
        </div>
        <img className="button" src="/img/plus.svg" alt="Plus" />
      </div>
    </div>
  );
}
export default Card;
