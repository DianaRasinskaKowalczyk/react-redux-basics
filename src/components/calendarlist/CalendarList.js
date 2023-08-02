import React, { useEffect } from "react";
import { handleFetch } from "../../providers/CalendarProvider";
import { loadMeetingsAction } from "../../actions/calendar";
import { useDispatch, useSelector } from "react-redux";
import StyledCalendarList from "./CalendarList.styled";
import CalendarItem from "../calendarItem/CalendarItem";
import { removeFetch } from "../../providers/CalendarProvider";
import { deleteMeetingAction } from "../../actions/calendar";

const CalendarList = () => {
	const dispatch = useDispatch();
	const meetings = useSelector(state => state.meetings);

	useEffect(() => {
		loadMeetingsFromApi();
	}, []);

	const loadMeetingsFromApi = () => {
		handleFetch()
			.then(resp => {
				dispatch(loadMeetingsAction(resp));
			})
			.catch(err => {
				console.error(err);
			});
	};

	const renderMeetingsList = () => {
		return meetings.map(item => renderMeetingsItem(item));
	};

	const handleRemoveMeeting = meetingId => {
		removeFetch(meetingId)
			.then(() => {
				dispatch(deleteMeetingAction(meetingId));
			})
			.catch(err => {
				console.log(err);
			});
	};

	const renderMeetingsItem = itemData => {
		return (
			<CalendarItem
				itemData={itemData}
				removeMeeting={() => handleRemoveMeeting(itemData.id)}
			/>
		);
	};

	return (
		<StyledCalendarList>
			<ul>{renderMeetingsList()}</ul>;
		</StyledCalendarList>
	);
};

export default CalendarList;
