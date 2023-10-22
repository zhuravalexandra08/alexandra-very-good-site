import React from "react";

const About = () => {
  return (
    <article className="about container">
      <h2>О городе</h2>
      <section className="about-info">
        <h3>Инсбург - один из лучших курортов в Австрии</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
          voluptatem molestiae at, et, omnis placeat magnam, officiis totam
          fugit officia earum labore est? Fugit laborum est cumque harum, et
          quidem!
        </p>
      </section>
      <div className="wrapper">
        <section className="about-numbers">
          <h3>Инсбург в цифрах</h3>
          <ul className="about-numbers-list">
            <li> Fugit laborum est cumque</li>
            <li> Fugit laborum est cumque</li>
            <li> Fugit laborum est cumque</li>
            <li> Fugit laborum est cumque</li>
            <li> Fugit laborum est cumque</li>
            <li> Fugit laborum est cumque</li>
          </ul>
        </section>
        <aside className="marketing">
          <p>Собрался на горноложный курорт?</p>
          <p>Не забудь купить снаряжение!</p>
          <a href="#">SKI-RACER.COM</a>
        </aside>
      </div>
      <section className="about-weather">
        <h3>Температура по месяцам</h3>
        <figure className="about-weater-graph">
          <img
            src="img/wether.PNG"
            width="1198"
            height="721"
            alt="Гафик изменения температуры"
          />
          <figcaption>
            Температуа воздуха в Инсбурге днем и ночью, &#8451;
          </figcaption>
        </figure>
      </section>
    </article>
  );
};

export default About;
