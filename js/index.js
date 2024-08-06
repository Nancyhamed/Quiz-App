const quesBox=[
    {
        quesName : "1. what is the largest river in the world ?",
        answers: [
            {answerName : "the nile 1" , answerState: "false"},
            {answerName : "the nile 2" , answerState: "true"},
            {answerName: "the nile 3" , answerState: "false"},
            {answerName: "the nile 4" , answerState: "false"},
        ]
    },
    {
        quesName : "2. what is the largest river in the world ?",
        answers: [
            {answerName : "the nile 2" , answerState: "true"},
            {answerName: "the nile 3" , answerState: "false"},
            {answerName: "the nile 4" , answerState: "false"},
            {answerName : "the nile 1" , answerState: "false"},
        ]
    },
    {
        quesName : "3. what is the largest river in the world ?",
        answers: [
            {answerName : "the nile 2" , answerState: "false"},
            {answerName: "the nile 3" , answerState: "false"},
            {answerName : "the nile 4" , answerState: "true"},
            {answerName : "the nile 1" , answerState: "false"},
        ]
    },
    {
        quesName : "4. what is the largest river in the world ?",
        answers: [
            {answerName : "the nile 2" , answerState: "false"},
            {answerName : "the nile 3" , answerState: "false"},
            {answerName : "the nile 4" , answerState: "false"},
            {answerName : "the nile 1" , answerState: "true"},
        ]
    },
];

const questionBox= document.querySelector("#question-header");
const answerBox =document.querySelector(".answer-box");
const next=document.querySelector("#next-btn");

let quesIndex=0;
let score=0;

function startExam(){
    quesIndex=0;
    score=0;
    showQuestions();

};

// to sequencing questions
function handleQuestions(){
    while(answerBox.firstChild){
        answerBox.removeChild(answerBox.firstChild);
    }
};
// to get  questions 
function showQuestions(){
    handleQuestions();
    // for display question title
    let quesObj=quesBox[quesIndex];
    let quesNo= quesIndex+1;
    questionBox.innerHTML=quesObj.quesName;
    // for display answers
    quesObj.answers.forEach(ele=>{
        let btn = document.createElement("button");
        btn.innerHTML=ele.answerName;
        btn.classList.add("butn");
        answerBox.appendChild(btn);
        // correct or not correct
        if(ele.answerState){
            btn.dataset.answerState = ele.answerState;
        }
        btn.addEventListener("click",(e)=>{
        let selected = e.target;
        if(selected.dataset.answerState==="true"){
            selected.classList.add("true");
            score++;
        }
        else{
            selected.classList.add("false");
        }
        Array.from(answerBox.children).forEach(function (btn) {
                if (btn.dataset === "true") {
                    btn.classList.add("true");
                }
                btn.disabled = true;
            });
        });


});
}


// to add action on next  button
next.addEventListener("click",()=>{
    if (quesIndex<quesBox.length){
        quesIndex++;
        if(quesIndex<quesBox.length){
            showQuestions();
        }else{
            alert(`Your Score is ${score} of 4`);
            startExam();
            
        }
    }else{
    startExam();
    }
    
});



showQuestions();



