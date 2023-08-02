import React from "react";
import StyledCalendarItem from "./CalendarItem.styled";
import Button from "../Button/Button";

const CalendarItem = props => {
	const { itemData, removeMeeting } = props;

	const handleClick = meetingId => {
		removeMeeting(meetingId);
	};

	return (
		<StyledCalendarItem key={itemData.id}>
			<p>
				{itemData.date} {itemData.time}
			</p>

			<a href={`mailto: ${itemData.email}`}>
				{itemData.firstName} {itemData.lastName}
			</a>
			<Button
				type='click'
				size='small'
				onClick={() => handleClick(itemData.id)}>
				usuń
			</Button>
		</StyledCalendarItem>
	);
};

export default CalendarItem;
