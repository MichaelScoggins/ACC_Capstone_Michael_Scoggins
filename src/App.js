import React from "react";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navigation from "./containers/Navigation";
// import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import NavDrawer from "./containers/NavDrawer";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <NavDrawer />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
