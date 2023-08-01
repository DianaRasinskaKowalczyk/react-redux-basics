export const validateForm = (data, fields) => {
	const errors = [];

	fields.forEach(field => {
		const { name, required, pattern, errMsg } = field;
		const value = data[name];

		if (required) {
			if (value.length < 2 && !pattern) {
				errors.push({
					name: name,
					message: errMsg,
				});
			}
		}

		if (pattern) {
			const reg = new RegExp(pattern);
			if (!reg.test(value)) {
				errors.push({
					name: name,
					message: errMsg,
				});
			}
		}
	});

	return errors;
};
