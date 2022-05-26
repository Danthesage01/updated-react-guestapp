import React from "react";
import PropTypes from "prop-types";

// This is the component for the header --- It covers the header design and props
function Header({ text, bgColor, textColor }) {
  const styles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={styles}>
      <div className="container">{text}</div>
    </header>
  );
}

Header.defaultProps = {
  text: "Guest List App",
  bgColor: "#2C3E50",
  textColor: "#fff",
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};
export default Header;
