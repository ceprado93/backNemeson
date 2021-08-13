import { useState, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./layout.css";
import logoNem from "../../assets/logoNem.svg";
import burger from "../../assets/burger.png";

const Navigation = () => {
  const [size, setSize] = useState(false);
  const [menu, setMenu] = useState(false);

  let location = useLocation();

  useLayoutEffect(() => {
    window.innerWidth < 600 && setSize(true);
  }, []);

  if (location.pathname === "/perfil" || location.pathname === "/productos" || location.pathname === "/soporte" || location.pathname === "/financiación") {
    return (
      <>
        {size ? (
          <>
            <div className="navigation">
              <Link to="/">
                <img src={logoNem} alt="logo" />
              </Link>
              <div className="navigation__links">
                <img className="navigation__burger" src={burger} alt="navicon" onClick={() => setMenu(true)} />
              </div>
              {menu && (
                <div className="openMenu">
                  <button className="close__btn" onClick={() => setMenu(false)}>
                    X
                  </button>
                  <ul>
                    <li>
                      <Link to="/perfil" className={location.pathname === "/perfil" ? "underline" : ""} onClick={() => setMenu(false)}>
                        Perfil
                      </Link>
                    </li>
                    <li>
                      <Link to="/productos" className={location.pathname === "/productos" ? "underline" : ""} onClick={() => setMenu(false)}>
                        Productos
                      </Link>
                    </li>
                    <li>
                      <Link to="/soporte" className={location.pathname === "/soporte" ? "underline" : ""} onClick={() => setMenu(false)}>
                        Soporte técnico
                      </Link>
                    </li>
                    <li>
                      <Link to="/financiación" className={location.pathname === "/financiación" ? "underline" : ""} onClick={() => setMenu(false)}>
                        Financiación
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="navigation">
              <Link to="/">
                <img src={logoNem} alt="logo" />
              </Link>
              <div className="navigation__links">
                <Link to="/perfil" className={location.pathname === "/perfil" ? "underline" : ""}>
                  Perfil
                </Link>
                <Link to="/productos" className={location.pathname === "/productos" ? "underline" : ""}>
                  Productos
                </Link>
                <Link to="/soporte" className={location.pathname === "/soporte" ? "underline" : ""}>
                  Soporte técnico
                </Link>
                <Link to="/financiación" className={location.pathname === "/financiación" ? "underline" : ""}>
                  Financiación
                </Link>
              </div>
            </div>
          </>
        )}
      </>
    );
  }

  return (
    <div className="navigation">
      <Link to="/">
        <img src={logoNem} alt="logo" />
      </Link>
    </div>
  );
};

export default Navigation;
