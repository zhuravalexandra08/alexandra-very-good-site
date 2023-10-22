import React from "react";

const Map = () => {
  return (
    <section className="map container">
      <h2>Инсбург на карте</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86607.14481685347!2d11.30875001861139!3d47.28555016251682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479d6ecfe1f8ca73%3A0x9d201c7d281d9b0d!2z0JjQvdC90YHQsdGA0YPQuiwg0JDQstGB0YLRgNC40Y8!5e0!3m2!1sru!2sru!4v1637856399041!5m2!1sru!2sru"
        style={{ border: 0, width: "100%", height: "450px" }}
      ></iframe>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam e</p>
      <table>
        <thead>
          <tr>
            <th>Вид транспорта</th>
            <th>Из Москвы</th>
            <th>Из Вены</th>
            <th>Из Мюнхена</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>Вид транспорта</span> Самолет
            </td>
            <td>
              <span>Из Москвы</span>+
            </td>
            <td>
              <span>Из Вены</span>-
            </td>
            <td>
              <span>Из Мюнхена</span>-
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <span>Вид транспорта</span>Поезд
            </td>
            <td>
              <span>Из Москвы</span>+
            </td>
            <td>
              <span>Из Вены</span>+
            </td>
            <td>
              <span>Из Мюнхена</span>+
            </td>
          </tr>
          <tr>
            <td>
              <span>Вид транспорта</span>Автомобиль
            </td>
            <td>
              <span>Из Москвы</span>-
            </td>
            <td>
              <span>Из Вены</span>+
            </td>
            <td>
              <span>Из Мюнхена</span>+
            </td>
          </tr>
          <tr>
            <td>
              <span>Вид транспорта</span>Автобус
            </td>
            <td>
              <span>Из Москвы</span>-
            </td>
            <td>
              <span>Из Вены</span>+
            </td>
            <td>
              <span>Из Мюнхена</span>+
            </td>
          </tr>
          <tr>
            <td>
              <span>Вид транспорта</span>Иные способы
            </td>
            <td>
              <span>Из Москвы</span>-
            </td>
            <td>
              <span>Из Вены</span>Трансфер на заказ
            </td>
            <td>
              <span>Из Мюнхена</span>Трансфер на заказ
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Map;
