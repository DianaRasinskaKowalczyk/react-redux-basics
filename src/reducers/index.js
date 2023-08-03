const initialState = {
	meetings: [],
};

export const reducers = (state = initialState, action) => {
	switch (action.type) {
		case "loadMeetingsAction":
			const { meetings } = action.payload;
			return {
				meetings: meetings,
			};

		case "saveMeetingAction":
			const { meeting } = action.payload;
			return {
				meetings: [...state.meetings, meeting],
			};
		case "deleteMeetingAction":
			const { meetingId } = action.payload;
			return {
				meetings: state.meetings.filter(meeting => {
					return meeting.id !== meetingId;
				}),
			};

		default:
			return state;
	}
};
