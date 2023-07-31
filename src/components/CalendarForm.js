import React, { useState } from "react";

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

	const handleSubmit = e => {
		e.preventDefault();

		const errors = validateForm();
		setFormState({
			errors,
		});

		if (errors.length === 0) {
			saveMeeting();
			clearFormFields();
		}
	};

	const validateForm = () => {
		const errors = [];

		if (!isDateCorrect()) {
			errors.push("Popraw wprowadzoną datę");
		}

		if (!isTimeCorrect()) {
			errors.push("Popraw wprowadzoną godiznę");
		}

		if (!isFirstNameCorrect()) {
			errors.push("Wprowadź imię");
		}

		if (!isLastNameCorrect()) {
			errors.push("Wprowadż nazwisko");
		}

		if (!isEmailCorrect()) {
			errors.push("Wprowadź poprawny adres email");
		}

		return errors;
	};

	const isDateCorrect = () => {
		const pattern = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

		return pattern.test(formState.date);
	};

	const isTimeCorrect = () => {
		const pattern = /^[0-9]{2}:[0-9]{2}$/;

		return pattern.test(formState.time);
	};

	const isFirstNameCorrect = () => {
		return formState.firstName.length > 0;
	};

	const isLastNameCorrect = () => {
		return formState.lastName.length > 0;
	};

	const isEmailCorrect = () => {
		const pattern = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;

		return pattern.test(formState.email);
	};

	const handleFieldChange = e => {
		if (isFieldNameCorrect(e.target.name)) {
			setFormState({
				[e.target.name]: e.target.value,
			});
		}
	};

	const saveMeeting = () => {
		const { saveMeeting } = props;

		if (typeof saveMeeting === "function") {
			saveMeeting(getFieldsData());
		}
	};

	const clearFormFields = () => {
		const fieldsData = getFieldsData();
		for (const prop in fieldsData) {
			fieldsData[prop] = "";
		}

		setFormState(fieldsData);
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

	const renderErrors = () => {
		return formState.errors.map((err, index) => <li key={index}>{err}</li>);
	};

	return (
		<form action='' onSubmit={handleSubmit}>
			<ul>{renderErrors()}</ul>
			<div>
				<label>
					Data:{" "}
					<input
						name='date'
						onChange={handleFieldChange}
						value={formState.date}
						placeholder='RRRR-MM-DD'
					/>
				</label>
			</div>
			<div>
				<label>
					Godzina:{" "}
					<input
						name='time'
						onChange={handleFieldChange}
						value={formState.time}
						placeholder='HH:MM'
					/>
				</label>
			</div>

			<div>
				<label>
					Imię:{" "}
					<input
						name='firstName'
						onChange={handleFieldChange}
						value={formState.firstName}
					/>
				</label>
			</div>
			<div>
				<label>
					Nazwisko:{" "}
					<input
						name='lastName'
						onChange={handleFieldChange}
						value={formState.lastName}
					/>
				</label>
			</div>
			<div>
				<label>
					Email:{" "}
					<input
						name='email'
						onChange={handleFieldChange}
						value={formState.email}
						placeholder='nazwa@poczty.pl'
					/>
				</label>
			</div>
			<div>
				<input type='submit' value='zapisz' />
			</div>
		</form>
	);
};

export default CalendarForm;
