const form = document.forms['search'];
form.addEventListener ('submit', search, false);

function search(event) {
    alert(' Form Submitted');
}
/*function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('pp').disabled = true;
    } else {
        document.getElementById('pp').disabled = false;
    }
}*/

const p = document.createElement("p");
const n = document.createTextNode('This is the new Paragraph');
const papa = document.getElementById('oga');
p.appendChild(n);
papa.appendChild(p);



const take = document.getElementsByClassName('intro');
document.getElementById('demo').innerHTML = "What is your name? " + take[1].innerHTML;



let user = {
    name: "Henry",
    age: 30,
    occupation: "Web Developer",
    children: true,
};
//adding a property
    user.city = "Ibadan";
    //removing a property
    delete user.children;
    //changing the value of a property
    user.occupation = "Forex Trader";
    //
    let txt = " ";
    for (const x in user){
        txt += x + ":" +" " + user[x] + " ";
    }
    document.getElementById("sum").innerHTML = txt;

   
/*function testdisplay(){
    var testsave = document.getElementById('content').value;
    document.getElementById('test').innerHTML = testsave;
}

function fun(p1, p2){
    return p1 * p2;
}
document.getElementById("sum").innerHTML = fun(4, 3);

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
alert(department.indexOf('I.T'));*/



