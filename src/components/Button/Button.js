import React from "react";
import StyledButton from "./Button.styled";

const Button = props => {
	const { children, type, size, onClick } = props;

	return (
		<StyledButton type={type} size={size} onClick={onClick}>
			{children}
		</StyledButton>
	);
};

export default Button;
