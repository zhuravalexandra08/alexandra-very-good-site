import React from "react";

const Gallery = () => {
  return (
    <section className="gallery container">
      <h2>Галерея</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam modi
        vitae nemo reiciendis fugiat quos!
      </p>
      <ul className="gallery-list">
        <li className="gallery-item">
          <h3>ИМПЕРАТОРСКИЙ ДВОРЕЦ</h3>
          <img src="img/hofburg.jpg" alt="ИМПЕРАТОРСКИЙ ДВОРЕЦ" />
        </li>
        <li className="gallery-item">
          <img src="img/hofgarten.jpg" alt="ПАРК ХОФГАРТЕН" />
          <h3>ПАРК ХОФГАРТЕН</h3>
        </li>
        <li className="gallery-item">
          <h3>ЗАМОК АБРАМ</h3>
          <img src="img/ambras.jpg" alt="ЗАМОК АБРАМ" />
        </li>
      </ul>
    </section>
  );
};

export default Gallery;
