import styled from "styled-components";

const StyledHeader = styled.header`
	margin-top: 2rem;
	margin-bottom: 2rem;
	display: flex;
	justify-content: center;

	h1 {
		font-size: 2.7rem;
		color: #c8d0e7;
		font-family: "Poppins", sans-serif;
		font-weight: lighter;
		box-shadow: 0.3rem 0.3rem 0.6rem rgb(91 14 235 / 42%),
			-0.2rem -0.2rem 0.5rem #ffffff;
		border: none;
		border-radius: 1rem;
		padding: 10px;
	}
`;

export default StyledHeader;
