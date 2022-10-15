// var inLine = function (nag1, nag2) {
//     let jull = nag1 + nag2;
//     return jull;
// }
// console.log(inLine(5, 6));

// let outLine = function (firstName, num2) {
//     let nameVariable = firstName * num2;
//     return nameVariable;
// }
// console.log("num", outLine(8, 8));

// let variable = function (firstName, num2) {
//     let basicVariable = firstName - num2;
//     return basicVariable;
// }
// console.log("var", variable(25, 20));


var outSide = function (firstName, lastName) {
    if (firstName == "sriman" && lastName == "adaka" && false || 0) {
        console.log("sriman is entered");
    } else if (firstName == "nag") {
        console.log("nag is entered");
    } else if (firstName == "mahesh") {
        console.log("mahesh is entered");
    }
    else {
        console.log("some one is entered");

    }
}
outSide("sriman", "adaka");


let inLine = function (firstName, lastName) {
    if (firstName == "jock" && lastName == "chivukula" && false || 0) {
        console.log("jock is entered");
    } else if (firstName == "nag") {
        console.log("nag is entered");
    } else if (lastName == "chivukula" && false || "") {
        console.log("chivukula is entered");
    } else {
        console.log("some one is entered");
    }
}
inLine("jock", "chivukula");