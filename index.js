var readlineSync = require('readline-sync');
var name = readlineSync.question("May I know your name? ")
console.log("Hi, "+name+" Welcome to the quiz......")
console.log("Answer the questions and let's see how well do you know Rupali.........")
questions = {
  q1:"Which is Rupali's Hometown?\na)BIKANER\nb)GHARSANA\nc)PAKISTAN\n",
  a1:"b\n",
  q2:"Which is Rupali's favourite color?\na)White\nb)Pink\nc)Black\n",
  a2:"c\n",
  q3:"Rupali's favorite food?\na)Vadapav\nb?Pavbhaji\nc)Momos\n",
  a3:"a\n",
  q4:"Rupali's birthdate?\na)Oct 31\nb)Oct 12\nc)Nov 15\n",
  a4:"a\n",
  q5:"Rupali's favourite drink?\na)Tea\nb)Coffee\nc)Lassi\n",
  a5:"c\n",

};

score=0;
function printRight(value){
  console.log("congrats! you have given right answer "+"score= "+value);
}
function printWrong(value){
  console.log("oops!!! you have given wrong answer "+"score= "+value);
}
ans1=readlineSync.question(questions.q1);
if(ans1.toUpperCase()==="B"){
  score=score+1;
  printRight(score);
}
else{
 
  score=score-1;
  printWrong(score);
}
ans2=readlineSync.question(questions.q2);
if(ans2.toUpperCase()==="C"){
  score=score+1;
  printRight(score);
}
else{
  score=score-1;
  printWrong(score);
}
ans3=readlineSync.question(questions.q3);
if(ans3.toUpperCase()==="A"){
  score=score+1;
  printRight(score);
}
else{
  score=score-1;
  printWrong(score);
}
ans4=readlineSync.question(questions.q4);
if(ans4.toUpperCase()==="A"){
  score=score+1;
  printRight(score);
}
else{
  score=score-1;
  printWrong(score);
}
ans5=readlineSync.question(questions.q5);
if(ans5.toUpperCase()==="C"){
  score=score+1;
  printRight(score);
}
else{
  score=score-1;
  printWrong(score);
}
if(score<3){
  console.log("Ahmm!!! It seems you don't know me well. "+"score= "+score)
}
else{
  console.log("Yayyy!!! you know me very well.Let's meet and we will have fun together. "+"score= "+score)
}
var highscore ={
  highscore: "5",
  name:"Rekha"
};
console.log(highscore);
if(score>=highscore.score)
{console.log("wohoooo!!!!!you are the high scorer......")
console.log("you beat the high score send me a screenshot...")}
