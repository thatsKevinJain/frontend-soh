export const demographic = 
{
	questions: [
		{
			question: "What is your gender?",
			options: [
				{
					option: "Male"
				},
				{
					option: "Female"
				},
				{
					option: "Not sure"
				}
			],
			type: "radio", 	// [radio, checkbox]
			format: "text"	// [plain-text, images, cards]
		},
		{
			question: "What year are you?",
			options: [
				{ option: "Freshman" },
				{ option: "Sophomore" },
				{ option: "Junior" },
				{ option: "Senior" },
				{ option: "Graduate Student" }
			],
			type: "radio", 	// [radio, checkbox]
			format: "text"	// [plain-text, images, cards]
		},
		{
			question: "What is your nationality?",
			options: [
				{ option: "American Indian or Alaska Native" },
				{ option: "Asian" },
				{ option: "Black or African American" },
				{ option: "Native Hawaiian or Other Pacific Islander" },
				{ option: "White" },
			],
			type: "radio", 	// [radio, checkbox]
			format: "text"	// [plain-text, images, cards]
		},
		{
			question: "Hispanic or Latino?",
			options: [
				{ option: "Yes" },
				{ option: "No" }
			],
			type: "radio", 	// [radio, checkbox]
			format: "text"	// [plain-text, images, cards]
		}
	]
};
