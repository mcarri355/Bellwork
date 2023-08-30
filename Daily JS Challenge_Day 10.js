/*You land at the regional airport in time for your next flight. In fact, it looks like you'll even have time to grab some food: all flights are currently delayed due to issues in luggage processing.

Due to recent aviation regulations, many rules (your puzzle input) are being enforced about bags and their contents; bags must be color-coded and must contain specific quantities of other color-coded bags. Apparently, nobody responsible for these regulations considered how long they would take to enforce!

For example, consider the following rules:

light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.
These rules specify the required contents for 9 bag types. In this example, every faded blue bag is empty, every vibrant plum bag contains 11 bags (5 faded blue and 6 dotted black), and so on.

You have a shiny gold bag. If you wanted to carry it in at least one other bag, how many different bag colors would be valid for the outermost bag? (In other words: how many colors can, eventually, contain at least one shiny gold bag?)

In the above rules, the following options would be available to you:

A bright white bag, which can hold your shiny gold bag directly.
A muted yellow bag, which can hold your shiny gold bag directly, plus some other bags.
A dark orange bag, which can hold bright white and muted yellow bags, either of which could then hold your shiny gold bag.
A light red bag, which can hold bright white and muted yellow bags, either of which could then hold your shiny gold bag.
So, in this example, the number of bag colors that can eventually contain at least one shiny gold bag is 4.

How many bag colors can eventually contain at least one shiny gold bag? (The list of rules is quite long; make sure you get all of it.)*/

const fs = require('fs');  // Import the file system module

try {
  const input = fs.readFileSync('Daily JS Challenge_Day 10_Input.txt', 'utf8');  // Read the input file
  const rules = input.split('\r\n');  // Split input into lines
  
  const bagContents = {};  // Object to store bag relationships

  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    const parts = rule.split(" bags contain ");  // Split each rule into outer bag and inner bags
    const outerBag = parts[0];  // Get outer bag color
    const innerBags = parts[1];  // Get inner bags description

    // Check if inner bag contains other bags
    if (innerBags !== "no other bags.") {
      const innerBagList = innerBags.split(", ");  // Split inner bags into individual bag descriptions
      bagContents[outerBag] = [];  // Initialize array for inner bags of outer bag
      for (let j = 0; j < innerBagList.length; j++) {
        const innerBag = innerBagList[j];  // Get individual inner bag description
        const spaceIndex = innerBag.indexOf(" ");
        const innerBagColor = innerBag.substring(spaceIndex + 1, innerBag.lastIndexOf(" "));  // Get inner bag color
        bagContents[outerBag].push(innerBagColor);  // Store inner bag color in outer bag's array
      }
    }
  }

  // Function to check if a bag can contain a shiny gold bag
  function canContainShinyGold(bagColor) {
    if (!bagContents[bagColor]) {
      return false; 
    }

    const innerColors = bagContents[bagColor];  // Get colors of inner bags
    for (let k = 0; k < innerColors.length; k++) {
      const innerColor = innerColors[k];
      if (innerColor === "shiny gold" || canContainShinyGold(innerColor)) {
        return true;  
      }
    }

    return false; 
  }

  let count = 0;  // Initialize count for bags that can contains sgb
  for (const bagColor in bagContents) {
    if (canContainShinyGold(bagColor)) {
      count++;  
    }
  }

  console.log(count);
} catch (err) {
  console.log(err); 
}
