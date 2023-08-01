import React from "react";
import StyledCalendarItem from "./CalendarItem.styled";

const CalendarItem = props => {
	const { itemData } = props;

	return (
		<StyledCalendarItem key={itemData.id}>
			<p>
				{itemData.date} {itemData.time}
			</p>

			<a href={`mailto: ${itemData.email}`}>
				{itemData.firstName} {itemData.lastName}
			</a>
		</StyledCalendarItem>
	);
};

export default CalendarItem;
