const API_URL = "https://noisy-glade-9f65.abdessamadmounirsaidoune.workers.dev";

/* =========================
   DZStudy AI Script
   Advanced Version
   ========================= */

async function askAI(question, resultId) {

  const resultBox = document.getElementById(resultId);

  if (!question) {
    resultBox.innerText = "⚠️ اكتب سؤالاً أولاً";
    return;
  }

  resultBox.innerText = "🤖 جاري التفكير...";

  try {

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: question
      })
    });

    const data = await response.json();

    if (data.answer) {
      resultBox.innerText = data.answer;
    } else {
      resultBox.innerText = "❌ لم يتم الحصول على رد";
    }

  } catch (error) {

    resultBox.innerText = "❌ حدث خطأ في الاتصال";

  }

}

/* =========================
   Chat Function
   ========================= */

function sendChat() {

  const input = document.getElementById("chatInput");

  const question = input.value;

  askAI(question, "chatResult");

  input.value = "";

}

/* =========================
   Lesson Explanation
   ========================= */

function explainLesson() {

  const input = document.getElementById("lessonInput");

  const question = "اشرح هذا الدرس ببساطة: " + input.value;

  askAI(question, "lessonResult");

}

/* =========================
   Research Generator
   ========================= */

function generateResearch() {

  const input = document.getElementById("researchInput");

  const question = "اكتب بحثاً مدرسياً منسقاً حول: " + input.value;

  askAI(question, "researchResult");

}

/* =========================
   Summary Generator
   ========================= */

function summarizeText() {

  const input = document.getElementById("summaryInput");

  const question = "لخص هذا النص: " + input.value;

  askAI(question, "summaryResult");

}

/* =========================
   Exercise Solver
   ========================= */

function solveExercise() {

  const input = document.getElementById("exerciseInput");

  const question = "حل هذا التمرين خطوة بخطوة: " + input.value;

  askAI(question, "exerciseResult");

}

/* =========================
   Keyboard Support
   ========================= */

document.addEventListener("keydown", function(event) {

  if (event.key === "Enter") {

    const active = document.activeElement;

    if (active && active.id === "chatInput") {
      sendChat();
    }

  }

});

/* =========================
   Theme Toggle
   ========================= */

function toggleTheme() {

  document.body.classList.toggle("dark");

}

/* =========================
   Scroll Animation
   ========================= */

window.addEventListener("scroll", function() {

  const elements = document.querySelectorAll(".card");

  elements.forEach(el => {

    const position = el.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
      el.classList.add("show");
    }

  });

});
