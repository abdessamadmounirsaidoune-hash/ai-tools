async function askAI() {

let question = document.getElementById("question").value;

document.getElementById("answer").innerText = "جاري التفكير...";

try {

let response = await fetch("https://cold-mountain-df10.abdessamadmounirsaidoune.workers.dev", {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify({
model: "openai/gpt-3.5-turbo",
messages: [
{
role: "user",
content: question
}
]
})

});

let data = await response.json();

document.getElementById("answer").innerText =
data.choices[0].message.content;

}

catch(error){

document.getElementById("answer").innerText =
"حدث خطأ في الاتصال بالذكاء الاصطناعي";

}

}
