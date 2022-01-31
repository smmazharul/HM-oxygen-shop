import React from 'react'

import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import NotFount from './components/NotFound/NotFount';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipping from './components/Shipping/Shipping';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
          <Shop></Shop>
          </Route>
          <Route path="/shop">
          <Shop></Shop>
          </Route>
          <Route path="/order">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <PrivateRoute path="/shipping">
            <Shipping></Shipping>
          </PrivateRoute>
          <PrivateRoute path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFount></NotFount>
          </Route>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
    
      
    </div>
  );
}

export default App;
