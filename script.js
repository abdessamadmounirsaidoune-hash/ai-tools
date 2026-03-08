const API_URL = "https://idoune.workers.dev/";

async function askAI(question, resultId) {

const result = document.getElementById(resultId);

result.innerText = "جاري التفكير...";

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

if(data.answer){
result.innerText = data.answer;
}else{
result.innerText = "لم يتم العثور على جواب";
}

} catch (error) {

result.innerText = "حدث خطأ في الاتصال";

}

}
