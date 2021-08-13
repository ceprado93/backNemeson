import "./Pages.css";

import downArrow from "./../../assets/downArrow.svg";
import Linesupport from "./../../assets/Linesupport.png";

const Support = ({ loggedUser }) => {
  return (
    <>
      <section className="support">
        <section className="support__hero">
          <h1>
            Consultanos tus dudas o <br></br> resuelvelas tu mismo
          </h1>
          <div className="support__downArrow">
            <p>Instrucciones de uso y mantenimiento</p>
            <a href="#info">
              <img src={downArrow} className="bounce" alt="arrow" />
            </a>
          </div>
        </section>
        <section className="support__info" id="info">
          <article className="support__article">
            <div className="support__video"></div>
            <div className="support__text">
              <h2>Limpieza</h2>
              <img src={Linesupport} alt="line" />
              <p>Descubre funciones útiles para las familias y los niños</p>
            </div>
          </article>
          <article className="support__article-reverse">
            <div className="support__video"></div>
            <div className="support__text">
              <h2>Tutorial 02</h2>
              <img src={Linesupport} alt="line" />
              <p>Descubre funciones útiles para las familias y los niños</p>
            </div>
          </article>
          <article className="support__article">
            <div className="support__video"></div>
            <div className="support__text">
              <h2>Limpieza</h2>
              <img src={Linesupport} alt="line" />
              <p>Descubre funciones útiles para las familias y los niños</p>
            </div>
          </article>
        </section>
        <footer className="footer">
          <p>
            ¿Ayuda? Llama al <a href="tel:0034935 000 023">935 000 023</a> si tienes problemas.
          </p>
        </footer>
      </section>
    </>
  );
};

export default Support;
