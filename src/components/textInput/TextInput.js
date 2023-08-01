import React from "react";
import StyledTextInput from "./TextInput.styled";

const TextInput = props => {
	const { type, name, value, onChange, placeholder } = props;

	const handleInputChange = (name, value) => {
		onChange(name, value);
	};

	return (
		<StyledTextInput
			type={type}
			name={name}
			value={value}
			onChange={handleInputChange}
			placeholder={placeholder}
		/>
	);
};

export default TextInput;
