// aws-mock-quiz.js
const readline = require("readline");

const questions = [
  {
    question: "Which AWS service is used for object storage?",
    options: ["A) EC2", "B) S3", "C) RDS", "D) Lambda"],
    answer: "B"
  },
  {
    question: "Which AWS service is serverless?",
    options: ["A) EC2", "B) Lambda", "C) S3", "D) CloudFront"],
    answer: "B"
  },
  {
    question: "Which AWS service is best for relational databases?",
    options: ["A) DynamoDB", "B) RDS", "C) Aurora", "D) Redshift"],
    answer: "B"
  }
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let score = 0;
let index = 0;

function askQuestion() {
  if (index < questions.length) {
    const q = questions[index];
    console.log(`\nQ${index + 1}: ${q.question}`);
    q.options.forEach(opt => console.log(opt));

    rl.question("Your answer: ", (input) => {
      if (input.trim().toUpperCase() === q.answer) {
        console.log("✅ Correct!");
        score++;
      } else {
        console.log(`❌ Wrong! Correct answer is ${q.answer}`);
      }
      index++;
      askQuestion();
    });
  } else {
    console.log(`\nQuiz complete! Your score: ${score}/${questions.length}`);
    rl.close();
  }
}

console.log("=== AWS Certified Cloud Practitioner Mock Exam ===");
askQuestion();
