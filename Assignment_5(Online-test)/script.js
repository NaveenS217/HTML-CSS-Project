// ===============================
// MCQ Test Logic (Works with your questions.js)
// ===============================

// Global Data
let selectedQuestions = [];
let userResponse = [];
let index = 0;

// STEP 1: Select 15 random questions from QUESTIONS[]
function pickRandomQuestions() {
    const shuffled = QUESTIONS.sort(() => 0.5 - Math.random());
    selectedQuestions = shuffled.slice(0, 15);
}

// STEP 2: Start Test
function startTest() {
    pickRandomQuestions();

    document.getElementById("screen1").classList.add("hidden");
    document.getElementById("screen2").classList.remove("hidden");

    loadQuestion();
}

// STEP 3: Load Question on screen
function loadQuestion() {
    let q = selectedQuestions[index];

    document.getElementById("questionText").innerText =
        `Q${index + 1}. ${q.ques}`;

    let html = "";

    q.options.forEach((option, i) => {
        html += `
            <div class="option">
                <label>
                    <input type="radio" name="option" value="${i}"
                        ${getSavedAnswer(index) === i ? "checked" : ""}>
                    ${option}
                </label>
            </div>
        `;
    });

    document.getElementById("optionsBox").innerHTML = html;
}

// STEP 4: Save user selection
function saveResponse() {
    let selected = document.querySelector('input[name="option"]:checked');
    if (!selected) return null;

    let value = parseInt(selected.value);

    userResponse[index] = {
        ques_no: index,
        candidate_ans: value,
        isCorrect: value === selectedQuestions[index].answer
    };

    return true;
}

// Get stored answer for UI
function getSavedAnswer(i) {
    return userResponse[i]?.candidate_ans ?? null;
}

// STEP 5: Next question
function nextQuestion() {
    let isSaved = saveResponse();

    if (!isSaved) {
        alert("Please select an answer before going to next question.");
        return;
    }

    if (index < selectedQuestions.length - 1) {
        index++;
        loadQuestion();
    } else {
        showResult();
    }
}

// STEP 6: Back question (NO alert)
function prevQuestion() {
    saveResponse();
    if (index > 0) {
        index--;
        loadQuestion();
    }
}

// STEP 7: Show final result screen
function showResult() {
    document.getElementById("screen2").classList.add("hidden");
    document.getElementById("screen3").classList.remove("hidden");

    let score = userResponse.filter(r => r?.isCorrect).length;

    document.getElementById("scoreText").innerHTML =
        `Your Score: ${score} / ${selectedQuestions.length}`;

    let reviewHTML = "";

    selectedQuestions.forEach((q, i) => {
        let userAns = userResponse[i]?.candidate_ans;
        let isCorrect = userResponse[i]?.isCorrect;

        reviewHTML += `
            <div class="review">
                <p><b>Q${i + 1}:</b> ${q.ques}</p>

                <p>Your Answer:
                    <span class="${isCorrect ? "correct" : "wrong"}">
                        ${userAns !== undefined ? q.options[userAns] : "Not Answered"}
                    </span>
                </p>

                <p>Correct Answer:
                    <span class="correct">${q.options[q.answer]}</span>
                </p>
            </div>
        `;
    });

    document.getElementById("reviewBox").innerHTML = reviewHTML;
}
