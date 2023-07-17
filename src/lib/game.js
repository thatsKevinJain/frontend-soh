export const game = 
{
	version: 1,
	questions: [
		{
			id: 1,
			question: "On average, how many hours of sleep do you get per night?",
			options: [
				{ id: 1, option: "Less than 6" },
				{ id: 2, option: "6-7" },
				{ id: 3, option: "7-9" },
				{ id: 4, option: "9-10" },
				{ id: 5, option: "More than 10" }
			],
			type: "radio", 	// [radio, checkbox]
			format: "text",	// [plain-text, images, cards]
			required: true
		},
		{
			id: 2,
			question: "Which group is most representative of your daily diet?",
			options: [
				{ id: 1, option: "Salmon, tofu, eggs, plain yogurt, spinach, kale, Brussels sprouts, broccoli, beans, sweet potatoes, avocados, rolled oats, quinoa, almonds, walnuts, blueberries, green tea, water" },
				{ id: 2, option: "Lean beef, sushi, veggie burgers, granola/protein bars, fruit/flavored yogurt, fruit juice, whole wheat bread, blueberry or bran muffin, baked chips or pretzels, soy milk, smoothies" },
				{ id: 3, option: "Breakfast biscuit, pancakes, coffee-based drinks, Mac and cheese, soup, ramen, deli meats, pizza, sports drinks, diet soda, peanut butter, burgers, quesadillas" },
			],
			type: "radio", 	// [radio, checkbox]
			format: "text",	// [plain-text, images, cards]
			required: false
		},
		{
			id: 3,
			question: "Aerobic exercise is physical activity that increases the heart rate and the body’s use of oxygen. How much aerobic activity do you get in the average week?",
			options: [
				{ id: 1, option: "About 30 minutes or less" },
				{ id: 2, option: "30-89 minutes" },
				{ id: 3, option: "90-150 minutes/1.5-2.5 hours per week" },
				{ id: 4, option: "2.5-5 hours per week" },
				{ id: 5, option: "Over 5 hours per week" },
			],
			type: "radio", 	// [radio, checkbox]
			format: "text",	// [plain-text, images, cards]
			required: false
		},
		{
			id: 4,
			question: "When you spend time alone, what sorts of activities do you engage in?",
			options: [
				{ id: 1, option: "Video games, social media, have a few beers/wine, cocktails, think about how mistakes I’ve made or how I can be a better person" },
				{ id: 2, option: "Listening to music, talking on the phone, snacking, online shopping, sleep" },
				{ id: 3, option: "Reading, cooking, doing something creative, meditating, exercising, spend time in nature, doing homework" }
			],
			type: "radio", 	// [radio, checkbox]
			format: "text",	// [plain-text, images, cards]
			required: false
		},
		{
			id: 5,
			title: "Compared to others, how much of the following do you think that you experience",
			questions: ["Joy, hope, love, gratitude", 
						"Curiosity, exploration, adventurous, creative, risk-taking",
						"Thoughtful, goal-focused, prepared, organized, detail-oriented",
						"Excited, sociable, talkative, high energy, assertive",
						"Being warm, benevolent, sincere, helpful, generous, trusting, empathetic",
						"Anxiety, sadness, anger, irritablility, guilt, moodiness"],
			options: [
				{ id: 1, option: "A lot more" },
				{ id: 2, option: "A little more" },
				{ id: 3, option: "About the same" },
				{ id: 3, option: "A little less" },
				{ id: 3, option: "A lot less" }
			],
			type: "radio", 	// [radio, checkbox]
			format: "text",	// [plain-text, images, cards]
			required: false
		}
	]
};
