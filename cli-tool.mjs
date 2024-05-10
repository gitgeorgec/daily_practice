#!/usr/bin/env node
import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dateObj = new Date();
const year = dateObj.getFullYear();
const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
const date = dateObj.getDate().toString().padStart(2, "0");
const day = dateObj.getDay();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dir = path.resolve(__dirname, `docs/${year}${month}`);

if (!existsSync(dir)) {
  mkdirSync(dir, { recursive: true });
}

const LEETCODE_API_ENDPOINT = "https://leetcode.com/graphql";
const DAILY_CODING_CHALLENGE_QUERY = `
query questionOfToday {
	activeDailyCodingChallengeQuestion {
		date
		link
		question {
			title
		}
	}
}`;
const leetcodeDailyChallenge = await fetch(LEETCODE_API_ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query: DAILY_CODING_CHALLENGE_QUERY }),
})
  .then((res) => res.json())
  .catch((e) => {
    console.log("---fetch error---");
    console.log(e);
  });
const {
  data: {
    activeDailyCodingChallengeQuestion: {
      date: currentDate,
      link,
      question: { title },
    },
  },
} = leetcodeDailyChallenge;

const template = `# ${year}${month}${date} ${weekDay[day]}

## Leetcode daily
[${title}](https://leetcode.com${link}?envType=daily-question&envId=${currentDate})

`;

try {
  writeFileSync(`${dir}/${year}${month}${date}.md`, template, {
    flag: "wx+",
  });
} catch (error) {
  console.log(error);
}
