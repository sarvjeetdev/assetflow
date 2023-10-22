import React from "react";
import logo from "./Logo.png"
import classes from "./Logo.module.css"

export default  function Logo(){

    return (
        <img className={classes.Logo} src={logo} alt="Logo" />
    )
}