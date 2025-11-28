const QUESTIONS = [];

// 20 real questions
const BASE_QUESTIONS = [
    {
        ques: "What does HTML stand for?",
        options: [
            "Hyper Trainer Marking Language",
            "Hyper Text Markup Language",
            "High Text Making Language",
            "Hyper Text Markdown Language"
        ],
        answer: 1
    },
    {
        ques: "Which property controls text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        answer: 2
    },
    {
        ques: "JavaScript was developed by:",
        options: ["Google", "Netscape", "Microsoft", "Sun"],
        answer: 1
    },
    {
        ques: "2 + '2' in JS results in:",
        options: ["4", "22", "Error", "undefined"],
        answer: 1
    },
    {
        ques: "React is a:",
        options: ["Programming Language", "Framework", "Library", "Database"],
        answer: 2
    },
    {
        ques: "Node.js runs on:",
        options: ["SpiderMonkey", "Nashorn", "V8", "Java Engine"],
        answer: 2
    },
    {
        ques: "Which is NoSQL DB?",
        options: ["MySQL", "Oracle", "PostgreSQL", "MongoDB"],
        answer: 3
    },
    {
        ques: "Binary Search complexity:",
        options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
        answer: 1
    },
    {
        ques: "FIFO follows:",
        options: ["Stack", "Queue", "Graph", "Tree"],
        answer: 1
    },
    {
        ques: "SSH is used for:",
        options: ["File Transfer", "Secure Login", "Web Hosting", "Encryption"],
        answer: 1
    },
    {
        ques: "SQL stands for:",
        options: [
            "Stylish Query Language",
            "Structured Query Language",
            "Super Quick Logic",
            "Sequential Query Logic"
        ],
        answer: 1
    },
    {
        ques: "Which OS is mobile-based?",
        options: ["Windows", "Android", "Ubuntu", "Fedora"],
        answer: 1
    },
    {
        ques: "Which is a frontend framework?",
        options: ["Laravel", "Django", "React", "Flask"],
        answer: 2
    },
    {
        ques: "Which protocol is secure?",
        options: ["HTTP", "FTP", "SSH", "SMTP"],
        answer: 2
    }
];

// Add BASE questions with IDs
let id = 1;

BASE_QUESTIONS.forEach(q => {
    QUESTIONS.push({
        id: id++,
        ques: q.ques,
        options: q.options,
        answer: q.answer
    });
});

// AUTO-GENERATE dummy questions (100 more)
// while (QUESTIONS.length < 120) {
//     QUESTIONS.push({
//         id: id,
//         ques: `Dummy Question ${id}: Select the correct option.`,
//         options: [
//             `Option A for Q${id}`,
//             `Option B for Q${id}`,
//             `Option C for Q${id}`,
//             `Option D for Q${id}`
//         ],
//         answer: Math.floor(Math.random() * 4)
//     });
//     id++;
// }

// Confirm final count
console.log("Loaded", QUESTIONS.length, "questions");
