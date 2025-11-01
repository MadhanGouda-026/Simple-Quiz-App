// --- 1. All Questions (3 sets of 15) ---
const allQuestions = {
    // 15 Easy Questions
    easy: [
        { q: "What does HTML stand for?", a: { a: "Hyper Text Markup Language", b: "Home Tool Markup Language", c: "Hyperlinks and Text" }, c: "a" },
        { q: "What is 2 + 2?", a: { a: "3", b: "4", c: "5" }, c: "b" },
        { q: "What does CSS stand for?", a: { a: "Cascading Style Sheets", b: "Computer Style Sheets", c: "Creative Style Sheets" }, c: "a" },
        { q: "Find the next number: 2, 4, 6, 8, ...?", a: { a: "9", b: "10", c: "12" }, c: "b" },
        { q: "Which keyword is used to declare a variable in JavaScript?", a: { a: "var", b: "let", c: "Both a and b" }, c: "c" },
        { q: "What tag is used to create a link in HTML?", a: { a: "<a>", b: "<link>", c: "<href>" }, c: "a" },
        { q: "How do you write a comment in CSS?", a: { a: "// comment", b: "", c: "/* comment */" }, c: "c" },
        { q: "What is 10 - 3?", a: { a: "7", b: "8", c: "6" }, c: "a" },
        { q: "Which company developed JavaScript?", a: { a: "Microsoft", b: "Netscape", c: "Google" }, c: "b" },
        { q: "What is the capital of India?", a: { a: "Mumbai", b: "New Delhi", c: "Kolkata" }, c: "b" },
        { q: "What property changes text color in CSS?", a: { a: "text-color", b: "font-color", c: "color" }, c: "c" },
        { q: "What is 5 * 3?", a: { a: "15", b: "10", c: "20" }, c: "a" },
        { q: "How do you select an element with id 'demo' in CSS?", a: { a: ".demo", b: "#demo", c: "demo" }, c: "b" },
        { q: "What is the 'C' in 'CPU'?", a: { a: "Central", b: "Computer", c: "Control" }, c: "a" },
        { q: "How do you call a function named 'myFunction'?", a: { a: "call myFunction()", b: "myFunction[]", c: "myFunction()" }, c: "c" }
    ],
    // 15 Intermediate Questions
    intermediate: [
        { q: "What is the difference between '==' and '==='?", a: { a: "No difference", b: "'===' checks type and value", c: "'==' checks type and value" }, c: "b" },
        { q: "What is an 'Array'?", a: { a: "A single value", b: "A collection of values", c: "A function" }, c: "b" },
        { q: "What is the CSS 'Box Model'?", a: { a: "A model for 3D graphics", b: "Content, Padding, Border, Margin", c: "A type of <div>" }, c: "b" },
        { q: "If A=1, B=2, C=3... what is 'CODE'?", a: { a: "31545", b: "3154", c: "31541" }, c: "b" },
        { q: "What is a 'function'?", a: { a: "A block of reusable code", b: "A variable", c: "A CSS style" }, c: "a" },
        { q: "What does 'git clone' do?", a: { a: "Creates a new branch", b: "Copies a remote repository", c: "Deletes a repository" }, c: "b" },
        { q: "What is 'NaN' in JavaScript?", a: { a: "Not a Number", b: "No Available Name", c: "Null and None" }, c: "a" },
        { q: "Which is a 'primary' color?", a: { a: "Green", b: "Orange", c: "Blue" }, c: "c" },
        { q: "What is 'SQL'?", a: { a: "A styling language", b: "A database query language", c: "A server programming language" }, c: "b" },
        { q: "What is 'Object-Oriented Programming' (OOP)?", a: { a: "Programming with pictures", b: "A paradigm based on 'objects'", c: "A type of hardware" }, c: "b" },
        { q: "Find the next number: 1, 1, 2, 3, 5, 8, ...?", a: { a: "13", b: "11", c: "10" }, c: "a" },
        { q: "What is the 'DOM'?", a: { a: "Digital Optical Media", b: "Document Object Model", c: "Data Output Module" }, c: "b" },
        { q: "What is 'this' keyword in JavaScript?", a: { a: "Refers to the current function", b: "Refers to the object it belongs to", c: "Refers to the HTML file" }, c: "b" },
        { q: "What is 100 / 4?", a: { a: "20", b: "25", c: "30" }, c: "b" },
        { q: "Which event occurs when the user clicks on an HTML element?", a: { a: "onmouseclick", b: "onchange", c: "onclick" }, c: "c" }
    ],
    // 15 Hard Questions
    hard: [
        { q: "What is a 'closure' in JavaScript?", a: { a: "A function having access to its parent scope", b: "A function with no name", c: "A way to close the browser" }, c: "a" },
        { q: "What is 'Polymorphism' in OOP?", a: { a: "Hiding complex data", b: "One name, many forms", c: "Linking two classes" }, c: "b" },
        { q: "What is a 'foreign key' in SQL?", a: { a: "A key that links two tables together", b: "A key that is not from your country", c: "A password" }, c: "a" },
        { q: "What does 'async/await' help with?", a: { a: "Making code run faster", b: "Writing asynchronous code cleanly", c: "Styling web pages" }, c: "b" },
        { q: "What is the time complexity of 'Binary Search'?", a: { a: "O(n)", b: "O(n^2)", c: "O(log n)" }, c: "c" },
        { q: "What is 'React'?", a: { a: "A database", b: "A JavaScript library for UI", c: "A server language" }, c: "b" },
        { q: "What is a 'Promise' in JavaScript?", a: { a: "A CSS animation", b: "An object representing an eventual completion", c: "A type of variable" }, c: "b" },
        { q: "What is the 'Event Loop'?", a: { a: "A CSS animation", b: "A JS construct for handling asynchronous tasks", c: "An HTML tag" }, c: "b" },
        { q: "A man walks 5km East, then 5km South. How far is he from the start?", a: { a: "10km", b: "7.07km", c: "5km" }, c: "b" },
        { q: "What is 'Inheritance' in OOP?", a: { a: "A class acquiring properties of another class", b: "A way to loop code", c: "A database concept" }, c: "a" },
        { q: "What is the 'Big O Notation' used for?", a: { a: "To describe algorithm efficiency", b: "To style text", c: "To declare variables" }, c: "a" },
        { q: "What is 8 * 8?", a: { a: "64", b: "16", c: "68" }, c: "a" },
        { q: "What is 'API'?", a: { a: "Advanced Programming Interface", b: "Application Programming Interface", c: "Applied Programming Interface" }, c: "b" },
        { q: "What is the 'Stack' vs 'Heap' in memory?", a: { a: "No difference", b: "Stack is for static, Heap for dynamic", c: "Stack is for images, Heap is for text" }, c: "b" },
        { q: "What is 12 * 12?", a: { a: "124", b: "144", c: "134" }, c: "b" }
    ]
};

// --- 2. HTML Elements ---
const welcomeContainer = document.getElementById('welcome-container');
const startBtn = document.getElementById('start-btn');
const difficultyContainer = document.getElementById('difficulty-container');
const easyBtn = document.getElementById('easy-btn');
const intermediateBtn = document.getElementById('intermediate-btn');
const hardBtn = document.getElementById('hard-btn');
const quizContainer = document.getElementById('main-quiz-container');
const questionEl = document.getElementById('question');
const answerListEl = document.getElementById('answer-list');
const submitBtn = document.getElementById('submit-btn');
const resultsContainer = document.getElementById('results-container');
const scoreTextEl = document.getElementById('score-text');
const percentageTextEl = document.getElementById('percentage-text');
const reloadBtn = document.getElementById('reload-btn');
const progressBar = document.getElementById('progress-bar');
const questionCounter = document.getElementById('question-counter');

// --- 3. Variables ---
let quizData = [];
const totalQuestions = 15; // All quizzes have 15 questions
let currentQuiz = 0;
let score = 0;
let selectedAnswer = null;

// --- 4. Functions ---

function startQuiz(difficulty) {
    quizData = allQuestions[difficulty]; // Select the 15-question array
    currentQuiz = 0;
    score = 0;

    difficultyContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    loadQuiz();
}

function loadQuiz() {
    selectedAnswer = null;
    answerListEl.innerHTML = ''; 

    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.q; // Use 'q' for question

    for (const key in currentQuizData.a) { // Use 'a' for answers
        const answer = currentQuizData.a[key];
        const li = document.createElement('li');
        li.classList.add('answer-option');
        
        li.innerHTML = `
            <input type="radio" id="${key}" name="answer" value="${key}">
            <label for="${key}">${answer}</label>
        `;
        
        li.addEventListener('click', () => {
            document.querySelectorAll('.answer-option').forEach(opt => opt.classList.remove('selected'));
            li.classList.add('selected');
            selectedAnswer = key;
        });

        answerListEl.appendChild(li);
    }

    updateProgress();

    if (currentQuiz === totalQuestions - 1) {
        submitBtn.innerText = "Finish Quiz";
    } else {
        submitBtn.innerText = "Next Question";
    }
}

function updateProgress() {
    const progressPercent = ((currentQuiz + 1) / totalQuestions) * 100;
    progressBar.style.width = `${progressPercent}%`;
    questionCounter.innerText = `Question ${currentQuiz + 1} of ${totalQuestions}`;
}

function showResults() {
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden'); 
    
    scoreTextEl.innerText = `You scored ${score} out of ${totalQuestions}`;
    
    const percentage = Math.round((score / totalQuestions) * 100);
    percentageTextEl.innerText = `Your skill is ${percentage}%`;
}

// --- 5. Event Listeners ---

startBtn.addEventListener('click', () => {
    welcomeContainer.classList.add('hidden');
    difficultyContainer.classList.remove('hidden');
});

easyBtn.addEventListener('click', () => startQuiz('easy'));
intermediateBtn.addEventListener('click', () => startQuiz('intermediate'));
hardBtn.addEventListener('click', () => startQuiz('hard'));

submitBtn.addEventListener('click', () => {
    if (selectedAnswer) {
        if (selectedAnswer === quizData[currentQuiz].c) { // Use 'c' for correct answer
            score++;
        }
        currentQuiz++;
        if (currentQuiz < totalQuestions) {
            loadQuiz();
        } else {
            showResults();
        }
    } else {
        alert("Please select an answer before proceeding.");
    }
});

reloadBtn.addEventListener('click', () => {
    location.reload();
});
         
