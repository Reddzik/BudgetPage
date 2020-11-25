import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import PropTypes from "prop-types";

import { Container, List, NavigationWrapper } from "./Navigation.css";

const Navigation = ({ items = [], RightElement }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <NavigationWrapper>
        <List>
          {items.map((item) => (
            <li key={item.link}>
              <Link to={item.link}>{t(item.content)}</Link>
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
