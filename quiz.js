const quizForm = document.querySelector(".quiz-form")
const submitBtn=document.querySelector("#submit-button");
const output =document.querySelector("#output")
const correctAns=["90°","one right angle","Isosceles triangle","100°","30°"]

function checkTheAnswers(){
const formResults= new FormData(quizForm)
let score =0
let index = 0
for(let value of formResults.values()){
    if (value===correctAns[index]){
        score = score + 1;
    }
    index = index + 1;
}
output.innerText= "The score is "+ score
}

submitBtn.addEventListener("click",checkTheAnswers)