import React from "react";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navigation from "./containers/Navigation";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
