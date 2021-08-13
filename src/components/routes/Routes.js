import { useLayoutEffect } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../auth/Login";
import DetailsForm from "../pages/DetailsForm";
import Profile from "../pages/Profile";
import Recuperar from "../auth/Recuperar";
import Contraseña from "../auth/Contraseña";
import Support from "../pages/Support";

const Routes = ({ storeUser, loggedUser }) => {
  useLayoutEffect(() => {
    console.log(loggedUser);
  }, []);
  return (
    <>
      <Switch>
        <Route exact path="/" render={(props) => <Login storeUser={storeUser} {...props} />} />
        <Route exact path="/recuperar-contraseña" render={(props) => <Recuperar {...props} />} />
        <Route exact path="/nueva-contraseña" render={(props) => <Contraseña {...props} />} />
        <Route exact path="/detalles" render={(props) => <DetailsForm loggedUser={loggedUser} storeUser={storeUser} {...props} />} />
        <Route exact path="/perfil" render={(props) => <Profile loggedUser={loggedUser} {...props} />} />
        <Route exact path="/soporte" render={(props) => <Support loggedUser={loggedUser} {...props} />} />

        {/* {loggedUser === undefined ? (
          <Redirect to="/" />
        ) : (
          <>
            <Route exact path="/detalles" render={(props) => <DetailsForm loggedUser={loggedUser} storeUser={storeUser} {...props} />} />
            <Route exact path="/perfil" render={(props) => <Profile loggedUser={loggedUser} {...props} />} />
            <Route exact path="/soporte" render={(props) => <Support loggedUser={loggedUser} {...props} />} />
          </>
        )} */}
      </Switch>
    </>
  );
};

export default Routes;
