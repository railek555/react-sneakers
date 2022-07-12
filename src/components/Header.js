function Header() {
  return (
    <header className="d-flex justify-between align-center p-30">
      <div className="d-flex align-center">
        <img width={40} height={40} alt="" src="/img/logo.png" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок в Казани</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img width={18} height={18} alt="" src="/img/user.svg" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={18} height={18} alt="" src="/img/cart.svg" />
        </li>
      </ul>
    </header>
  );
}
export default Header;
