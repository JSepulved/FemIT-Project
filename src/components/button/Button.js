import React from "react";
import "./button.css";

const Button = ({ texto, buttonClass }) => {
	return <button className={buttonClass}>{texto}</button>;
};

export default Button;
