
//A quiz program on question and answer

const quiz = [
    ["What is your Name?", "Henry"],
    ["What is your Age?", '30'],
    ["What is your Occupation?", "Web Developer"]
];
let score = 0;

for (const [question, answer] of quiz){
    const response = prompt(question);
    if (response === answer){
        alert("Correct");
        score++;
     } else{
            alert(`Incorrect answer, The correct answer is ${answer}`);
        }
        alert(`You scored ${score} points`);
    }

const question = "What is your name";
const answer = prompt(question);
alert(`Your name is ${answer}`);

const department = [];
department[0] = 'Human Resource';
department[1] = ' Marketing';
department[2] = ' I.T';
department[3] = ' Finance';

alert(department);
alert(department.length);
alert(department.sort());
alert(department.indexOf('I.T'));



