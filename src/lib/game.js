export const game = 
{
	version: 1,
	max_score: 5000,
	questions: [
		{
			id: 1,
			question: "On average, how many hours of sleep do you get per night?",
			options: [
				{ id: 1, option: "Less than 6", score: 0 },
				{ id: 2, option: "6-7", score: 0.5 },
				{ id: 3, option: "7-9", score: 1 },
				{ id: 4, option: "9-10", score: 0.5 },
				{ id: 5, option: "More than 10", score: 0 }
			],
			weight: 1,
			multiple: false,	// boolean to indicate if there are multiple questions in one
			type: "radio", 		// [radio, checkbox]
			format: "text",		// [plain-text, images, cards]
			required: false 		// if the question is compulsory to answer
		},
		{
			id: 2,
			question: "Which group is most representative of your daily diet?",
			options: [
				{ 
					id: 1, 
					option: "Salmon, tofu, eggs, plain yogurt, spinach, kale, Brussels sprouts, broccoli, beans, sweet potatoes, avocados, rolled oats, quinoa, almonds, walnuts, blueberries, green tea, water",
					score: 1
				},
				{
					id: 2, 
					option: "Lean beef, sushi, veggie burgers, granola/protein bars, fruit/flavored yogurt, fruit juice, whole wheat bread, blueberry or bran muffin, baked chips or pretzels, soy milk, smoothies",
					score: 0.5
				},
				{
					id: 3,
					option: "Breakfast biscuit, pancakes, coffee-based drinks, Mac and cheese, soup, ramen, deli meats, pizza, sports drinks, diet soda, peanut butter, burgers, quesadillas",
					score: 0
				},
			],
			weight: 1,
			multiple: false,
			type: "radio", 	// [radio, checkbox]
			format: "text",	// [plain-text, images, cards]
			required: false
		},
		{
			id: 3,
			question: "Aerobic exercise is physical activity that increases the heart rate and the body’s use of oxygen. How much aerobic activity do you get in the average week?",
			options: [
				{ id: 1, option: "About 30 minutes or less", score: 0 },
				{ id: 2, option: "30-89 minutes", score: 0.5 },
				{ id: 3, option: "90-150 minutes/1.5-2.5 hours per week", score: 0.7 },
				{ id: 4, option: "2.5-5 hours per week", score: 1 },
				{ id: 5, option: "Over 5 hours per week", score: 1 },
			],
			weight: 1,
			multiple: false,
			type: "radio", 	// [radio, checkbox]
			format: "text",	// [plain-text, images, cards]
			required: false
		},
		{
			id: 4,
			question: "When you spend time alone, what sorts of activities do you engage in?",
			options: [
				{
					id: 1,
					option: "Video games, social media, have a few beers/wine, cocktails, think about how mistakes I’ve made or how I can be a better person",
					score: 0
				},
				{
					id: 2,
					option: "Listening to music, talking on the phone, snacking, online shopping, sleep",
					score: 0.5
				},
				{
					id: 3,
					option: "Reading, cooking, doing something creative, meditating, exercising, spend time in nature, doing homework",
					score: 1
				}
			],
			weight: 1,
			multiple: false,
			type: "radio", 	// [radio, checkbox]
			format: "text",	// [plain-text, images, cards]
			required: false
		},
		{
			id: 5,
			title: "Compared to others, how much of the following do you think that you experience",
			questions: [{ q: "Joy, hope, love, gratitude",  sign: 1},
						{ q: "Curiosity, exploration, adventurous, creative, risk-taking", sign: 1},
						{ q: "Thoughtful, goal-focused, prepared, organized, detail-oriented", sign: 1},
						{ q: "Excited, sociable, talkative, high energy, assertive", sign: 1},
						{ q: "Being warm, benevolent, sincere, helpful, generous, trusting, empathetic", sign: 1},
						{ q: "Anxiety, sadness, anger, irritablility, guilt, moodiness", sign: -1}],
			options: [
				{ id: 1, option: "A lot more", score: 1},
				{ id: 2, option: "A little more", score: 0.5},
				{ id: 3, option: "About the same", score: 0},
				{ id: 4, option: "A little less", score: -0.5},
				{ id: 5, option: "A lot less", score: -1}
			],
			multiple: true,
			weight: 1,
			type: "radio", 	// [radio, checkbox]
			format: "text",	// [plain-text, images, cards]
			required: false
		},
		{
			id: 6,
			question: "Select the images that you most resonate with (Max 2)",
			format: "image",
			maxSelections: 2, 	// Max number of selections that a user can make //
			options: [
					{ id: 1, label: "hello", score: 1, url: "https://images.unsplash.com/photo-1688889716860-c9b94cc3db63?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTgzNQ&ixlib=rb-4.0.3&q=80&w=200"},
					{ id: 2, label: "hello", score: 1, url: "https://images.unsplash.com/photo-1689257693246-6fea2884c4be?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTg2Mw&ixlib=rb-4.0.3&q=80&w=200"},
					{ id: 3, label: "hello", score: 1, url: "https://images.unsplash.com/photo-1688890968318-8d77993d3b99?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTg3NQ&ixlib=rb-4.0.3&q=80&w=200"},
					{ id: 4, label: "hello", score: 1, url: "https://plus.unsplash.com/premium_photo-1676478746990-4ef5c8ef234a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTg4NQ&ixlib=rb-4.0.3&q=80&w=200"},
					{ id: 5, label: "hello", score: 1, url: "https://images.unsplash.com/photo-1688934728330-70f167cb366f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTg5Nw&ixlib=rb-4.0.3&q=80&w=200"},
					{ id: 6, label: "hello", score: 0, url: "https://images.unsplash.com/photo-1688283581052-7da75fe95a5c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTkwNw&ixlib=rb-4.0.3&q=80&w=200"},
					{ id: 7, label: "hello", score: 0, url: "https://images.unsplash.com/photo-1685957198326-92172d999300?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTkxNg&ixlib=rb-4.0.3&q=80&w=200"},
					{ id: 8, label: "hello", score: 0, url: "https://images.unsplash.com/photo-1690005866751-3cab315c0096?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTkyOA&ixlib=rb-4.0.3&q=80&w=200"},
					{ id: 9, label: "hello", score: 0, url: "https://images.unsplash.com/photo-1687253673883-d5f0f1f13443?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTkzNw&ixlib=rb-4.0.3&q=80&w=200"},
				],
			type: "checkbox",
			required: false,
			weight: 1,
			multiple: false
		}
	]
};
