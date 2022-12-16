function myAdd(num1, num2){
    let result =  num1 * num2;
    return result;
}
let answer = myAdd(5,5);
document.getElementById("demo").innerHTML = answer;

const myBio = {
    firstName: "Uchenna",
    lastName: "Nwaokonko",
    fullName: function(){
        return this.firstName+ " " + this.lastName;
    }
}
document.getElementById("demo1").innerHTML = myBio.fullName();

window.confirm('Do you want to Exit?');
window.prompt('What is your name?');

let user = window.open('https://www.w3schools.com', 'W3SCHOOLS', 'width=400,height=400,resizable=yes');
document.getElementById('show').innerHTML = user;

let screen  = window.screen.width;
document.getElementById('screen').innerHTML = screen;


