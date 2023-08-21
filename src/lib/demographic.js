export const demographic = 
{
	questions: [
		{
			id: 1,
			question: "What is your gender?",
			options: [
				{ id: 1, option: "Female/Woman" },
				{ id: 2, option: "Male/Man" },
				{ id: 3, option: "Genderqueer or Genderfluid" },
				{ id: 4, option: "Nonbinary" },
				{ id: 5, option: "Questioning or unsure" },
				{ id: 6, option: "Prefer not to answer" },
				{ id: 7, option: "Other" }],
			type: "radio", 	// [radio, checkbox]
			format: "text",	// [plain-text, images, cards]
			required: true
		},
		{
			id: 2,
			question: "With which racial or ethnic group(s) do you primarily identify? You may check more than one.",
			options: [
				{ id: 1, option: "White, non-Hispanic" },
				{ id: 2, option: "Hispanic or Latino" },
				{ id: 3, option: "Black or African American" },
				{ id: 4, option: "American Indian or Alaskan Native" },
				{ id: 5, option: "Asian" },
				{ id: 6, option: "Native Hawaiian or other Pacific Islander" }],
			type: "checkbox", 	// [radio, checkbox]
			format: "text",	// [plain-text, images, cards]
			required: false
		},
		{
			id: 3,
			question: "What is your current relationship status?",
			options: [
				{ id: 1, option: "Single/Not dating" },
				{ id: 2, option: "Casually dating" },
				{ id: 3, option: "Committed relationship "},
				{ id: 4, option: "Married" },
				{ id: 5, option: "Divorced/Widowed" }],
			type: "radio", 	// [radio, checkbox]
			format: "text",	// [plain-text, images, cards]
			required: true
		},
		{
			id: 4,
			question: "My religious preference is:",
			options: [
				{ id: 1, option: "Christian" },
				{ id: 2, option: "Muslim" },
				{ id: 3, option: "Jewish" },
				{ id: 4, option: "Hindu" },
				{ id: 5, option: "Buddhist" },
				{ id: 6, option: "Other" },
				{ id: 7, option: "None" },
			],
			type: "radio", 	// [radio, checkbox]
			format: "text",	// [plain-text, images, cards]
			required: true
		},
		{
			id: 5,
			question: "How often do you attend religious services?",
			options: [
				{ id: 1, option: "Never" },
				{ id: 2, option: "A few times per year" },
				{ id: 3, option: "About once per month" },
				{ id: 4, option: "Weekly" },
				{ id: 5, option: "More than once per week" },
			],
			type: "radio", 	// [radio, checkbox]
			format: "text",	// [plain-text, images, cards]
			required: true
		},
		{
			id: 6,
			question: "The influence of my religious beliefs on my daily life is:",
			options: [
				{ id: 1, option: "None" },
				{ id: 2, option: "Something I occasionally consider when making decisions" },
				{ id: 3, option: "My religious beliefs guide nearly every decision I make" },
			],
			type: "radio", 	// [radio, checkbox]
			format: "text",	// [plain-text, images, cards]
			required: true
		},
		{
			id: 7,
			question: "Which of the following best describes your family structure while growing up?",
			options: [
				{ id: 1, option: "I was raised in a household with a single parent or caregiver" },
				{ id: 2, option: "I was raised in a household with a married mother/father, mother/mother, father/father, or other married caregivers." },
				{ id: 3, option: "I was raised by two parents or caregivers but they did not live together." },
				{ id: 4, option: "I was raised by a parent or caregiver and a step-parent." },
				{ id: 5, option: "None of the above" }
			],
			type: "radio", 	// [radio, checkbox]
			format: "text",	// [plain-text, images, cards]
			required: true
		},
		{
			id: 8,
			question: "What is the total household income per year for your family of origin? (the family you lived with when growing up)",
			options: [
				{ id: 1, option: "Less than $30,000" },
				{ id: 2, option: "$30,000 - $49,999" },
				{ id: 3, option: "$50,000 -  $69,999" },
				{ id: 4, option: "$70,000 – $89,999" },
				{ id: 5, option: "$90,000 – 109,999" },
				{ id: 6, option: "$110,000 - 129,999" },
				{ id: 7, option: "$130,000 - 149,999" },
				{ id: 8, option: "$150,000 – 169,999" },
				{ id: 9, option: "$170,000 – 189,999" },
				{ id: 10, option: "$190,000 - $200,000" },
				{ id: 11, option: "over $200,000" },
			],
			type: "radio", 	// [radio, checkbox]
			format: "text",	// [plain-text, images, cards]
			required: true
		},
	]
};


// {
// 	id: 1,
// 	question: "What is your gender?",
// 	options: [{ id: 1, option: "Female/Woman" },
// 				{ id: 2, option: "Male/Man" },
// 				{ id: 3, option: "Genderqueer or Genderfluid" },
// 				{ id: 4, option: "Nonbinary" },
// 				{ id: 5, option: "Questioning or unsure" },
// 				{ id: 6, option: "Prefer not to answer" },
// 				{ id: 7, option: "Other" }],
// 	type: "radio", 	// [radio, checkbox]
// 	format: "text",	// [plain-text, images, cards]
// 	required: true
// },
