import React from "react";
import burgerLogo from "../../assets/images/img3.png";
import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt="BurgerBuilder" />
  </div>
);

export default logo;
