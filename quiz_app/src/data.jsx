const data = [
    {
        id: 1,
        question: "1. Where was the BRICS summit held in 2014?",
        answers: [
            {
                text: "a. Brazil",
                correct: true,
            },
            {
                text: "b. India",
                correct: false,
            },
            {
                text: "c. Russia",
                correct: false,
            },
            {
                text: "d. China",
                correct: false,
            },
        ],
    },
    {
        id: 2,
        question: "2. Which of these spices is the smallest in size?",
        answers: [
            {
                text: "a. Ajwain",
                correct: true,
            },
            {
                text: "b. Jeera",
                correct: false,
            },
            {
                text: "c. Saunf",
                correct: false,
            },
            {
                text: "d. Methi Seeds",
                correct: false,
            },
        ],
    },
    {
        id: 3,
        question:
            "3. Which battle in 1757 marked the beginning of British occupation in India?",
        answers: [
            {
                text: "a. Plassey",
                correct: true,
            },
            {
                text: "b. Assaye",
                correct: false,
            },
            {
                text: "c. Buxar",
                correct: false,
            },
            {
                text: "d. Cuddalore",
                correct: false,
            },
        ],
    },
    {
        id: 4,
        question: "4. Which is the second most spoken language of Nepal?",
        answers: [
            {
                text: "a. Bajjika",
                correct: false,
            },
            {
                text: "b. Nepali",
                correct: false,
            },
            {
                text: "c. Maithili",
                correct: true,
            },
            {
                text: "d. Bhojpuri",
                correct: false,
            },
        ],
    },
    {
        id: 5,
        question: "5. In which of these two sports is the term ‘free hit’ used?",
        answers: [
            {
                text: "a. Football, Squash",
                correct: false,
            },
            {
                text: "b. Badminton, Tennis",
                correct: false,
            },
            {
                text: "c. Badminton, Cricket",
                correct: true,
            },
            {
                text: "d. Hockey, Cricket",
                correct: false,
            },
        ],
    },
];

const prizeMoney = [
    { id: 1, amount: "₹ 5000" },
    { id: 2, amount: "₹ 15000" },
    { id: 3, amount: "₹ 30000" },
    { id: 4, amount: "₹ 60000" },
    { id: 5, amount: "₹ 100000" },
    { id: 6, amount: "₹ 150000" },
    { id: 7, amount: "₹ 250000" },
    { id: 8, amount: "₹ 400000" },
    { id: 9, amount: "₹ 600000" },
    { id: 10, amount: "₹ 1000000" },
    { id: 11, amount: "₹ 5000000" },
    { id: 12, amount: "₹ 100000000" },
    { id: 13, amount: "₹ 300000000" },
    { id: 14, amount: "₹ 500000000" },
    { id: 15, amount: "₹ 1000000000" },
].reverse();

export { prizeMoney, data };
