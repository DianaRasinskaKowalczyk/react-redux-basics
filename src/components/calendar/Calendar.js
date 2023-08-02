import React from "react";
import CalendarList from "../calendarList/CalendarList";
import CalendarForm from "../CalendarForm/CalendarForm";
import StyledCalendar from "./Calendar.styled";
import Header from "../Header/Header";

const Calendar = () => {
	return (
		<>
			<Header>
				<h1>YOUR MEETINGS SCHEDULE</h1>
			</Header>
			<StyledCalendar>
				<CalendarForm />
				<CalendarList />
			</StyledCalendar>
		</>
	);
};

export default Calendar;
