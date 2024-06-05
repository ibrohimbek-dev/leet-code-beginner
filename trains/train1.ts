// 2024-06-05
// TASK
// Score of a String

// ----------------------------------------------------
// Task Definition is here:
// https://leetcode.com/problems/score-of-a-string/description/?envType=daily-question&envId=2024-06-01
// ----------------------------------------------------

const sentence: string = "hello";

const scoreOfString = (text: string) => {
	let result: number = 0;
	for (let i = 0; i < text.length - 1; i++) {
		result += Math.abs(text.charCodeAt(i) - text.charCodeAt(i + 1));
	}

	return result;
};

const result = scoreOfString(sentence);
console.log("result is:", result);