import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { InlineButton, NormalButton } from "./Button.css";

const Button = ({ option, children, ...props }) => {
  const { to } = props;
  const Component = useMemo(() => {
    switch (option) {
      case "inline":
        return InlineButton;
      default:
        return NormalButton;
    }
  }, [option]);

  const ComponentToRender = useMemo(
    () => <Component {...props}>{children}</Component>,
    [props, children]
  );

  return to ? (
    <Link {...props}>{ComponentToRender}</Link>
  ) : (
    <>{ComponentToRender}</>
  );
};

Button.propTypes = {
  option: PropTypes.oneOf(["inline"]),
};

export default Button;
