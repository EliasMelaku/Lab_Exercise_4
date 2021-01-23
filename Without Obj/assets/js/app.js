var firstName;
var lastName;
var age;
var job;

firstName = prompt("Enter Your First Name");
lastName = prompt("Enter Your Last Name");
job = prompt("What is Your Profession ?")
age = prompt("Enter Your Age");

console.log("Here is your Profile ")
console.log("Full Name: " + firstName + " "+lastName);
console.log("Profession : " + job);
console.log("Age : " + age + " " + "years old");


// =================Eligible or not

let tempAge;
let isEligibleToVote;

tempAge = parseInt(age);

if (tempAge >= 18) {
isEligibleToVote = true;
}
else {
isEligibleToVote = false;
}
console.log( (isEligibleToVote)?"Eligible to vote" : "Not Eligible to vote");


// ================family storage array

let familyMember = new Array();

let numberOfFamily;

numberOfFamily = prompt("Number of Family ? ");

for (let i = 0; i < parseInt(numberOfFamily); i++) {
familyMember[i] = prompt("Your Family Members " + (i + 1));
}

console.log("Family Members ");

familyMember.forEach(function(member) {
console.log("Family Member " + (window.i) + " : " + member);
});


// =========== The functions===
var birthYear; //Changing the var age to birth Year
//Some changes

birthYear = prompt("Enter Your Birth Year");
let tempAgebyYear = ageCalc(birthYear);
console.log("Age : " + tempAgebyYear + " " + "years old");
//age calculator function
function ageCalc(birthYear)
{
return new Date().getFullYear() - birthYear;
}

// ================BMI

height = prompt("Enter Your Height(m)");
weight = prompt("Enter Your Weight(kg)");

let tempBMI = BMICalc(height, weight);
console.log("Your BMI is: " + tempBMI);

function BMICalc(height, weight){

    return weight / (Math.pow(height, 2)) ;
}

//  =============================Self invoking Function

(function() {
    console.log("Here is your Profile ")
    console.log("Full Name: " + firstName + " " + lastName);
    console.log("Profession : " + job);
    console.log("Age : " + tempAge + " " + "years old");
    console.log("Is Eligible to Vote : " + isEligibleToVote);
    console.log("Family Members ");
    //Displaying the family member with foreach
    familyMember.forEach(function(member, index) {
    console.log("Family Member " + (index + 1) + " : " + member);
    });
    // call to bmi calculator
    BMICalc(weight, height);
    })();

