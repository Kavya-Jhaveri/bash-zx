#!/usr/bin/env zx

import 'zx/globals'

async function main() {
  while (true) {
    console.log("TV Guide:");
    console.log("1. Parrot Dancing");
    console.log("2. Nyan Cat");
    console.log("3. Emoji Race");
    console.log("4. Quit");

    const inputString = await $`read -p "Enter your choice (1/2/3/4): " && echo $REPLY`;
    const choice = parseFloat(inputString);

    switch (choice) {
      case 1:
        console.log("Parrot Dancing:");
        await $`curl --max-time 5 parrot.live`;
        console.log("Watch Something Else");
        await $`read -p "Press Enter to continue..."`;
        break;
      case 2:
        console.log("Nyan Cat:");
        await $`curl --max-time 5 https://poptart.spinda.net`;
        console.log("Watch Something Else");
        await $`read -p "Press Enter to continue..."`;
        break;
      case 3:
        console.log("Emoji Race:");
        await $`curl --max-time 10 node-web-console.glitch.me`;
        console.log("Watch Something Else");
        await $`read -p "Press Enter to continue..."`;
        break;
      case 4:
        console.log("Goodbye!");
        process.exit(0); // Exit the script
      default:
        console.log("Invalid choice. Please enter a valid option (1/2/3/4).");
        await $`read -p "Press Enter to continue..."`;
    }
  }
}

main();
