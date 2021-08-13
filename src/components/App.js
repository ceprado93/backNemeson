import { useState, useLayoutEffect } from "react";
import "./App.css";
import Authservice from "../service/auth.service";
import OrderService from "../service/order.service";
import Routes from "./routes/Routes";
import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";

function App(props) {
  const [loggedUser, setLoggedUser] = useState(undefined);

  const authService = new Authservice();
  const orderService = new OrderService();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    // fetchUser();
    getData();
  }, []);

  const fetchUser = () => {
    authService
      .isLoggedIn()
      .then((response) => setLoggedUser(response.data))
      .catch(() => setLoggedUser(undefined));
  };

  const getData = () => {
    orderService
      .getOrders()
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  const storeUser = (loggedUser) => {
    setLoggedUser({ loggedUser }, () => console.log("Usuario modificado:", loggedUser));
  };

  return (
    <>
      <Navigation />
      <main>
        <Routes storeUser={(user) => storeUser(user)} loggedUser={loggedUser} />
      </main>
      <Footer {...props} />
    </>
  );
}

export default App;
