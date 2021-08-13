import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Auth.css";
import Authservice from "../../service/auth.service";

function Login({ storeUser }) {
  const [user, setUser] = useState({ username: undefined, password: undefined });

  const authService = new Authservice();
  let history = useHistory();

  const handleInput = (e) => {
    e.preventDefault();
    console.log(e.target);

    const { name, value } = e.target;
    setUser({ [name]: value, ...user });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    authService
      .login(user)
      .then((response) => {
        storeUser(response.data);
        if (!response.data.pharmacy) {
          history.push("/detalles");
        } else {
          history.push("/perfil");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="hero">
      <div className="hero__div">
        <h1>Hola de nuevo.</h1>
        <p>Para mantenerte conectado con nuestro servicio, entre con sus datos.</p>
        <form onSubmit={handleLogin}>
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
            type="password"
            name="password"
            placeholder="CONTRASEÑA"
            onChange={(e) =>
              setUser((user) => {
                return {
                  ...user,
                  password: e.target.value,
                };
              })
            }
          />
          <Link to="/recuperar-contraseña">¿Has olvidado tu contraseña?</Link>

          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </section>
  );
}

export default Login;
