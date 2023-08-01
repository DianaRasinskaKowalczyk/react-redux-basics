import React from "react";
import StyledHeader from "./Header.styled";

const Header = props => {
	const { children } = props;

	return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
