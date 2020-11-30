import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { connect } from "react-redux";
import theme from "utils/theme";
import GlobalStyles from "./index.css";

import { Navigation, LoadingIndicator, Wrapper, Button } from "components";

function App() {
  const { i18n } = useTranslation();

  return (
    <>
      <GlobalStyles />
      <Router>
        <Navigation
          items={[
            { content: "HomePage", link: "/" },
            { content: "BudgetPage", link: "/budget" },
          ]}
          RightElement={
            <div>
              <Button
                option="regular"
                onClick={() => {
                  i18n.changeLanguage("pl");
                }}
              >
                PL
              </Button>
              <Button
                option="regular"
                onClick={() => {
                  i18n.changeLanguage("en");
                }}
              >
                EN
              </Button>
            </div>
          }
        />
        <Wrapper>
          <Switch>
            <Route path="/budget">BudgetPage</Route>
            <Route path="/">HomePage</Route>
          </Switch>
        </Wrapper>
      </Router>
    </>
  );
}

function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<LoadingIndicator />}>
        <App />
      </Suspense>
    </ThemeProvider>
  );
}

export default RootApp;
