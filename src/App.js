import React from "react";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import Navigation from "./containers/Navigation";
import { orange } from "@material-ui/core/colors";
// import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import NavDrawer from "./containers/NavDrawer";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#408F00",
    },
    secondary: {
      main: orange[400],
    },

    type: "dark",
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navigation />
          <NavDrawer />
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
