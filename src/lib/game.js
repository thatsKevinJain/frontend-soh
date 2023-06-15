export const game = 
{
	questions: [
		{
			question: "On average, how many hours of sleep do you get per night?",
			options: [
				{ option: "Less than 6" },
				{ option: "6-7" },
				{ option: "7-9" },
				{ option: "9-10" },
				{ option: "More than 10" }
			],
			type: "radio", 	// [radio, checkbox]
			format: "text"	// [plain-text, images, cards]
		},
		{
			question: "Which group is most representative of your daily diet?",
			options: [
				{ option: "Salmon, tofu, eggs, plain yogurt, spinach, kale, Brussels sprouts, broccoli, beans, sweet potatoes, avocados, rolled oats, quinoa, almonds, walnuts, blueberries, green tea, water" },
				{ option: "Lean beef, sushi, veggie burgers, granola/protein bars, fruit/flavored yogurt, fruit juice, whole wheat bread, blueberry or bran muffin, baked chips or pretzels, soy milk, smoothies" },
				{ option: "Breakfast biscuit, pancakes, coffee-based drinks, Mac and cheese, soup, ramen, deli meats, pizza, sports drinks, diet soda, peanut butter, burgers, quesadillas" },
			],
			type: "radio", 	// [radio, checkbox]
			format: "text"	// [plain-text, images, cards]
		},
		{
			question: "Aerobic exercise is physical activity that increases the heart rate and the body’s use of oxygen. How much aerobic activity do you get in the average week?",
			options: [
				{ option: "About 30 minutes or less" },
				{ option: "30-89 minutes" },
				{ option: "90-150 minutes/1.5-2.5 hours per week" },
				{ option: "2.5-5 hours per week" },
				{ option: "Over 5 hours per week" },
			],
			type: "radio", 	// [radio, checkbox]
			format: "text"	// [plain-text, images, cards]
		},
		{
			question: "When you spend time alone, what sorts of activities do you engage in?",
			options: [
				{ option: "Video games, social media, have a few beers/wine, cocktails, think about how mistakes I’ve made or how I can be a better person" },
				{ option: "Listening to music, talking on the phone, snacking, online shopping, sleep" },
				{ option: "Reading, cooking, doing something creative, meditating, exercising, spend time in nature, doing homework" }
			],
			type: "checkbox", 	// [radio, checkbox]
			format: "text"	// [plain-text, images, cards]
		}
	]
};
