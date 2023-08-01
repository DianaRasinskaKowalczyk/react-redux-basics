import React from "react";
import StyledButton from "./Button.styled";

const Button = props => {
	const { children, type } = props;

	return <StyledButton type={type}>{children}</StyledButton>;
};

export default Button;
