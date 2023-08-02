import styled, { css } from "styled-components";

const StyledButton = styled.button`
	width: 5rem;
	height: 2.5rem;
	${props =>
		props.size &&
		props.size === "small" &&
		css`
			width: 4rem;
			height: 2rem;
		`};
	border-radius: 1rem;
	box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
	text-align: center;
	cursor: pointer;
	transition: 0.3s ease;
	background: #6d5dfc;
	box-shadow: inset 0.2rem 0.2rem 2rem #8abdff,
		inset -0.2rem -0.2rem 2rem #5b0eeb, -0.2rem -0.2rem 0.5rem #ffffff;
	color: #e4ebf5;
	border: none;
	margin-top: ${props =>
		props.size && props.size === "small" ? "0px" : "40px"};

	&:active {
		box-shadow: inset 0.2rem 0.2rem 1rem #5b0eeb,
			inset -0.2rem -0.2rem 1rem #5b0eeb;
	}
`;

export default StyledButton;
