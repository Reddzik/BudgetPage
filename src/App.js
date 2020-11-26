import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

import theme from "utils/theme";
import GlobalStyles from "./index.css";

import { Navigation } from "components";
import { Wrapper } from "components";
import { LoadingIndicator } from "components";

function App() {
  const { t, i18n } = useTranslation();

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
              <button
                onClick={() => {
                  i18n.changeLanguage("pl");
                }}
              >
                PL
              </button>
              <button
                onClick={() => {
                  i18n.changeLanguage("en");
                }}
              >
                EN
              </button>
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
