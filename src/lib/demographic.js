export const demographic = 
{
	questions: [
		{
			id: 1,
			question: "What is your gender?",
			options: [
				{
					id: 1,
					option: "Male"
				},
				{
					id: 2,
					option: "Female"
				},
				{
					id: 3,
					option: "Not sure"
				}
			],
			type: "radio", 	// [radio, checkbox]
			format: "text",	// [plain-text, images, cards]
			required: false
		},
		{
			id: 2,
			question: "What year are you?",
			options: [
				{ id: 1, option: "Freshman" },
				{ id: 2, option: "Sophomore" },
				{ id: 3, option: "Junior" },
				{ id: 4, option: "Senior" },
				{ id: 5, option: "Graduate Student" }
			],
			type: "radio", 	// [radio, checkbox]
			format: "text",	// [plain-text, images, cards]
			required: false
		},
		{
			id: 3,
			question: "What is your nationality?",
			options: [
				{ id: 1, option: "American Indian or Alaska Native" },
				{ id: 2, option: "Asian" },
				{ id: 3, option: "Black or African American" },
				{ id: 4, option: "Native Hawaiian or Other Pacific Islander" },
				{ id: 5, option: "White" },
			],
			type: "radio", 	// [radio, checkbox]
			format: "text",	// [plain-text, images, cards]
			required: false
		},
		{
			id: 4,
			question: "Hispanic or Latino?",
			options: [
				{ id: 1, option: "Yes" },
				{ id: 2, option: "No" }
			],
			type: "radio", 	// [radio, checkbox]
			format: "text",	// [plain-text, images, cards]
			required: false
		}
	]
};
