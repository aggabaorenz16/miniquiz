const questionNum = document.querySelector(".questions-num");
const questions = document.querySelector(".questions");
const answerA = document.querySelector(".answer-a");
const answerB = document.querySelector(".answer-b");
const answerC = document.querySelector(".answer-c");
const answerD = document.querySelector(".answer-d");
const finalScore = document.querySelector(".score");
const modal = document.querySelector(".modal-score");
let userstep = -1;
let score = 0;
const QandA = [
    {
        question : "Kailan namatay si Dr. Jose Rizal?",
        answer : "a",
        a : "Sept 16, 2003",
        b : "Nov 20, 2021",
        c : "Dec 26, 2020",
        d : "Aug 30, 2008",
    },
    {
        question : "What is |-10|?",
        answer : "c",
        a : "18",
        b : "20",
        c : "10",
        d : "-10",
    },
    {
        question : "What is the value of x in x+5 = 10?",
        answer : "b",
        a : "10",
        b : "5",
        c : "15",
        d : "-5",
    },
    {
        question : "It is called the middle most score?",
        answer : "a",
        a : "Median",
        b : "Percentile",
        c : "Mean",
        d : "Mode",
    },
    {
        question : "It is defined as the score with the highest frequency?",
        answer : "d",
        a : "Decile",
        b : "Median",
        c : "Mean",
        d : "Mode",
    },
    {
        question : "Find the median of the set 86, 85, 80, 88, 90, 91, 84?",
        answer : "c",
        a : "90",
        b : "88",
        c : "86",
        d : "89",
    },
    {
        question : "Find the mean of the set 10, 39, 71, 39, 76, 38, 25?",
        answer : "a",
        a : "42.6",
        b : "39.5",
        c : "-42.6",
        d : "14",
    },
    {
        question : "Divide the distribution into four equal group?",
        answer : "d",
        a : "mode",
        b : "percentile",
        c : "decile",
        d : "quartile",
    },
    {
        question : "The difference between 3rd and first quartile?",
        answer : "b",
        a : "quartile",
        b : "interquartile range",
        c : "percentile",
        d : "decile",
    },
    {
        question : "Saan mababasa sa Biblia ang Pilipinas?",
        answer : "a",
        a : "Isaias 24:15",
        b : "Isaias 19:14",
        c : "Isaias 24:17",
        d : "Isaias 18:15",
    },
]
let quizlength = QandA.length
console.log(quizlength)
function getquestion(num){
    if(num < 10) {
        questions.innerText = QandA[num].question
        answerA.innerText = QandA[num].a
        answerB.innerText = QandA[num].b
        answerC.innerText = QandA[num].c
        answerD.innerText = QandA[num].d
        questionNum.innerText =  num+1
    }
}
answerA.addEventListener("click",function(){
    validate(userstep,"a");
})
answerB.addEventListener("click",function(){
    validate(userstep,"b");
})
answerC.addEventListener("click",function(){
    validate(userstep,"c");
})
answerD.addEventListener("click",function(){
    validate(userstep,"d");
})
function validate(quiznum,useranswer) {
    if(quiznum == quizlength) {
        console.log("Score: "+score)
        finalScore.innerText = score
        modal.style.display = "flex"
    } else {
        if(useranswer == QandA[quiznum].answer) {
            score++
        }
        console.log("Quiz Number "+quiznum+" User Answer "+useranswer)
        userstep++
        getquestion(userstep)
    }
} 
console.log(userstep)
getquestion(0)
userstep = 0;