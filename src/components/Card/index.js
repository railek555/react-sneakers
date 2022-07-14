import React from 'react';
import styles from './Card.module.scss';

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img onClick={props.onFavorite} src="/img/heart-unliked.png" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена</span>
          <b>{props.price}</b>
        </div>
        <img
          className="button"
          onClick={onClickPlus}
          src={isAdded ? '/img/btn-checked.svg' : '/img/plus.svg'}
          alt="Plus"
        />
      </div>
    </div>
  );
}
export default Card;
