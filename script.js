const API_URL = "https://idoune.workers.dev/";

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

result.innerText=data.answer;

}catch(e){

result.innerText="حدث خطأ في الاتصال";

}

}

function sendChat(){

const q=document.getElementById("chatInput").value;

askAI(q,"chatResult");

}
