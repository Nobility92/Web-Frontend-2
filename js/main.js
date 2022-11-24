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