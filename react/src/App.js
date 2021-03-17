// Styling
import {
  Description,
  GlobalStyle,
  ShopImage,
  ThemeButton,
  Title,
} from "./styles";
import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
// Components
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
// Data
import products from "./products";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [_products, setProducts] = useState(products);
  const [title, setTitle] = useState("");

  const selectProduct = (productSlug) => {
    const selectedProduct = products.find(
      (product) => product.slug === productSlug
    );
  };

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <GlobalStyle />
      <Link to="/"></Link>
      <Link to="/products"></Link>
      {/* It will link to homepage and products */}
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Switch>
        <Route exact path="/">
          <Home setTitle={setTitle} />
        </Route>
        {/* It's the route which will render home page */}
      </Switch>
      <Switch>
        <Route exact path="/products">
          <ProductList
            products={_products}
            selectProduct={selectProduct}
            setTitle={setTitle}
          />
        </Route>
      </Switch>
      {/* It's the route which will render products page */}
      <Switch>
        <Route exact path="/products/:productSlug">
          <ProductDetail
            selectProduct={selectProduct}
            product={_products}
            setTitle={setTitle}
          />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
