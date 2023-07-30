export const game = 
{
	version: 1,
	max_score: 5000,
	questions: [
		{
			id: 1,
			title: "How important is it for you to live in a neighborhood with:",
			questions: [{ id: 1, q: "Sidewalk", sign: 1 },
						{ id: 2, q: "Walking distance to grocery store, parks, house of worship", sign: 1 },
						{ id: 3, q: "Neighbors who keep to themselves", sign: -1 },
						{ id: 4, q: "Big yard", sign: 1 },
						{ id: 5, q: "Everyone has a fenced in yard", sign: -1 },
						{ id: 6, q: "Gated community", sign: 1 },
						{ id: 7, q: "Neighborhood watch", sign: 1 },
						{ id: 8, q: "Where you are comfortable with your kids playing outside", sign: 1 },
						{ id: 9, q: "Quiet surroundings", sign: 1 },
						{ id: 10, q: "Proximity to bars, airport, interstate", sign: -1 },
						{ id: 11, q: "My neighbors have similar economic status", sign: 1 },
						{ id: 12, q: "Diversity in terms of race/ethnicity, religion", sign: 1 },
						{ id: 13, q: "Community space (e.g., pool, clubhouse)", sign: 1 },
						{ id: 14, q: "Neighbors can be counted on to help each other out.", sign: 1 }],
			options: [
				{ id: 1, option: "A lot less", score: 0.25},
				{ id: 2, option: "A little less", score: 0.5},
				{ id: 3, option: "A little more", score: 0.75},
				{ id: 4, option: "A lot more", score: 1}
			],
			multiple: true,
			weight: 4,
			type: "radio", 	// [radio, checkbox]
			format: "text",	// [plain-text, images, slider]
			required: false
		},
		{
			id: 2,
			title: "It is important that my job:",
			questions: [{ id: 1, q: "Is in a location that is close to my home (short commute)", sign: 1 },
						{ id: 2, q: "Has high status ", sign: -1 },
						{ id: 3, q: "Has on-site daycare and gym", sign: -1 },
						{ id: 4, q: "Brings recognition for my accomplishments", sign: -1 },
						{ id: 5, q: "Is important and meaningful", sign: 1 },
						{ id: 6, q: "Is exciting and challenging", sign: 1 },
						{ id: 7, q: "Allows me to work flexible hours or work from home", sign: 1 },
						{ id: 8, q: "Has plenty of opportunity for promotion/advancement", sign: 1 },
						{ id: 9, q: "Provides generous vacation time", sign: 1 },
						{ id: 10, q: "Is a place where my co-workers are also my friends.", sign: 1 },
						{ id: 11, q: "Includes a boss that is approachable, a good listener, and considers what is best for me when making  decisions.", sign: 1 },
						{ id: 12, q: "Provides a very high income", sign: -1 },
						{ id: 13, q: "Allows me to have a desirable work-life balance.", sign: 1 }],
			options: [
				{ id: 1, option: "A lot less", score: 0.25},
				{ id: 2, option: "A little less", score: 0.5},
				{ id: 3, option: "A little more", score: 0.75},
				{ id: 4, option: "A lot more", score: 1}
			],
			multiple: true,
			weight: 4,
			type: "radio", 	// [radio, checkbox]
			format: "text",	// [plain-text, images]
			required: false
		},
		{
			id: 3,
			title: "Social Life: On average...",
			format: "text",	// [plain-text, images]
			questions: [{ id: 1, q: "How many hours per day do you socialize face-to-face with family members?", sign: 1 },
						{ id: 2, q: "How many hours per day do you socialize face-to-face with friends?", sign: 1 },
						{ id: 3, q: "How many close friends do you have that you socialize with regularly?", sign: 1 }],
			multiple: true,
			weight: 1,
			type: "range", 	// [radio, checkbox, slider]
			min: 1,
			max: 10,
			step: 1,
			required: false
		},
		{
			id: 4,
			title: "Consider the 10 people that you spend the most time with: ",
			format: "text",	// [plain-text, images]
			questions: [{ id: 1, q: "How many of these friends would you describe  as happy, upbeat, optimistic, or cheerful?", sign: 1 },
						{ id: 1, q: "How many of your friends would you describe  as unhappy, sad, depressed or pessimistic?", sign: -1 }],
			options: [
				{ id: 1, option: "A lot less", score: 0.25},
				{ id: 2, option: "A little less", score: 0.5},
				{ id: 3, option: "A little more", score: 0.75},
				{ id: 4, option: "A lot more", score: 1}
			],
			multiple: true,
			weight: 4,
			type: "range", 	// [radio, checkbox, slider]
			min: 1,
			max: 4,
			step: 1,
			required: false
		},
	]
};



// {
// 	id: 1,
// 	question: "On average, how many hours of sleep do you get per night?",
// 	options: [
// 		{ id: 1, option: "Less than 6", score: 0 },
// 		{ id: 2, option: "6-7", score: 0.5 },
// 		{ id: 3, option: "7-9", score: 1 },
// 		{ id: 4, option: "9-10", score: 0.5 },
// 		{ id: 5, option: "More than 10", score: 0 }
// 	],
// 	weight: 1,
// 	multiple: false,	// boolean to indicate if there are multiple questions in one
// 	type: "radio", 		// [radio, checkbox]
// 	format: "text",		// [plain-text, images, cards]
// 	required: false 		// if the question is compulsory to answer
// },
// {
// 	id: 5,
// 	title: "Compared to others, how much of the following do you think that you experience",
// 	questions: [{ q: "Joy, hope, love, gratitude",  sign: 1},
// 				{ q: "Curiosity, exploration, adventurous, creative, risk-taking", sign: 1},
// 				{ q: "Thoughtful, goal-focused, prepared, organized, detail-oriented", sign: 1},
// 				{ q: "Excited, sociable, talkative, high energy, assertive", sign: 1},
// 				{ q: "Being warm, benevolent, sincere, helpful, generous, trusting, empathetic", sign: 1},
// 				{ q: "Anxiety, sadness, anger, irritablility, guilt, moodiness", sign: -1}],
// 	options: [
// 		{ id: 1, option: "A lot more", score: 1},
// 		{ id: 2, option: "A little more", score: 0.5},
// 		{ id: 3, option: "About the same", score: 0},
// 		{ id: 4, option: "A little less", score: -0.5},
// 		{ id: 5, option: "A lot less", score: -1}
// 	],
// 	multiple: true,
// 	weight: 1,
// 	type: "radio", 	// [radio, checkbox]
// 	format: "text",	// [plain-text, images, cards]
// 	required: false
// },
// {
// 	id: 2,
// 	question: "Select the images that you most resonate with (Select 2 images)",
// 	format: "image",
// 	maxSelections: 2, 	// Max number of selections that a user can make //
// 	options: [
// 			{ id: 1, label: "hello", score: 1, url: "https://images.unsplash.com/photo-1688889716860-c9b94cc3db63?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTgzNQ&ixlib=rb-4.0.3&q=80&w=200"},
// 			{ id: 2, label: "hello", score: 1, url: "https://images.unsplash.com/photo-1689257693246-6fea2884c4be?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTg2Mw&ixlib=rb-4.0.3&q=80&w=200"},
// 			{ id: 3, label: "hello", score: 1, url: "https://images.unsplash.com/photo-1688890968318-8d77993d3b99?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTg3NQ&ixlib=rb-4.0.3&q=80&w=200"},
// 			{ id: 4, label: "hello", score: 1, url: "https://plus.unsplash.com/premium_photo-1676478746990-4ef5c8ef234a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTg4NQ&ixlib=rb-4.0.3&q=80&w=200"},
// 			{ id: 5, label: "hello", score: 1, url: "https://images.unsplash.com/photo-1688934728330-70f167cb366f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTg5Nw&ixlib=rb-4.0.3&q=80&w=200"},
// 			{ id: 6, label: "hello", score: 0, url: "https://images.unsplash.com/photo-1688283581052-7da75fe95a5c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTkwNw&ixlib=rb-4.0.3&q=80&w=200"},
// 			{ id: 7, label: "hello", score: 0, url: "https://images.unsplash.com/photo-1685957198326-92172d999300?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTkxNg&ixlib=rb-4.0.3&q=80&w=200"},
// 			{ id: 8, label: "hello", score: 0, url: "https://images.unsplash.com/photo-1690005866751-3cab315c0096?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTkyOA&ixlib=rb-4.0.3&q=80&w=200"},
// 			{ id: 9, label: "hello", score: 0, url: "https://images.unsplash.com/photo-1687253673883-d5f0f1f13443?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTkzNw&ixlib=rb-4.0.3&q=80&w=200"},
// 		],
// 	type: "checkbox",
// 	required: true,
// 	weight: 1,
// 	multiple: false
// }