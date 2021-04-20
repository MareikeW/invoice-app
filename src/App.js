import React from "react";
import "./App.css";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";

import Home from "./pages/home";
import ViewInvoice from "./pages/viewInvoice";


const App = () => {
  return (
    <div className="App">
      <Router>  
        <Link to="/create-invoice">Create Invoice</Link>
        <Link to="/edit-invoice">Edit Invoice</Link>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/view-invoice">
            <ViewInvoice />
          </Route>

          <Route path="/view-invoice/:invoiceId">
            <ViewInvoice />
          </Route>
 {/*
          <Route exact path="/create-invoice">
            <CreateInvoice />
          </Route>

          <Route exact path="/edit-invoice">
            <EditInvoice />
          </Route>

          */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
