import React from "react";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import Navigation from "./containers/navigation/Navigation";
import NavDrawer from "./containers/navigation/NavDrawer";
import FindPerfectStrain from "./containers/modals/FindPerfectStrain";
import Loading from "./containers/modals/Loading";

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
  typography: {
    fontFamily: "Acme, sans-serif",
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navigation />
          <NavDrawer />
          <FindPerfectStrain />
          <Loading />
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
