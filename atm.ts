import inquirer from "inquirer";

let myBalance= 10000;
let myPin= 1234;
const pinAnswer= await inquirer.prompt(
    [
        {

           name: "pin",
           type: "number",
           message: "Enter your pin"

        }
    ] 
);
if (pinAnswer.pin === myPin)
    {
        console.log("Correct pin code!!!");

  const operationAns= await inquirer.prompt(
        [
            {
                name: "operation",
                type: "list",
                message: "please select option",
                choices: ["withdraw", "check balance"]

            }
        ]
    );
   console.log(operationAns);   

   if (operationAns.operation === "withdraw")
    {
        const amountAns= await inquirer.prompt(
            [
                {
                    name: "amount",
                    type: "number",
                    message: "enter your amount"
                }
            ]
        );

        myBalance -= amountAns.amount;
        console.log("Your remaining balance is: " + myBalance);
    }
    else if (operationAns.operation === "check balance")
    {
        console.log("Your balance is: " + myBalance);
    }
}      
   else {
    console.log("Incorrect pin number.");
}
