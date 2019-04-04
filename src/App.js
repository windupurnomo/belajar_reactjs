import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./pages/navigation";
import ToDo from "./pages/ToDo";
import Fruit from "./pages/fruit";
import City from "./pages/city";
import Pegawai from "./pages/Pegawai";

export default props => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <div className="container">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/todo" component={ToDo} />
            <Route path="/fruit" component={Fruit} />
            <Route path="/city" component={City} />
            <Route path="/pegawai" component={Pegawai} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
