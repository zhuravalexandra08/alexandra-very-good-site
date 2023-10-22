import React from "react";

const Header = () => {
  return (
    <header className="page-header container">
      <img src="img/logo.svg" width="75" height="70" alt="Логотип" />
      <nav className="main-menu">
        <ul className="main-menu-list">
          <li>
            <a href="#about">О городе</a>
          </li>
          <li>
            <a href="#gallery">Галерея</a>
          </li>
          <li>
            <a href="#map">Карта</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
