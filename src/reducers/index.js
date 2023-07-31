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
		default:
			return state;
	}
};
