const API_KEY = "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";

const API_URL = "https://openrouter.ai/api/v1/chat/completions";

async function send() {

let input = document.getElementById("question");
let chat = document.getElementById("messages");

let text = input.value;

if(!text) return;

chat.innerHTML += `
<div class="msg user">${text}</div>
`;

input.value = "";

chat.innerHTML += `
<div class="msg ai" id="loading">جاري التفكير...</div>
`;

try{

const response = await fetch(API_URL,{
method:"POST",
headers:{
"Authorization":"Bearer " + API_KEY,
"Content-Type":"application/json"
},
body:JSON.stringify({
model:"openai/gpt-3.5-turbo",
messages:[
{role:"user",content:text}
]
})
});

const data = await response.json();

let answer = data.choices[0].message.content;

document.getElementById("loading").innerHTML = answer;

}catch(e){

document.getElementById("loading").innerHTML = "حدث خطأ في الاتصال";

}

chat.scrollTop = chat.scrollHeight;

}
