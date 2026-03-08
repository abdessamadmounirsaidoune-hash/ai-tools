const API_URL="https://idoune.workers.dev/";

async function askAI(question,resultId){

const result=document.getElementById(resultId);

result.innerText="جاري التفكير...";

try{

const response=await fetch(API_URL,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
message:question
})

});

const data=await response.json();

if(data.answer){

result.innerText=data.answer;

}else{

result.innerText="لا يوجد جواب";

}

}catch{

result.innerText="حدث خطأ في الاتصال";

}

}

function sendChat(){

const q=document.getElementById("chatInput").value;

askAI(q,"chatResult");

}

function explainLesson(){

const q=document.getElementById("lessonInput").value;

askAI("اشرح هذا الدرس بطريقة بسيطة: "+q,"lessonResult");

}

function createResearch(){

const q=document.getElementById("researchInput").value;

askAI("اكتب بحثا مدرسيا حول: "+q,"researchResult");

}

function summarize(){

const q=document.getElementById("summaryInput").value;

askAI("لخص النص التالي: "+q,"summaryResult");

}

function solveExercise(){

const q=document.getElementById("exerciseInput").value;

askAI("حل هذا التمرين خطوة خطوة: "+q,"exerciseResult");

}
