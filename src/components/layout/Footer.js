import "./layout.css";
import { useLocation } from "react-router-dom";

const Footer = (props) => {
  let location = useLocation();

  if (location.pathname === "/detalles" || location.pathname === "/perfil" || location.pathname === "/productos" || location.pathname === "/financiación") {
    return (
      <footer className="bottom__footer">
        <p>
          ¿Ayuda? Llama al <a href="tel:0034935 000 023">935 000 023</a> si tienes problemas.
        </p>
      </footer>
    );
  } else if (location.pathname === "/soporte") return null;
  return (
    <footer className="footer">
      <p>
        ¿Ayuda? Llama al <a href="tel:0034935 000 023">935 000 023</a> si tienes problemas.
      </p>
    </footer>
  );
};

export default Footer;
