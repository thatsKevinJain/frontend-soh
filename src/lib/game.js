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
			multiple: false,
			type: "radio", 	// [radio, checkbox]
			format: "text",	// [plain-text, images, cards]
			required: true
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
		}
	]
};
