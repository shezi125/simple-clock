import inquirer from "inquirer";

import chalk from "chalk";


    
const askTime = async () => {

while (true) {
    
let answer = await inquirer.prompt(

{message:chalk.bgBlue ("Tell me your time?"),
name: "time",
type: "number",
}
  
)

if (answer.time >= 20 || answer.time <=4) {
    console.log(chalk.green("good night"))
  }


  else if (answer.time >= 5 && answer.time <= 12) {
    console.log(chalk.yellow("good morning"))
  }


else if (answer.time >= 13 && answer.time <= 3) {
  console.log(chalk.blue("good afternoon"))
}


else if (answer.time >= 4 && answer.time <= 19) {
  console.log(chalk.red("good evening"))
}


let confirmation = await inquirer.prompt(

       { message:chalk.bgGreen ("do you need more time ?"),
        name: "confirm",
        type: "confirm",
        default: true
        
    }
    )

if (!confirmation.confirm ) 
    {console.log("have a nice day");

    break
}

}

}
await askTime()




