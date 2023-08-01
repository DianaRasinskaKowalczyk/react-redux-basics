import StyledFieldContainer from "./FieldContainer.styled";
import React from "react";

const FieldContainer = props => {
	const { children } = props;

	return <StyledFieldContainer>{children}</StyledFieldContainer>;
};

export default FieldContainer;
