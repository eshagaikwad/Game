var readlinesync = require ("readline-sync");
var score=0;
var readlinesync = require('readline-sync');
var username=readlinesync.question("may i have your name? ");
var welcomemessage =(" welcome "+username)
console.log(welcomemessage)
console.log("lets play a quiz about how well do you known me!!" )
var username=readlinesync.question(" Are you ready ");
function play(question,answer){
var useranswer= readlinesync.question(question);
if(useranswer==answer)
{
  console.log("yeahh! you are correct")
  score=score+1;
  console.log("your score is: ", score )
  console.log("_ _ _ _ _ _ _")
}
else{
  console.log("you are wrong")
  console.log("your score is: ", score )
   console.log("_ _ _ _ _ _ _")
}
}
play("what is my favourite cuisine? ", "Indian");
play("what is my age? ", "18");
play(" where do i live? ", "airoli");
play("what is my hobbie? ","dance");
play("The last movie i watched?  ","Badla")
console.log("your final score out of 5 is ",score);