import { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Auth.css";
import Authservice from "../../service/auth.service";

const Contraseña = () => {
  const [user, setUser] = useState({ username: undefined, password: undefined });

  const authService = new Authservice();
  let history = useHistory();

  const handlePassword = (e) => {
    e.preventDefault();
    authService
      .updatePassword(user)
      .then((response) => {
        history.push("/");
        console.log(response);
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="recuperar">
      <div className="recuperar__div">
        <h1>Introduce una nueva contraseña</h1>
        <p>Rellena los siguientes datos para recuperarla. </p>
        <form onSubmit={handlePassword}>
          <input
            type="text"
            placeholder="EMAIL"
            name="username"
            onChange={(e) =>
              setUser((user) => {
                return {
                  ...user,
                  username: e.target.value,
                };
              })
            }
          />
          <input
            type="text"
            name="password"
            placeholder="NUEVA CONTRASEÑA"
            onChange={(e) =>
              setUser((user) => {
                return {
                  ...user,
                  password: e.target.value,
                };
              })
            }
          />
          <input
            type="text"
            name="password"
            placeholder="CONFIRMAR CONTRASEÑA"
            onChange={(e) =>
              setUser((user) => {
                return {
                  ...user,
                  password: e.target.value,
                };
              })
            }
          />

          <button type="submit">Recuperar</button>
        </form>
      </div>
    </section>
  );
};

export default Contraseña;
