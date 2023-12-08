import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
import ProductCatagory from "./containers/ProductCatagory";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={ProductListing}></Route>
        <Route path="/product/:productId" Component={ProductDetails}></Route>
        <Route path="/catagory/:catagory_id" Component={ProductCatagory}></Route>
        <Route path="*">404 Not Found!</Route>
      </Routes>
    </Router>
  );
}

export default App;
