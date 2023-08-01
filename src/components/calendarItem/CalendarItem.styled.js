import styled from "styled-components";

const StyledCalendarItem = styled.li`
	width: 30rem;
	border-radius: 3rem;
	box-shadow: 0.5rem 0.5rem 1rem #c8d0e7, -0.2rem -0.2rem 1rem #ffffff;
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
	list-style: none;

	p {
		color: #c8d0e7;
	}

	a {
		text-decoration: none;
		color: #c8d0e7;
	}
`;

export default StyledCalendarItem;
