import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

// import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductList/>} />
        </Routes>
        <Routes>
          <Route path="/details" element={<Details/>} />
        </Routes>
        <Routes>
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        <Routes>
          <Route element={<Default/>} />
        </Routes>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
