// set variables
var fs = require("fs");
var inquirer=require('inquirer');
// PLEASE CHECK THE LIB FOLDER FOR THE REQUIRED CONSTRUCTOR
var cloze=require("./lib/cloze.js");
var index = 0;

// set the clozeCard function
var clozeCard = function() {
    // read cloze.json file
    fs.readFile('./cloze.json', 'utf8', function(error, data) {
        if (error) {
            return console.log(error);
        }
        // split the data to an array
        var questionArr = data.split(',\n');
        // run askQuestion function by passing questionArr and index
        askQuestion(questionArr, index);
    });
};

// questionArr and index required to run the askQustion function
var askQuestion = function(questionArr, index) {
    // when the index less than the number of question array, do this
    if (index < questionArr.length) {
        // organized the data to make it easier to use
        var questions=JSON.parse(questionArr[index]);
        var card=new cloze(questions.text, questions.cloze);
        // using inquirer to ask question and get the response data
        inquirer.prompt([{
            name: 'response',
            message: card.partial
        }]).then(function(answers) {
            if (answers.response===card.cloze) {
                console.log("Your answer is CORRECT!");
                // increase the index so can use for the next questionArr
                index++;
                askQuestion(questionArr, index);
            } else {
                console.log("WRONG answer! The correct is "+card.cloze);
                index++;
                askQuestion(questionArr, index);
            }
        });
    } else {
        // when the array reached the end, do this
        console.log("You answers all the questions!");
    } 
};

// run the clozeCard function on the top
clozeCard();