import React from "react";
import StyledButton from "./Button.styled";

const Button = props => {
	const { children, type, size } = props;

	return (
		<StyledButton type={type} size={size}>
			{children}
		</StyledButton>
	);
};

export default Button;
