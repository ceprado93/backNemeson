import { useState, useLayoutEffect } from "react";
import OrderService from "../../service/order.service";
import renderNemeson from "../../assets/RenderNemeson.7.2.png";
import { Link } from "react-router-dom";
import "./Pages.css";

const Profile = ({ loggedUser }) => {
  const orderService = new OrderService();
  const [orders, setOrders] = useState([]);

  useLayoutEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    orderService
      .getOrders()
      .then((response) => {
        setOrders(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="profile__infoColumn">
        <h3>Mis datos</h3>
        <Link to="/detalles">detalles</Link>
      </div>
      <section className="profile__orders">
        <h3>Mis pedidos</h3>
        <div className="orders__column">
          {orders ? (
            orders.map((elm) => (
              <article key={elm._id} className="order__byDay">
                <p className="orders__day">07/11/2021</p>
                <div className="order__card">
                  <img src={renderNemeson} alt="productImage" />
                  <div className="order__info">
                    <p>Producto: {elm.name}</p>
                    <p>Cantidad: {elm.quantity}</p>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div>no hay pedidos</div>
          )}
        </div>
      </section>
    </>
  );
};

export default Profile;
