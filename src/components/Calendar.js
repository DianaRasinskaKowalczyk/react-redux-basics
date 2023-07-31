import React from 'react';
import { useDispatch } from "react-redux";
import CalendarList from "./CalendarList";
import CalendarForm from "./CalendarForm";
import { postFetch } from "../providers/CalendarProvider";
import { saveMeetingAction } from "../actions/calendar";

const Calendar = () => {
	const dispatch = useDispatch();

	const sendMeetingToApi = meetingData => {
		postFetch(meetingData)
			.then(meetingData => {
				dispatch(saveMeetingAction(meetingData));
			})
			.catch(err => {
				console.log(err);
			});
	};
	return (
		<section>
			<CalendarForm saveMeeting={sendMeetingToApi} />
			<CalendarList />
		</section>
	);
};



export default Calendar;