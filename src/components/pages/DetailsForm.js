import { useState, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import Authservice from "../../service/auth.service";
import mastercard from "../../assets/mastercardlogo.svg";
import visa from "../../assets/visalogo.svg";
import applepay from "../../assets/applepaylogo.svg";
import { getSuggestedQuery } from "@testing-library/react";

const DetailsForm = ({ loggedUser, storeUser }) => {
  const [userDetails, setUserDetails] = useState({
    pharmacy: undefined,
    nif: undefined,
    direction: undefined,
    phone: undefined,
    mobile: undefined,
    mail: undefined,
    contact: undefined,
  });
  const [month, setMonth] = useState("");
  const [size, setSize] = useState(false);

  useLayoutEffect(() => {
    window.innerWidth < 600 && setSize(true);
  }, []);

  const authService = new Authservice();
  let history = useHistory();

  const handleUser = (e) => {
    e.preventDefault();
    console.log(loggedUser.loggedUser._id);

    authService
      .updateUser(loggedUser.loggedUser._id, userDetails)
      .then((response) => {
        storeUser(response.data);
        history.push("/perfil");
      })
      .catch((err) => console.log(err));
  };

  const handleMonthExpiry = (e) => {
    setMonth(e.target.value);
  };

  const handleExpiry = (e) => {
    console.log(e.target.value);

    setUserDetails((userDetails) => {
      return {
        ...userDetails,
        expiry: `${month} / ${e.target.value}`,
      };
    });
  };
  return (
    <section className="detalles">
      <div className="detalles__div">
        <h2>Configura tu perfil</h2>
        <p>Rellena los espacios con tus datos. </p>
        <form onSubmit={handleUser}>
          <div className="blockOne">
            <h3>
              <span>01.</span> Datos de empresa
            </h3>
            <div className="form__line">
              <input
                type="text"
                placeholder="FARMACIA"
                name="pharmacy"
                onChange={(e) =>
                  setUserDetails((userDetails) => {
                    return {
                      ...userDetails,
                      pharmacy: e.target.value,
                    };
                  })
                }
              />
              <input
                type="text"
                placeholder="RAZÓN SOCIAL"
                name="social"
                onChange={(e) =>
                  setUserDetails((userDetails) => {
                    return {
                      ...userDetails,
                      social: e.target.value,
                    };
                  })
                }
              />
            </div>
            <div className="form__line">
              <input
                type="text"
                name="nif"
                placeholder="NIF/CIF"
                onChange={(e) =>
                  setUserDetails((userDetails) => {
                    return {
                      ...userDetails,
                      nif: e.target.value,
                    };
                  })
                }
              />

              <input
                type="text"
                name="direction"
                placeholder="DIRECCIÓN"
                onChange={(e) =>
                  setUserDetails((userDetails) => {
                    return {
                      ...userDetails,
                      direction: e.target.value,
                    };
                  })
                }
              />
            </div>
            <div className="form__line">
              <input
                type="number"
                name="phone"
                placeholder="TELÉFONO FIJO"
                onChange={(e) =>
                  setUserDetails((userDetails) => {
                    return {
                      ...userDetails,
                      phone: e.target.value,
                    };
                  })
                }
              />
              <input
                type="number"
                name="mobile"
                placeholder="MOVIL"
                onChange={(e) =>
                  setUserDetails((userDetails) => {
                    return {
                      ...userDetails,
                      mobile: e.target.value,
                    };
                  })
                }
              />
            </div>
            <div className="form__line">
              <input
                type="text"
                name="mail"
                placeholder="EMAIL"
                onChange={(e) =>
                  setUserDetails((userDetails) => {
                    return {
                      ...userDetails,
                      mail: e.target.value,
                    };
                  })
                }
              />
              <input
                type="text"
                name="contact"
                placeholder="PERSONA DE CONTACTO"
                onChange={(e) =>
                  setUserDetails((userDetails) => {
                    return {
                      ...userDetails,
                      contact: e.target.value,
                    };
                  })
                }
              />
            </div>
          </div>
          <div className="blockTwo">
            <h3>
              <span>02.</span> Datos Bancarios
            </h3>
            <div className="form__line">
              <input
                type="text"
                className="first__input"
                name="entity"
                placeholder="ENTIDAD BANCARIA"
                onChange={(e) =>
                  setUserDetails((userDetails) => {
                    return {
                      ...userDetails,
                      entity: e.target.value,
                    };
                  })
                }
              />
              <input
                type="text"
                className="second__input"
                name="name"
                placeholder="NOMBRE EN CUENTA"
                onChange={(e) =>
                  setUserDetails((userDetails) => {
                    return {
                      ...userDetails,
                      name: e.target.value,
                    };
                  })
                }
              />
            </div>
            <div className="form__line">
              <input
                type="text"
                className="third__input"
                name="number"
                placeholder="NUMERO DE CUENTA"
                onChange={(e) =>
                  setUserDetails((userDetails) => {
                    return {
                      ...userDetails,
                      number: e.target.value,
                    };
                  })
                }
              />
              {size ? (
                <div className="payment_method__block">
                  <img className="img1" src={mastercard} alt="payment_method" />
                  <img className="img2" src={visa} alt="payment_method" />
                  <img className="img3" src={applepay} alt="payment_method" />{" "}
                </div>
              ) : (
                <div className="payment_method__block">
                  <img className="img1" src={mastercard} alt="payment_method" />
                  <img className="img2" src={visa} alt="payment_method" />
                  <img className="img3" src={applepay} alt="payment_method" />{" "}
                </div>
                // <>
                //   <img className="img1" src={mastercard} alt="payment_method" />
                //   <img className="img2" src={visa} alt="payment_method" />
                //   <img className="img3" src={applepay} alt="payment_method" />{" "}
                // </>
              )}
            </div>
            <p>Datos de expiración</p>
            <div className="form__line">
              <input type="text" className="fifth__input" name="expiry" placeholder="MES" onChange={(e) => handleMonthExpiry(e)} />
              <input type="text" className="sixth__input" name="expiry" placeholder="AÑO" onChange={(e) => handleExpiry(e)} />

              <input
                type="text"
                className="seventh__input"
                name="code"
                placeholder="CVC"
                onChange={(e) =>
                  setUserDetails((userDetails) => {
                    return {
                      ...userDetails,
                      code: e.target.value,
                    };
                  })
                }
              />
            </div>
          </div>
          <button type="submit">Confirmar</button>
        </form>
      </div>
    </section>
  );
};

export default DetailsForm;
