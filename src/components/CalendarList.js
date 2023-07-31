import React, { useEffect } from "react";
import { handleFetch } from "../providers/CalendarProvider";
import { loadMeetingsAction } from "../actions/calendar";
import { useDispatch, useSelector } from "react-redux";

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

	const renderMeetingsItem = itemData => {
		return (
			<li key={itemData.id}>
				{itemData.date} {itemData.time} =
				<a href={`mailto: ${itemData.email}`}>
					{itemData.firstName} {itemData.lastName}
				</a>
			</li>
		);
	};

	return <ul>{renderMeetingsList()}</ul>;
};

export default CalendarList;
