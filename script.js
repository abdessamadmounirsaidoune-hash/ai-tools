const API_URL = "https://idoune.workers.dev/";

async function askAI(question, resultElement) {

resultElement.innerText = "جاري التفكير...";

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
resultElement.innerText = data.answer;
}else{
resultElement.innerText = "لم يتم العثور على جواب";
}

} catch (error) {
resultElement.innerText = "حدث خطأ في الاتصال";
}

}
