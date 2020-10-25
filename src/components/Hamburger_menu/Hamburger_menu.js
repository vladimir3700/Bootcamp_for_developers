import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="title_1">
        Основные факты
      </a>

      <a className="menu-item" href="title_2">
        Индекс качества воздуха
      </a>

      <a className="menu-item" href="title_3">
        Политика по уменьшению загрязнений
      </a>

      <a className="menu-item" href="title_4">
        2020, Все права защищены
      </a>

      <a className="menu-item" href="title_5">
        Согласие на обработку персональных данных
      </a>

      <a className="menu-item" href="title_6">
        Политика конфедициальности
      </a>

    </Menu>
  );
};