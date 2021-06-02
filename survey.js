const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//console.log(`Thank you for your valuable feedback: ${answer}`);
rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing? " , (activity) => {
    rl.question("What do you listen to while doing that? ", (listen) => {
      rl.question("Which meal is your favourite? (eg: dinner, brunch, etc ", (dinner) => {
        rl.question("What's your favourite thing to eat for that meal? ", (favourite) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? ", (superpower) => {
              console.log(`Your name is ${name} and the activity you like doing is ${activity}, you listen to ${listen}, favourite meal is ${dinner} with ${favourite}, your favourite sport is ${sport} and your superpower is ${superpower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
  



