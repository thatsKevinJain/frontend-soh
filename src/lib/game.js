export const game = 
{
	version: 1,
	max_score: 4000,			// score that users can get
	standardization_factor: 4,  // factor which we will use to standardize all scores
	feedback: [
		{ id: 1, value: 0.5, text: "Your answers indicate that you feel happy sometimes, but not very often. You could consider seeking support for the hard times or someone to talk to about any difficulties you may be experiencing. More generally, you could select a few evidence-based ways to boost your mood and see if they impact your overall feeling of wellbeing. For example, try to pursue meaning as well as pleasure, focus on gratitude (maybe even keeping a gratitude journal), show kindness to others, find purposeful work, find things that make you laugh, spend time with pets, maintain relationships with family and friends (especially the happy, optimistic ones), share experiences with loved ones vs. focusing on accruing material goods, spend time in nature, keep an optimistic outlook, set aside time for daily mindfulness and the pursuit of activities or hobbies that you enjoy, limit screen time, and engage in self-care such eating a healthy diet, making sure that you fit in time for daily exercise or movement, and getting plenty of high quality sleep." },
		{ id: 2, value: 1.0, text: "Your answers indicate that you feel happy sometimes, but not very often. You could consider seeking support for the hard times or someone to talk to about any difficulties you may be experiencing. More generally, you could select a few evidence-based ways to boost your mood and see if they impact your overall feeling of wellbeing. For example, try to pursue meaning as well as pleasure, focus on gratitude (maybe even keeping a gratitude journal), show kindness to others, find purposeful work, find things that make you laugh, spend time with pets, maintain relationships with family and friends (especially the happy, optimistic ones), share experiences with loved ones vs. focusing on accruing material goods, spend time in nature, keep an optimistic outlook, set aside time for daily mindfulness and the pursuit of activities or hobbies that you enjoy, limit screen time, and engage in self-care such eating a healthy diet, making sure that you fit in time for daily exercise or movement, and getting plenty of high quality sleep." },
		{ id: 3, value: 1.5, text: "Although you are doing some of the things that researchers tell us are related to happiness, you have plenty of room for improvement! Research shows that you could significantly improve your wellbeing by making even a few small changes. Consider how you might do more of the following: pursue meaning as well as pleasure, focus on gratitude (maybe even keeping a gratitude journal), show kindness to others, find purposeful work, laugh more often, spend time with pets, maintain relationships with family and friends (especially the happy, optimistic ones), share experiences with loved ones instead of focusing on accruing material goods, spend time in nature, keep an optimistic outlook, set aside time for daily mindfulness, pursuing activities or hobbies that you enjoy, limit screen time, and engage in self-care such eating a healthy diet, making sure that you fit in time for daily exercise or movement, and getting plenty of high quality sleep." },
		{ id: 4, value: 2.0, text: "While you are doing some of the things that researchers tell us are related to happiness, you could be a lot happier! Research shows that we can become happier by making some changes such as: pursue meaning as well as pleasure, focus on gratitude (maybe even keeping a gratitude journal), show kindness to others, find purposeful work, laugh often, spend time with pets, maintain relationships with family and friends (especially the happy, optimistic ones), share experiences with loved ones instead of focusing on accruing material goods, spend time in nature, keep an optimistic outlook, set aside time for daily mindfulness, pursuing activities or hobbies that you enjoy, limit screen time, and engage in self-care such eating a healthy diet, making sure that you fit in time for daily exercise or movement, and getting plenty of high quality sleep." },
		{ id: 5, value: 2.5, text: "While you are doing some of the things that researchers tell us are related to happiness, you could be a lot happier! Research shows that we can become happier by making some changes such as: pursue meaning as well as pleasure, focus on gratitude (maybe even keeping a gratitude journal), show kindness to others, find purposeful work, laugh often, spend time with pets, maintain relationships with family and friends (especially the happy, optimistic ones), share experiences with loved ones instead of focusing on accruing material goods, spend time in nature, keep an optimistic outlook, set aside time for daily mindfulness, pursuing activities or hobbies that you enjoy, limit screen time, and engage in self-care such eating a healthy diet, making sure that you fit in time for daily exercise or movement, and getting plenty of high quality sleep." },
		{ id: 1, value: 3.0, text: "You are engaging in some activities and displaying attitudes that are strongly related to happiness and wellbeing but could significantly improve your wellbeing by making a few changes. Consider how you might do more of the following: pursue meaning as well as pleasure, focus on gratitude (maybe even keeping a gratitude journal), show kindness to others, find purposeful work, laugh often, spend time with pets, maintain relationships with family and friends (especially the happy, optimistic ones), share experiences with loved ones instead of focusing on accruing material goods, spend time in nature, keep an optimistic outlook, set aside time for daily mindfulness, pursuing activities or hobbies that you enjoy, limit screen time, and engage in self-care such eating a healthy diet, making sure that you fit in time for daily exercise or movement, and getting plenty of high quality sleep." },
		{ id: 1, value: 3.5, text: "You are engaging in many activities and displaying many attitudes that are strongly related to happiness and wellbeing! You can maintain or even improve this by pursuing meaning as well as pleasure, focusing on gratitude (maybe even keeping a gratitude journal), showing kindness to others, finding purposeful work, laugh often, spend time with pets, maintaining relationships with family and friends (especially the happy, optimistic ones), sharing experiences with loved ones instead of focusing on accruing material goods, spending time in nature, keeping an optimistic outlook, setting aside time for daily mindfulness, pursuing activities or hobbies that you enjoy, limiting screen time, and engaging in self-care such eating a healthy diet, making sure that you fit in time for daily exercise or movement, and getting plenty of high quality sleep." },
		{ id: 1, value: 4.0, text: "You are making the most out of life and making choices that lead to high levels of satisfaction and joy. You can maintain this by pursuing meaning as well as pleasure, focusing on gratitude (maybe even keeping a gratitude journal), showing kindness to others, finding purposeful work, laugh often, spend time with pets, maintaining relationships with family and friends (especially the happy, optimistic ones), sharing experiences with loved ones instead of focusing on accruing material goods, spending time in nature, keeping an optimistic outlook, setting aside time for daily mindfulness, pursuing activities or hobbies that you enjoy, limiting screen time, and engaging in self-care such eating a healthy diet, making sure that you fit in time for daily exercise or movement, and getting plenty of high quality sleep. Remember that happiness is an emotion, not a constant state of being. It is natural to fluctuate in and out of feeling happy throughout a lifetime." },
	],
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
			images: ["https://images.unsplash.com/photo-1524813686514-a57563d77965?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1576208861541-335784ba66c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552360906-8cb62bb70825?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1635680022770-b58c69dd5e4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1459535653751-d571815e906b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1475746812396-2b046c18be0e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1587186972578-59c73ae8f68d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1613017614476-d320d3392a16?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1611588781379-ce2ded3ad165?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552579854-efc1a047ec23?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1621649609003-1a6178f7833a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200"],
			weight: 1,
			multiple: false,	// boolean to indicate if there are multiple questions in one
			type: "radio", 		// [radio, checkbox]
			format: "text",		// [plain-text, images, cards]
			required: true 	    // if the question is compulsory to answer
		},
		{
			id: 2,
			question: "Which group is most representative of your daily diet?",
			options: [
				{ id: 1, score: 0, option: "Salmon, tofu, eggs, plain yogurt, spinach, kale, Brussels sprouts, broccoli, beans, sweet potatoes, avocados, rolled oats, quinoa, almonds, walnuts, blueberries, green tea, water" },
				{ id: 2, score: 0, option: "Lean beef, sushi, veggie burgers, granola/protein bars, fruit/flavored yogurt, fruit juice, whole wheat bread, blueberry or bran muffin, baked chips or pretzels, soy milk, smoothies" },
				{ id: 3, score: 0, option: "Breakfast biscuit, pancakes, sweetened coffee-based drinks, mac and cheese, soup, ramen, deli meats, pizza, sports drinks, diet soda, peanut butter, burgers, quesadillas, pasta" },
			],
			images: ["https://images.unsplash.com/photo-1524813686514-a57563d77965?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1576208861541-335784ba66c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552360906-8cb62bb70825?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1635680022770-b58c69dd5e4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1459535653751-d571815e906b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1475746812396-2b046c18be0e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1587186972578-59c73ae8f68d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1613017614476-d320d3392a16?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1611588781379-ce2ded3ad165?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552579854-efc1a047ec23?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1621649609003-1a6178f7833a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200"],
			weight: 1,
			multiple: false,
			type: "radio",
			format: "text",
			required: true
		},
		{
			id: 3,
			question: "Aerobic exercise is physical activity that increases the heart rate and the body’s use of oxygen. How much aerobic activity do you get in the average week?",
			options: [
				{ id: 1, score: 0, option: "About 30 minutes or less" },
				{ id: 2, score: 0, option: "30-89 minutes" },
				{ id: 3, score: 0, option: "90-150 minutes/1.5-2.5 hours per week" },
				{ id: 4, score: 0, option: "2.5-5 hours per week" },
				{ id: 5, score: 0, option: "Over 5 hours per week" },
			],
			images: ["https://images.unsplash.com/photo-1524813686514-a57563d77965?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1576208861541-335784ba66c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552360906-8cb62bb70825?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1635680022770-b58c69dd5e4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1459535653751-d571815e906b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1475746812396-2b046c18be0e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1587186972578-59c73ae8f68d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1613017614476-d320d3392a16?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1611588781379-ce2ded3ad165?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552579854-efc1a047ec23?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1621649609003-1a6178f7833a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200"],
			weight: 1,
			multiple: false,
			type: "radio",
			format: "text",
			required: true
		},
		{
			id: 4,
			question: "How much time per week do you spend in non-aerobic exercise or movement such as walking, yoga, Pilates, weight lifting (or other strength training)?",
			options: [
				{ id: 1, score: 0, option: "About 30 minutes or less" },
				{ id: 2, score: 0, option: "30-89 minutes" },
				{ id: 3, score: 0, option: "90-150 minutes/1.5-2.5 hours per week" },
				{ id: 4, score: 0, option: "2.5-5 hours per week" },
				{ id: 5, score: 0, option: "Over 5 hours per week" },
			],
			images: ["https://images.unsplash.com/photo-1524813686514-a57563d77965?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1576208861541-335784ba66c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552360906-8cb62bb70825?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1635680022770-b58c69dd5e4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1459535653751-d571815e906b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1475746812396-2b046c18be0e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1587186972578-59c73ae8f68d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1613017614476-d320d3392a16?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1611588781379-ce2ded3ad165?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552579854-efc1a047ec23?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1621649609003-1a6178f7833a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200"],
			weight: 1,
			multiple: false,
			type: "radio",
			format: "text",
			required: true
		},
		{
			id: 5,
			title: "How important is it for you to live in a neighborhood with:",
			questions: [{ id: 1, q: "Sidewalk", sign: 1 },
						{ id: 2, q: "Neighbors who keep to themselves", sign: -1 },
						{ id: 3, q: "Gated community", sign: 1 },
						{ id: 4, q: "Quiet surroundings", sign: 1 },
						{ id: 5, q: "Community space (e.g., pool, clubhouse)", sign: 1 },
						{ id: 6, q: "Neighbors can be counted on to help each other out", sign: 1 }],
			options: [
				{ id: 1, option: "Very unimportant", score: 0.25},
				{ id: 2, option: "Somewhat unimportant", score: 0.5},
				{ id: 3, option: "Somewhat important", score: 0.75},
				{ id: 4, option: "Very important", score: 1}
			],
			images: ["https://images.unsplash.com/photo-1524813686514-a57563d77965?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1576208861541-335784ba66c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552360906-8cb62bb70825?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1635680022770-b58c69dd5e4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1459535653751-d571815e906b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1475746812396-2b046c18be0e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1587186972578-59c73ae8f68d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1613017614476-d320d3392a16?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1611588781379-ce2ded3ad165?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552579854-efc1a047ec23?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1621649609003-1a6178f7833a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200"],
			weight: 1,
			multiple: true,
			type: "radio",
			format: "text",
			required: true,
		},
		{
			id: 6,
			title: "It is important that my job:",
			questions: [{ id: 1, q: "Is in a location that is close to my home (short commute)", sign: 1 },
						{ id: 2, q: "Has high status ", sign: -1 },
						{ id: 3, q: "Involves work that is important and meaningful", sign: 1 },
						{ id: 4, q: "Allows me to work from home", sign: 1 },
						{ id: 5, q: "Is a place where my co-workers are also my friends", sign: 1 },
						{ id: 6, q: "Provides a very high income", sign: -1 }],
			options: [
				{ id: 1, option: "Very unimportant", score: 0.25},
				{ id: 2, option: "Somewhat unimportant", score: 0.5},
				{ id: 3, option: "Somewhat important", score: 0.75},
				{ id: 4, option: "Very important", score: 1}
			],
			images: ["https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1543269866-487350d6fa5e?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200"],
			multiple: true,
			weight: 1,
			type: "radio",
			format: "text",
			required: true,
		},
		{
			id: 7,
			title: "How many times per week do you interact with the following groups via phone, text, video call, gaming chat?",
			format: "text",
			questions: [{ id: 1, q: "Best friends", sign: 1 },
						{ id: 2, q: "Casual friends", sign: 1 },
						{ id: 3, q: "Parents", sign: 1 },
						{ id: 4, q: "Siblings", sign: 1 },
						{ id: 5, q: "Other family members", sign: 1 }],
			images: ["https://images.unsplash.com/photo-1524813686514-a57563d77965?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1576208861541-335784ba66c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552360906-8cb62bb70825?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1635680022770-b58c69dd5e4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1459535653751-d571815e906b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1475746812396-2b046c18be0e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1587186972578-59c73ae8f68d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1613017614476-d320d3392a16?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1611588781379-ce2ded3ad165?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552579854-efc1a047ec23?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1621649609003-1a6178f7833a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200"],
			multiple: true,
			weight: 1,
			type: "range",
			min: 0,
			max: 10,
			step: 1,
			required: true,
		},
		{
			id: 8,
			title: "On average...",
			format: "text",
			questions: [{ id: 1, q: "How many hours per week do you socialize face-to-face with family members?", sign: 1 },
						{ id: 2, q: "How many hours per week do you socialize face-to-face with friends?", sign: 1 },
						{ id: 3, q: "How many close friends do you have that you socialize with regularly?", sign: 1 }],
			images: ["https://images.unsplash.com/photo-1524813686514-a57563d77965?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1576208861541-335784ba66c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552360906-8cb62bb70825?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1635680022770-b58c69dd5e4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1459535653751-d571815e906b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1475746812396-2b046c18be0e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1587186972578-59c73ae8f68d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1613017614476-d320d3392a16?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1611588781379-ce2ded3ad165?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552579854-efc1a047ec23?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1621649609003-1a6178f7833a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200"],
			multiple: true,
			weight: 1,
			type: "range",
			min: 0,
			max: 10,
			step: 1,
			required: true,
		},
		{
			id: 9,
			title: "Consider the friends that you spend the most time with...",
			format: "text",
			questions: [
				{ id: 1, sign: 1, q: "How many of these friends would you describe as happy, upbeat, optimistic, or cheerful?" },
				{ id: 2, sign: 1, q: "How many of your friends would you describe as unhappy, sad, depressed or pessimistic?" },
				{ id: 3, sign: 1, q: "How many of your close friends do you have deep and meaningful conversations with?" },
				{ id: 4, sign: 1, q: "How many of your close friends do you share a sense of humor with or spend a lot of time laughing with?" },
			],
			images: ["https://images.unsplash.com/photo-1524813686514-a57563d77965?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1576208861541-335784ba66c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552360906-8cb62bb70825?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1635680022770-b58c69dd5e4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1459535653751-d571815e906b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1475746812396-2b046c18be0e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1587186972578-59c73ae8f68d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1613017614476-d320d3392a16?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1611588781379-ce2ded3ad165?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552579854-efc1a047ec23?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1621649609003-1a6178f7833a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200"],
			multiple: true,
			weight: 1,
			type: "range",
			min: 0,
			max: 10,
			step: 1,
			required: true,
		},
		{
			id: 10,
			question: "Take a moment to consider each image and select 10 images that closely depict things that you most associate with happiness",
			format: "image",
			maxSelections: 10, 	// Exact number of selections that a user has to make //
			options: [
				{ id: 1, label: "", score: 1, url: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=300" },
				{ id: 2, label: "", score: 1, url: "https://images.unsplash.com/photo-1581578017306-7334b15283df?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=300" },
				{ id: 3, label: "", score: 1, url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=300" },
				{ id: 4, label: "", score: 1, url: "https://images.unsplash.com/photo-1577896850561-dc005e5b5689?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=300" },
				{ id: 5, label: "", score: 1, url: "https://images.unsplash.com/photo-1553729784-e91953dec042?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=300" },
				{ id: 6, label: "", score: 1, url: "https://images.unsplash.com/photo-1576737064520-f45d313d17ff?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=300" },
				{ id: 7, label: "", score: 1, url: "https://images.unsplash.com/photo-1568454537842-d933259bb258?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=300" },
				{ id: 8, label: "", score: 1, url: "https://images.unsplash.com/photo-1538599462720-b466e1ce73d3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=300" },
				{ id: 9, label: "", score: 1, url: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=300" },
				{ id: 10, label: "", score: 1, url: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=300" },
				{ id: 11, label: "", score: 1, url: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=300" },
				{ id: 12, label: "", score: 1, url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=300" },
				{ id: 13, label: "", score: 1, url: "https://images.unsplash.com/photo-1504194569341-48a2e831a3a7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=300" },
				{ id: 15, label: "", score: 0, url: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=300" },
				{ id: 16, label: "", score: 0, url: "https://images.unsplash.com/photo-1628585352636-f4a24c2e17d5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=300" },
				{ id: 17, label: "", score: 0, url: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=300" },
				{ id: 18, label: "", score: 0, url: "https://images.unsplash.com/photo-1622549037543-49cf1ca0babc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=300" },
				{ id: 19, label: "", score: 0, url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=300" },
				{ id: 20, label: "", score: 0, url: "https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=300" },
				{ id: 21, label: "", score: 0, url: "https://images.unsplash.com/photo-1514820720301-4c4790309f46?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=300" },
				{ id: 22, label: "", score: 0, url: "https://images.unsplash.com/photo-1460306855393-0410f61241c7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=300" },
				{ id: 23, label: "", score: 0, url: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=300" },
				{ id: 24, label: "", score: 0, url: "https://i.ibb.co/fSZJwLR/xxx-logo.jpg" },
				{ id: 25, label: "", score: 0, url: "https://i.ibb.co/xhTvpXz/partying-1.jpg" },
			],
			type: "checkbox",
			required: true,
			weight: 1,
			multiple: false
		},
		{
			id: 11,
			title: "How strongly do you agree with the following statements?",
			questions: [
				{ id: 1, sign: 1, q: "I have a strong sense of purpose in my life." },
				{ id: 2, sign: 1, q: "I have a hobby that I can spend many happy hours engaging in." },
				{ id: 3, sign: 1, q: "I am a good listener." },
				{ id: 4, sign: 1, q: "I regularly engage in some form of volunteerism or service to others/my community." },
				{ id: 5, sign: 1, q: "I regularly engage in some form of mindfulness or reflection such as meditation." },
				{ id: 6, sign: 1, q: "I am an active member of a faith-based community (e.g., you regularly attend services or gatherings of this group)." },
				{ id: 7, sign: -1, q: "Going shopping or shopping online is one of my favorite activities that brings me happiness." },
				{ id: 8, sign: 1, q: "I spend time in nature most days." },
			],
			options: [
				{ id: 1, option: "Strongly disagree", score: 0.25},
				{ id: 2, option: "Disagree", score: 0.5},
				{ id: 3, option: "Agree", score: 0.75},
				{ id: 4, option: "Strongly agree", score: 1}
			],
			images: ["https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1543269866-487350d6fa5e?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200"],
			multiple: true,
			min: 1,
			max: 4,
			step: 1,
			weight: 1,
			type: "range",
			format: "text",
			required: true,
		},
		{
			id: 12,
			question: "Which of the following best describes your approach to relationships with others?",
			options: [
				{ id: 1, score: 0, option: "I generally trust others and find it relatively easy to get close to people. I am comfortable depending on others and having them depend on me. I rarely worry about my friends leaving me out of group plans or talking negatively about me. I rarely worry about my romantic partner leaving me." },
				{ id: 2, score: 0, option: "I find it somewhat difficult to trust others and I don’t like them to try and get too close to me.  I don’t like for people to grow to depend on me and I am uncomfortable with the idea of  depending on them.  Others often want to become more intimate than I am comfortable being. I don’t like for friends or potential romantic partners to pry into my inner thoughts and feelings." },
				{ id: 3, score: 0, option: "I sometimes trust others but I often worry that they will leave me. Others are usually reluctant to get as close as I would like. I often fear that my friend group doesn’t really want to include me in plans or that they talk negatively about me behind my back. I worry a lot that my romantic partner doesn’t love me or will leave me." },
			],
			images: ["https://images.unsplash.com/photo-1524813686514-a57563d77965?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1576208861541-335784ba66c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552360906-8cb62bb70825?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1635680022770-b58c69dd5e4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1459535653751-d571815e906b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1475746812396-2b046c18be0e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1587186972578-59c73ae8f68d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1613017614476-d320d3392a16?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1611588781379-ce2ded3ad165?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552579854-efc1a047ec23?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1621649609003-1a6178f7833a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200"],
			weight: 0,
			multiple: false,
			type: "radio",
			format: "text",
			required: true
		},
		{
			id: 13,
			title: "During the past month, how often have you felt:",
			questions: [
				{ id: 1, sign: 1, q: "Depressed?" },
				{ id: 2, sign: 1, q: "Discouraged or hopeless?" },
				{ id: 3, sign: 1, q: "Worthless or like a failure?" },
				{ id: 4, sign: 1, q: "Withdrawn from people?" },
				{ id: 5, sign: 1, q: "Nothing was very enjoyable?" },
				{ id: 6, sign: 1, q: "Happy or like you were having a lot of fun?" },
				{ id: 7, sign: 1, q: "Like you had a lot to look forward to?" },
				{ id: 8, sign: 1, q: "Tense or high strung?" },
				{ id: 9, sign: 1, q: "Uneasy or on edge?" },
				{ id: 10, sign: 1, q: "Left out or isolated from others?" },
				{ id: 11, sign: 1, q: "That there are people you can talk to or depend on?" },
			],
			options: [
				{ id: 1, option: "Never", score: 0},
				{ id: 2, option: "Rarely", score: 0},
				{ id: 3, option: "Sometimes", score: 0},
				{ id: 4, option: "Always", score: 0}
			],
			images: ["https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1543269866-487350d6fa5e?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200"],
			multiple: true,
			min: 1,
			max: 4,
			step: 1,
			weight: 0,
			type: "range",
			format: "text",
			required: true,
		},
		{
			id: 14,
			title: "Indicate how much you agree or disagree with the following statements:",
			questions: [
				{ id: 1, sign: -1, q: "The demands of everyday life often get me down" },
				{ id: 2, sign: -1, q: "I often feel overwhelmed by my responsibilities" },
				{ id: 3, sign: 1, q: "I have a positive attitude towards myself" },
				{ id: 4, sign: 1, q: "It makes me happy to make others feel good with my words or actions" },
				{ id: 5, sign: 1, q: "I feel like I have the tools to handle stressful situations" },
				{ id: 6, sign: 1, q: "I have a good sense of what it is I’m trying to accomplish in life" },
				{ id: 7, sign: 1, q: "I have a lot to be grateful for in my life" },
				{ id: 8, sign: 1, q: "My happiness does not depend on material goods that I acquire" },
				{ id: 9, sign: 1, q: "I would rather spend money on experiences than on things" },
				{ id: 10, sign: 1, q: "Having fun is a guiding principle in my life" },
				{ id: 11, sign: 1, q: "Being of service to others is important to me" },
				{ id: 12, sign: 1, q: "I would rather have a small gift today than a large gift next week" },
				{ id: 13, sign: 1, q: "I try to avoid activities that are difficult or not pleasurable " },
				{ id: 14, sign: 1, q: "Seeking pleasure is one of the most important things in life" },
				{ id: 15, sign: 1, q: "Partying with friends is a big part of how I experience happiness" },
				{ id: 16, sign: 1, q: "I feel very fulfilled when I am putting my talents to use even if I have to exert a lot of effort" },
				{ id: 17, sign: 1, q: "I am willing to sacrifice some of my own personal benefits if it means that others don’t have to suffer" },
				{ id: 18, sign: 1, q: "Ultimately, my welfare and happiness is my top priority and other people are responsible for their own welfare and happiness" },
			],
			options: [
				{ id: 1, option: "Strongly Disagree", score: 0},
				{ id: 2, option: "Somewhat Disagree", score: 0},
				{ id: 3, option: "Somewhat Agree", score: 0},
				{ id: 4, option: "Strongly Agree", score: 0}
			],
			images: ["https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1543269866-487350d6fa5e?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200"],
			multiple: true,
			min: 1,
			max: 4,
			step: 1,
			weight: 0,
			type: "range",
			format: "text",
			required: true,
		},
	]
};
		// {
		// 	id: 7,
		// 	question: "Are you in an exclusive or committed romantic relationship?",
		// 	options: [
		// 		{ id: 1, option: "Yes", score: 1 },
		// 		{ id: 2, option: "No", score: 0 }],
		// 	images: ["https://images.unsplash.com/photo-1524813686514-a57563d77965?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1576208861541-335784ba66c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552360906-8cb62bb70825?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1635680022770-b58c69dd5e4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1459535653751-d571815e906b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1475746812396-2b046c18be0e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1587186972578-59c73ae8f68d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1613017614476-d320d3392a16?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1611588781379-ce2ded3ad165?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552579854-efc1a047ec23?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1621649609003-1a6178f7833a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200"],
		// 	weight: 1,
		// 	multiple: false,
		// 	type: "radio",
		// 	format: "text",
		// 	required: false,
		// },

		// {
		// 	id: 11,
		// 	title: "When it comes to casual dating are you more attracted to:",
		// 	questions: [{ q: "Physical appearance",  sign: -1},
		// 				{ q: "Personal qualities (e.g., values, interests and goals)", sign: 1}],
		// 	options: [
		// 		{ id: 1, option: "A lot less", score: 0.25},
		// 		{ id: 2, option: "A little less", score: 0.5},
		// 		{ id: 3, option: "A little more", score: 0.75},
		// 		{ id: 4, option: "A lot more", score: 1}
		// 	],
		// 	images: ["https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1543269866-487350d6fa5e?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200"],
		// 	multiple: true,
		// 	min: 1,
		// 	max: 4,
		// 	step: 1,
		// 	weight: 1,
		// 	type: "range",
		// 	format: "text",
		// 	required: false,
		// },
		// {
		// 	id: 12,
		// 	title: "How satisfied are you in this relationship?",
		// 	questions: [{ q: "Physical appearance",  sign: -1},
		// 				{ q: "Personal qualities (e.g., values, interests and goals)", sign: 1}],
		// 	options: [
		// 		{ id: 1, option: "Very Dissatisfied", score: 0.25},
		// 		{ id: 2, option: "Somewhat Dissatisfied", score: 0.5},
		// 		{ id: 3, option: "Somewhat Satisfied", score: 0.75},
		// 		{ id: 4, option: "Extremely Satisfied", score: 1}
		// 	],
		// 	images: ["https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1543269866-487350d6fa5e?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200"],
		// 	multiple: true,
		// 	weight: 1,
		// 	type: "range",
		// 	min: 1,
		// 	max: 4,
		// 	step: 1,
		// 	format: "text",
		// 	required: false
		// },
		// {
		// 	id: 13,
		// 	title: "When it comes to long-term romantic partner are you more attracted to:",
		// 	questions: [{ q: "Physical appearance",  sign: -1},
		// 				{ q: "Personal qualities (e.g., values, interests and goals)", sign: 1}],
		// 	options: [
		// 		{ id: 1, option: "A lot less", score: 0.25},
		// 		{ id: 2, option: "A little less", score: 0.5},
		// 		{ id: 3, option: "A little more", score: 0.75},
		// 		{ id: 4, option: "A lot more", score: 1}
		// 	],
		// 	images: ["https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1543269866-487350d6fa5e?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200"],
		// 	multiple: true,
		// 	min: 1,
		// 	max: 4,
		// 	step: 1,
		// 	weight: 1,
		// 	type: "range",
		// 	format: "text",
		// 	required: false
		// },
		// {
		// 	id: 14,
		// 	question: "How important is it that your partner shares a background or demographic characteristics (e.g., age, race/ethnicity, religion) similar to your own?",
		// 	options: [
		// 		{ id: 1, option: "Completely unimportant", score: 0.25},
		// 		{ id: 2, option: "Fairly unimportant", score: 0.5},
		// 		{ id: 3, option: "Little important", score: 0.75},
		// 		{ id: 4, option: "Very important", score: 1}
		// 	],
		// 	images: ["https://images.unsplash.com/photo-1524813686514-a57563d77965?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1576208861541-335784ba66c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552360906-8cb62bb70825?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1635680022770-b58c69dd5e4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1459535653751-d571815e906b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1475746812396-2b046c18be0e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1587186972578-59c73ae8f68d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1613017614476-d320d3392a16?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1611588781379-ce2ded3ad165?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552579854-efc1a047ec23?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1621649609003-1a6178f7833a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200"],
		// 	weight: 1,
		// 	multiple: false,
		// 	type: "radio",
		// 	format: "text",
		// 	required: false
		// },
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// {
// 			id: 1,
// 			question: "On average, how many hours of sleep do you get per night?",
// 			options: [
// 				{ id: 1, option: "Less than 6", score: 0 },
// 				{ id: 2, option: "6-7", score: 0.5 },
// 				{ id: 3, option: "7-9", score: 1 },
// 				{ id: 4, option: "9-10", score: 0.5 },
// 				{ id: 5, option: "More than 10", score: 0 }
// 			],
// 			suggestions: {
// 				1 : "The sun sets over mountains.",
// 				2 : "Laughter echoes through the park.",
// 				3 : "Raindrops dance on windowpanes.",
// 				4 : "Flowers bloom in springtime meadows."
// 			},
// 			images: ["https://images.unsplash.com/photo-1524813686514-a57563d77965?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1576208861541-335784ba66c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552360906-8cb62bb70825?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1635680022770-b58c69dd5e4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1459535653751-d571815e906b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1475746812396-2b046c18be0e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1587186972578-59c73ae8f68d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1613017614476-d320d3392a16?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1611588781379-ce2ded3ad165?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552579854-efc1a047ec23?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1621649609003-1a6178f7833a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200"],
// 			weight: 1,
// 			multiple: false,	// boolean to indicate if there are multiple questions in one
// 			type: "radio", 		// [radio, checkbox]
// 			format: "text",		// [plain-text, images, cards]
// 			required: false 	// if the question is compulsory to answer
// 		},
// 		{
// 			id: 2,
// 			category: "emotions",
// 			title: "Compared to others, how much of the following do you think that you experience",
// 			questions: [{ q: "Joy, hope, love, gratitude",  sign: 1},
// 						{ q: "Curiosity, exploration, adventurous, creative, risk-taking", sign: 1},
// 						{ q: "Thoughtful, goal-focused, prepared, organized, detail-oriented", sign: 1},
// 						{ q: "Excited, sociable, talkative, high energy, assertive", sign: 1},
// 						{ q: "Being warm, benevolent, sincere, helpful, generous, trusting, empathetic", sign: 1},
// 						{ q: "Anxiety, sadness, anger, irritablility, guilt, moodiness", sign: -1}],
// 			options: [
// 				{ id: 1, option: "A lot less", score: 0.25},
// 				{ id: 2, option: "A little less", score: 0.5},
// 				{ id: 3, option: "A little more", score: 0.75},
// 				{ id: 4, option: "A lot more", score: 1}
// 			],
// 			images: ["https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1543269866-487350d6fa5e?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200"],
// 			suggestions: {
// 				1 : "Ocean waves crash against rocks.",
// 				2 : "Children play in colorful playgrounds.",
// 				3 : "Autumn leaves create a mosaic.",
// 				4 : "A cozy fire warms hearts."
// 			},
// 			multiple: true,
// 			weight: 1,
// 			type: "radio", 	// [radio, checkbox]
// 			format: "text",	// [plain-text, images, cards]
// 			required: false
// 		},
// 		{
// 			id: 3,
// 			question: "Select the images that you most resonate with (Select 2 images)",
// 			format: "image",
// 			maxSelections: 2, 	// Max number of selections that a user can make //
// 			options: [
// 					{ id: 1, label: "hello", score: 1, url: "https://images.unsplash.com/photo-1688889716860-c9b94cc3db63?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTgzNQ&ixlib=rb-4.0.3&q=80&w=200"},
// 					{ id: 2, label: "hello", score: 1, url: "https://images.unsplash.com/photo-1689257693246-6fea2884c4be?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTg2Mw&ixlib=rb-4.0.3&q=80&w=200"},
// 					{ id: 3, label: "hello", score: 1, url: "https://images.unsplash.com/photo-1688890968318-8d77993d3b99?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTg3NQ&ixlib=rb-4.0.3&q=80&w=200"},
// 					{ id: 4, label: "hello", score: 1, url: "https://plus.unsplash.com/premium_photo-1676478746990-4ef5c8ef234a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTg4NQ&ixlib=rb-4.0.3&q=80&w=200"},
// 					{ id: 5, label: "hello", score: 1, url: "https://images.unsplash.com/photo-1688934728330-70f167cb366f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTg5Nw&ixlib=rb-4.0.3&q=80&w=200"},
// 					{ id: 6, label: "hello", score: 0, url: "https://images.unsplash.com/photo-1688283581052-7da75fe95a5c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTkwNw&ixlib=rb-4.0.3&q=80&w=200"},
// 					{ id: 7, label: "hello", score: 0, url: "https://images.unsplash.com/photo-1685957198326-92172d999300?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTkxNg&ixlib=rb-4.0.3&q=80&w=200"},
// 					{ id: 8, label: "hello", score: 0, url: "https://images.unsplash.com/photo-1690005866751-3cab315c0096?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTkyOA&ixlib=rb-4.0.3&q=80&w=200"},
// 					{ id: 9, label: "hello", score: 0, url: "https://images.unsplash.com/photo-1687253673883-d5f0f1f13443?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTkzNw&ixlib=rb-4.0.3&q=80&w=200"},
// 				],
// 			suggestions: {
// 				1 : "Snowflakes blanket the frozen ground.",
// 				2 : "Birds chirp in the morning.",
// 				3 : "Stars twinkle in the night.",
// 				4 : "Books transport us to imagination."
// 			},
// 			type: "checkbox",
// 			required: true,
// 			weight: 1,
// 			multiple: false
// 		},
// 		{
// 			id: 4,
// 			category: "neighborhood",
// 			title: "How important is it for you to live in a neighborhood with:",
// 			questions: [{ id: 1, q: "Sidewalk", sign: 1 },
// 						{ id: 2, q: "Walking distance to grocery store, parks, house of worship", sign: 1 },
// 						{ id: 3, q: "Neighbors who keep to themselves", sign: -1 },
// 						{ id: 4, q: "Big yard", sign: 1 },
// 						{ id: 5, q: "Everyone has a fenced in yard", sign: -1 },
// 						{ id: 6, q: "Gated community", sign: 1 },
// 						{ id: 7, q: "Neighborhood watch", sign: 1 },
// 						{ id: 8, q: "Where you are comfortable with your kids playing outside", sign: 1 },
// 						{ id: 9, q: "Quiet surroundings", sign: 1 },
// 						{ id: 10, q: "Proximity to bars, airport, interstate", sign: -1 },
// 						{ id: 11, q: "My neighbors have similar economic status", sign: 1 },
// 						{ id: 12, q: "Diversity in terms of race/ethnicity, religion", sign: 1 },
// 						{ id: 13, q: "Community space (e.g., pool, clubhouse)", sign: 1 },
// 						{ id: 14, q: "Neighbors can be counted on to help each other out.", sign: 1 }],
// 			options: [
// 				{ id: 1, option: "A lot less", score: 0.25},
// 				{ id: 2, option: "A little less", score: 0.5},
// 				{ id: 3, option: "A little more", score: 0.75},
// 				{ id: 4, option: "A lot more", score: 1}
// 			],
// 			suggestions: {
// 				1 : "Soccer players score stunning goals.",
// 				2 : "Artists paint with vibrant hues.",
// 				3 : "Thunder rumbles through dark skies.",
// 				4 : "Families gather for holiday feasts."
// 			},
// 			images: ["https://images.unsplash.com/photo-1524813686514-a57563d77965?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1576208861541-335784ba66c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552360906-8cb62bb70825?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1635680022770-b58c69dd5e4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1459535653751-d571815e906b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1475746812396-2b046c18be0e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1587186972578-59c73ae8f68d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1613017614476-d320d3392a16?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1611588781379-ce2ded3ad165?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552579854-efc1a047ec23?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1621649609003-1a6178f7833a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200"],
// 			multiple: true,
// 			weight: 1,
// 			type: "radio", 	// [radio, checkbox]
// 			format: "text",	// [plain-text, images, slider]
// 			required: false
// 		},
// 		{
// 			id: 5,
// 			category: "job",
// 			title: "It is important that my job:",
// 			questions: [{ id: 1, q: "Is in a location that is close to my home (short commute)", sign: 1 },
// 						{ id: 2, q: "Has high status ", sign: -1 },
// 						{ id: 3, q: "Has on-site daycare and gym", sign: -1 },
// 						{ id: 4, q: "Brings recognition for my accomplishments", sign: -1 },
// 						{ id: 5, q: "Is important and meaningful", sign: 1 },
// 						{ id: 6, q: "Is exciting and challenging", sign: 1 },
// 						{ id: 7, q: "Allows me to work flexible hours or work from home", sign: 1 },
// 						{ id: 8, q: "Has plenty of opportunity for promotion/advancement", sign: 1 },
// 						{ id: 9, q: "Provides generous vacation time", sign: 1 },
// 						{ id: 10, q: "Is a place where my co-workers are also my friends.", sign: 1 },
// 						{ id: 11, q: "Includes a boss that is approachable, a good listener, and considers what is best for me when making decisions.", sign: 1 },
// 						{ id: 12, q: "Provides a very high income", sign: -1 },
// 						{ id: 13, q: "Allows me to have a desirable work-life balance.", sign: 1 }],
// 			options: [
// 				{ id: 1, option: "A lot less", score: 0.25},
// 				{ id: 2, option: "A little less", score: 0.5},
// 				{ id: 3, option: "A little more", score: 0.75},
// 				{ id: 4, option: "A lot more", score: 1}
// 			],
// 			suggestions: {
// 				1 : "Butterflies flutter in lush gardens.",
// 				2 : "Music soothes the troubled soul.",
// 				3 : "Time flies, memories remain.",
// 				4 : "Dreams inspire us to achieve."
// 			},
// 			images: ["https://images.unsplash.com/photo-1524813686514-a57563d77965?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1576208861541-335784ba66c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552360906-8cb62bb70825?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1635680022770-b58c69dd5e4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1459535653751-d571815e906b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1475746812396-2b046c18be0e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1587186972578-59c73ae8f68d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1613017614476-d320d3392a16?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1611588781379-ce2ded3ad165?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552579854-efc1a047ec23?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1621649609003-1a6178f7833a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200"],
// 			multiple: true,
// 			weight: 1,
// 			type: "radio", 	// [radio, checkbox]
// 			format: "text",	// [plain-text, images]
// 			required: false
// 		},
// 		{
// 			id: 6,
// 			category: "relationship",
// 			title: "Social Life: On average...",
// 			format: "text",	// [plain-text, images]
// 			questions: [{ id: 1, q: "How many hours per day do you socialize face-to-face with family members?", sign: 1 },
// 						{ id: 2, q: "How many hours per day do you socialize face-to-face with friends?", sign: 1 },
// 						{ id: 3, q: "How many close friends do you have that you socialize with regularly?", sign: 1 }],
// 			suggestions: {
// 				1 : "Waves gently caress sandy shores.",
// 				2 : "Birds build nests in trees.",
// 				3 : "Candles flicker in dim rooms.",
// 				4 : "Coffee warms hands on mornings."
// 			},
// 			images: ["https://images.unsplash.com/photo-1524813686514-a57563d77965?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1576208861541-335784ba66c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552360906-8cb62bb70825?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1635680022770-b58c69dd5e4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1459535653751-d571815e906b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1475746812396-2b046c18be0e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1587186972578-59c73ae8f68d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1613017614476-d320d3392a16?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1611588781379-ce2ded3ad165?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552579854-efc1a047ec23?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1621649609003-1a6178f7833a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200"],
// 			multiple: true,
// 			weight: 1,
// 			type: "range", 	// [radio, checkbox, slider]
// 			min: 1,
// 			max: 10,
// 			step: 1,
// 			required: false
// 		},
// 		{
// 			id: 7,
// 			category: "friends",
// 			title: "Consider the 10 people that you spend the most time with: ",
// 			format: "text",	// [plain-text, images]
// 			questions: [{ id: 1, q: "How many of these friends would you describe  as happy, upbeat, optimistic, or cheerful?", sign: 1 },
// 						{ id: 1, q: "How many of your friends would you describe  as unhappy, sad, depressed or pessimistic?", sign: -1 }],
// 			options: [
// 				{ id: 1, option: "A lot less", score: 0.25},
// 				{ id: 2, option: "A little less", score: 0.5},
// 				{ id: 3, option: "A little more", score: 0.75},
// 				{ id: 4, option: "A lot more", score: 1}
// 			],
// 			suggestions: {
// 				1 : "Moonlight illuminates a silent night.",
// 				2 : "Rainbows grace the storm's end.",
// 				3 : "Honeybees buzz around blooming flowers.",
// 				4 : "Butter melts on warm toast."
// 			},
// 			images: ["https://images.unsplash.com/photo-1524813686514-a57563d77965?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1576208861541-335784ba66c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552360906-8cb62bb70825?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1635680022770-b58c69dd5e4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1459535653751-d571815e906b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1475746812396-2b046c18be0e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1587186972578-59c73ae8f68d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1613017614476-d320d3392a16?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1611588781379-ce2ded3ad165?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1552579854-efc1a047ec23?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200","https://images.unsplash.com/photo-1621649609003-1a6178f7833a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-4.0.3&q=80&w=200"],
// 			multiple: true,
// 			weight: 1,
// 			type: "range", 	// [radio, checkbox, slider]
// 			min: 1,
// 			max: 4,
// 			step: 1,
// 			required: false
// 		}