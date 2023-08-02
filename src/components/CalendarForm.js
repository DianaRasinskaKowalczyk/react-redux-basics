import React, { useState } from "react";
import { formFields } from "../data/formFields";
import { validateForm } from "../helpers/formValidation";
import { saveMeetingAction } from "../actions/calendar";
import { useDispatch } from "react-redux";
import { postFetch } from "../providers/CalendarProvider";
import Label from "./label/Label";
import TextInput from "./textinput/TextInput";
import FieldContainer from "./fieldContainer/FieldContainer";
import Button from "./Button/Button";
import Error from "./Error/Error";

const CalendarForm = () => {
	const initialState = {
		firstName: "",
		lastName: "",
		email: "",
		date: "",
		time: "",
		errors: [],
	};

	const [formState, setFormState] = useState(initialState);

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

	const handleSubmit = e => {
		e.preventDefault();

		const errors = validateForm(formState, formFields);
		setFormState({ ...formState, errors });
		console.log(errors);
		if (errors.length === 0) {
			sendMeetingToApi(formState);
			clearFormFields();
		}
	};

	const handleFieldChange = e => {
		const { name, value } = e.target;
		if (isFieldNameCorrect(name)) {
			setFormState({ ...formState, [name]: value });
		}
	};

	const clearFormFields = () => {
		setFormState(initialState);
	};

	const getFieldsData = () => {
		const fieldsData = Object.assign({}, formState);
		delete fieldsData["errors"];
		return fieldsData;
	};

	const isFieldNameCorrect = name => {
		const fieldsData = getFieldsData();
		return typeof fieldsData[name] !== "undefined";
	};

	const fields = formFields.map(field => {
		return (
			<>
				<FieldContainer key={field.name}>
					<Label label={field.label}>{field.label}</Label>

					<TextInput
						type={field.type}
						name={field.name}
						placeholder={field.placeholder}
						value={formState[field.name]}
						onChange={handleFieldChange}></TextInput>
				</FieldContainer>
				<Error
					errors={formState.errors.filter(err => err.name === field.name)}
				/>
			</>
		);
	});

	return (
		<form action='' onSubmit={handleSubmit}>
			{fields}
			<Button type='submit'>Zapisz</Button>
		</form>
	);
};

export default CalendarForm;
