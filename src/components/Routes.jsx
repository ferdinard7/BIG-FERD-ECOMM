import React from "react";
import { Switch, Route } from "react-router-dom";
import Pay from "./Payment"
import Success from "../pages/Success";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Product from "../pages/Product";
import Cart from "../pages/Cart"
import Login from "../pages/Login"
import Register from "../pages/Register"
import  { Redirect }  from "react-router-dom";
import { useSelector } from "react-redux";
function Routes() {

  const user = useSelector((state) => state.user.currentUser);

    return (
     <Switch>
     <Route path="/" exact>
       <Home />
     </Route> 
     <Route path="/products/:category">
       <ProductList />
     </Route>
     <Route path="/product/:id">
       <Product />
     </Route>
     <Route path="/cart">
      {user ? <Cart /> : <Redirect to="login" />}
        </Route>
        <Route path="/login">
         { user ? <Redirect to="/"/> : <Login />}
        </Route>
        <Route path="/register">
          { user ? <Redirect to="/"/> : <Register />}
          </Route>
        <Route path="/pay">
         <Pay />
        </Route>
        <Route path="/success" exact>
      <Success />
        </Route>
     </Switch>
    )
}


export default Routes;