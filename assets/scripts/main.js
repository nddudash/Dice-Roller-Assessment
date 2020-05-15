let diceRolled = document.querySelector('#diceRolled');

let diceRollButton = document.querySelector('#diceRollButton');

let diceRollTotalDisplay = document.querySelector('#diceRollTotalDisplay');

let showAllRollsButton = document.querySelector('#showAllRollsButton');

let showAllRollsList = document.querySelector('#showAllRollsList');

let resetButton = document.querySelector('#resetButton');

let diceUpperLimit = document.querySelector('#diceUpperLimit');


//Stole this Random Generator from MDN.org. I doubt I'd be able to devise something like this by myself.
function rollTheDice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

let dieRolls = [];

diceUpperLimit.value = 6;

diceRolled.value = 1;


diceRollButton.addEventListener("click", function() { 
    
    if (diceRolled.value === "0" || diceRolled.value === "") {
        window.alert("Please enter how many dice you would like to roll!");
    }
    
    else {
        dieRolls = [];

        showAllRollsList.innerHTML = '';

        let numDice = diceRolled.value;
        
        let counter = 0;

        while (counter < numDice) {
            
            let currentDice = counter;

            currentDiceValue = rollTheDice(1, diceUpperLimit.value);

            dieRolls.push(currentDiceValue);

            counter ++;
        }

        console.log(dieRolls);

        //Rubric #6. I tried a few different methods of getting the sum (like running .map(parseInt) and .reduceRight), but I found myself more just copying code than really being able to wrap my head around it, much less understand it. So I opted to just make a second while loop instead.
        
        counter = 0;

        let diceRollTotal = 0;

        while (counter < numDice) {
            
            let currentDice = counter;

            let currentDiceValue = dieRolls[currentDice];

            diceRollTotal += currentDiceValue;

            counter ++;
        }

        console.log(diceRollTotal);

        diceRollTotalDisplay.innerHTML = `You've rolled a total of ${diceRollTotal}!`
    }
})

showAllRollsButton.addEventListener('click', function() {

    showAllRollsList.innerHTML = '';

    let counter = 0;

    while (counter < dieRolls.length) {

        let currentDice = counter;

        let currentDiceValue = dieRolls[currentDice];
        
        let diceValueAsListItem = `<li class="dice">${currentDiceValue}</li>`
        
        showAllRollsList.innerHTML += diceValueAsListItem;

        counter ++;
    }
})

resetButton.addEventListener('click', function(){
    
    diceUpperLimit.value = 6;
    
    diceRolled.value = 1;
    
    dieRolls = [];

    diceRollTotal = 0;

    diceRollTotalDisplay.innerHTML = "";

    showAllRollsList.innerHTML = "";
    
})