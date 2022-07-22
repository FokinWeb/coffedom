import React from 'react';
import { Link } from 'react-router-dom';

import logoSvg from '../../assets/img/logo.svg';
import './Header.scss';

const Header = () => {
  const [scrollActive, setScrollActive] = React.useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <header className={scrollActive ? 'header active' : 'header'}>
      <div className="container">
        <div className="header__wrapper">
          <Link to="/" className="header__logo">
            <img src={logoSvg} alt="CoffeDom" />
          </Link>
          <nav className="header__menu">
            <ul>
              <li>
                <Link to="/catalog">Каталог</Link>
              </li>
              <li>
                <Link to="/">О нас</Link>
              </li>
              <li>
                <Link to="/">Акции</Link>
              </li>
              <li>
                <Link to="/">Готовые наборы</Link>
              </li>
            </ul>
          </nav>
          <div className="header__buttons">
            <button className="header__button-login">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C10.0605 2.00369 8.16393 2.57131 6.54128 3.63374C4.91862 4.69617 3.63994 6.20754 2.86099 7.98377C2.08204 9.76 1.83643 11.7244 2.15408 13.6378C2.47173 15.5511 3.33893 17.3308 4.65005 18.76C5.58647 19.775 6.72299 20.5851 7.98799 21.1392C9.25298 21.6933 10.619 21.9793 12 21.9793C13.3811 21.9793 14.7471 21.6933 16.0121 21.1392C17.2771 20.5851 18.4136 19.775 19.35 18.76C20.6612 17.3308 21.5284 15.5511 21.846 13.6378C22.1637 11.7244 21.9181 9.76 21.1391 7.98377C20.3602 6.20754 19.0815 4.69617 17.4588 3.63374C15.8362 2.57131 13.9396 2.00369 12 2ZM12 20C9.92851 19.9969 7.93896 19.1903 6.45005 17.75C6.90209 16.6495 7.67108 15.7083 8.6593 15.0459C9.64752 14.3835 10.8104 14.0298 12 14.0298C13.1897 14.0298 14.3526 14.3835 15.3408 15.0459C16.329 15.7083 17.098 16.6495 17.55 17.75C16.0611 19.1903 14.0716 19.9969 12 20ZM10 10C10 9.60444 10.1173 9.21776 10.3371 8.88886C10.5569 8.55996 10.8692 8.30362 11.2347 8.15224C11.6001 8.00087 12.0023 7.96126 12.3902 8.03843C12.7782 8.1156 13.1346 8.30608 13.4143 8.58579C13.694 8.86549 13.8844 9.22186 13.9616 9.60982C14.0388 9.99778 13.9992 10.3999 13.8478 10.7654C13.6964 11.1308 13.4401 11.4432 13.1112 11.6629C12.7823 11.8827 12.3956 12 12 12C11.4696 12 10.9609 11.7893 10.5858 11.4142C10.2108 11.0391 10 10.5304 10 10ZM18.91 16C18.0166 14.4718 16.6415 13.283 15 12.62C15.5092 12.0427 15.841 11.3307 15.9555 10.5694C16.0701 9.80822 15.9625 9.03011 15.6458 8.3285C15.3291 7.62688 14.8166 7.03156 14.17 6.61397C13.5233 6.19637 12.7698 5.97425 12 5.97425C11.2303 5.97425 10.4768 6.19637 9.83014 6.61397C9.18346 7.03156 8.67102 7.62688 8.3543 8.3285C8.03758 9.03011 7.93004 9.80822 8.04458 10.5694C8.15912 11.3307 8.49088 12.0427 9.00005 12.62C7.35865 13.283 5.98352 14.4718 5.09005 16C4.37799 14.7871 4.00177 13.4065 4.00005 12C4.00005 9.87827 4.8429 7.84344 6.34319 6.34315C7.84349 4.84285 9.87832 4 12 4C14.1218 4 16.1566 4.84285 17.6569 6.34315C19.1572 7.84344 20 9.87827 20 12C19.9983 13.4065 19.6221 14.7871 18.91 16Z"
                  fill="white"
                />
              </svg>
              Войти
            </button>
            <button className="header__button-registration">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 10.5H20V9.5C20 9.23478 19.8946 8.98043 19.7071 8.79289C19.5196 8.60536 19.2652 8.5 19 8.5C18.7348 8.5 18.4804 8.60536 18.2929 8.79289C18.1054 8.98043 18 9.23478 18 9.5V10.5H17C16.7348 10.5 16.4804 10.6054 16.2929 10.7929C16.1054 10.9804 16 11.2348 16 11.5C16 11.7652 16.1054 12.0196 16.2929 12.2071C16.4804 12.3946 16.7348 12.5 17 12.5H18V13.5C18 13.7652 18.1054 14.0196 18.2929 14.2071C18.4804 14.3946 18.7348 14.5 19 14.5C19.2652 14.5 19.5196 14.3946 19.7071 14.2071C19.8946 14.0196 20 13.7652 20 13.5V12.5H21C21.2652 12.5 21.5196 12.3946 21.7071 12.2071C21.8946 12.0196 22 11.7652 22 11.5C22 11.2348 21.8946 10.9804 21.7071 10.7929C21.5196 10.6054 21.2652 10.5 21 10.5ZM13.3 12.22C13.8336 11.7581 14.2616 11.1869 14.5549 10.545C14.8482 9.90316 15 9.20571 15 8.5C15 7.17392 14.4732 5.90215 13.5355 4.96447C12.5979 4.02678 11.3261 3.5 10 3.5C8.67392 3.5 7.40215 4.02678 6.46447 4.96447C5.52678 5.90215 5 7.17392 5 8.5C4.99999 9.20571 5.1518 9.90316 5.44513 10.545C5.73845 11.1869 6.16642 11.7581 6.7 12.22C5.30014 12.8539 4.11247 13.8775 3.27898 15.1685C2.4455 16.4596 2.00147 17.9633 2 19.5C2 19.7652 2.10536 20.0196 2.29289 20.2071C2.48043 20.3946 2.73478 20.5 3 20.5C3.26522 20.5 3.51957 20.3946 3.70711 20.2071C3.89464 20.0196 4 19.7652 4 19.5C4 17.9087 4.63214 16.3826 5.75736 15.2574C6.88258 14.1321 8.4087 13.5 10 13.5C11.5913 13.5 13.1174 14.1321 14.2426 15.2574C15.3679 16.3826 16 17.9087 16 19.5C16 19.7652 16.1054 20.0196 16.2929 20.2071C16.4804 20.3946 16.7348 20.5 17 20.5C17.2652 20.5 17.5196 20.3946 17.7071 20.2071C17.8946 20.0196 18 19.7652 18 19.5C17.9985 17.9633 17.5545 16.4596 16.721 15.1685C15.8875 13.8775 14.6999 12.8539 13.3 12.22ZM10 11.5C9.40666 11.5 8.82664 11.3241 8.33329 10.9944C7.83994 10.6648 7.45542 10.1962 7.22836 9.64805C7.0013 9.09987 6.94189 8.49667 7.05764 7.91473C7.1734 7.33279 7.45912 6.79824 7.87868 6.37868C8.29824 5.95912 8.83279 5.6734 9.41473 5.55764C9.99667 5.44189 10.5999 5.5013 11.1481 5.72836C11.6962 5.95542 12.1648 6.33994 12.4944 6.83329C12.8241 7.32664 13 7.90666 13 8.5C13 9.29565 12.6839 10.0587 12.1213 10.6213C11.5587 11.1839 10.7956 11.5 10 11.5Z"
                  fill="white"
                />
              </svg>
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
