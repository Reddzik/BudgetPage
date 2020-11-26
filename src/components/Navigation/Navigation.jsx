import React from "react";
import { useTranslation } from "react-i18next";

import PropTypes from "prop-types";

import { Container, List, NavigationWrapper } from "./Navigation.css";
import { Button } from "components";

const Navigation = ({ items = [], RightElement }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <NavigationWrapper>
        <List>
          {items.map((item) => (
            <li key={item.link}>
              <Button option="inline" to={item.link}>
                {t(item.content)}
              </Button>
            </li>
          ))}
        </List>
        {RightElement}
      </NavigationWrapper>
    </Container>
  );
};

Navigation.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  RightElement: PropTypes.elementType,
};

export default Navigation;
