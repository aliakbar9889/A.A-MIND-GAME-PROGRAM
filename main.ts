import inquirer from "inquirer";
let number = await inquirer.prompt([
    {
        name:"num",
        type:"confirm",
        message:"SUPPOSE A NUMBER FROM 1 TO 9 IN YOUR MIND",   
    },
    {
        name:"num2",
        type:"confirm",
        message:"NOW A NUMBER WHICH IS IN YOUR MIND MULTIPLY BY 3"
    },
    {
        name:"num3",
        type:"confirm",
        message:"NOW THE NUMBER YOU MULTIPLY IN YOUR MIND MULTIPLY AGAIN BY 3"
    },
    {
        name:"num4",
        type:"list",
        message:"YOUR NUMBER IS",
        choices:["IN ONE DIGIT","IN TWO DIGIT"]
    }
]);
if (number.num4 === "IN ONE DIGIT"){
    console.log("YOUR ANSWER IS 9");
}
else if (number.num4 === "IN TWO DIGIT"){
    let answer = await inquirer.prompt([
        {
            name:"num5",
            type:"confirm",
            message:"PLUS BOTH NUMBER WHICH IS IN YOUR MIND TOGETHER"
        }
    ]);
    console.log("YOUR ANSWER IS 9");    
}