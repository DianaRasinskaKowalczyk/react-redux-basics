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

export const deleteMeetingAction = meetingId => {
	return {
		type: "deleteMeetingAction",
		payload: {
			meeting: meetingId,
		},
	};
};
