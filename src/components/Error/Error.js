import React from "react";
import StyledError from "./Error.styled";

const Error = props => {
	const { errors } = props;

	return (
		<StyledError>{errors ? errors.map(e => e.message) : null}</StyledError>
	);
};
export default Error;
