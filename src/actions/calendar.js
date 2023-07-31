export const loadMeetingsAction = meetings => {
	return {
		type: "loadMeetingsAction",
		payload: {
			meetings: meetings,
		},
	};
};

export const saveMeetingAction = newMeeting => {
	return {
		type: "saveMeetingAction",
		payload: {
			meeting: newMeeting,
		},
	};
};
