import StyledLabel from "./Label.styled";
import React from "react";

const Label = props => {
	const { label, children } = props;

	return <StyledLabel htmlFor={label}>{children}</StyledLabel>;
};

export default Label;
