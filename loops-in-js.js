// First Example: Sum numbers

const calculateSumButtonElement = document.querySelector("#calculator button");
// This selects the first button on the HTML code.
// By also adding #calculator to the code, we confirms that the button we select is the button inside #calculator

function calculatorSum() {
  const userNumberInputElement = document.getElementById("user-number");
  const enteredNumber = userNumberInputElement.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }

  const outputResultElement = document.getElementById("calculated-sum");

  outputResultElement.textContent = sumUpToNumber;
  outputResultElement.style.display = "block";
  // The display is set to none in the css code. Therefore we need to set display to block first.
}
// The code inside the function is self explanatory.

calculateSumButtonElement.addEventListener("click", calculatorSum);

// -----------------------------------------------------------------------------------------------------------------------
// Highlight links

const highlightLinkButtonElement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");
  // querySelectorAll will return "all" matching elements.
  // which means this will return an array.
  // we use for-of loops for arrays.

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

highlightLinkButtonElement.addEventListener("click", highlightLinks);

// -----------------------------------------------------------------------------------------------------------------------
// Display user data
// We need to access properties inside an object in here.
// Therefor we use for-in loop in here.

const dummyUserData = {
  firstName: "Avishka",
  lastName: "Indula",
  age: 21,
};

const displayUserDataButtonElement =
  document.querySelector("#user-data button");

function displayUserData() {
  const outputDataElement = document.getElementById("output-user-data");

  outputDataElement.innerHTML = "";
  // This line of code ensures that the display data loop won't be executed more than once.
  // Because it's technically removed and re-added in every click.

  for (const key in dummyUserData) {
    const newUserDataListItemElement = document.createElement("li");
    // The property name is stored as a string value in the "key" constant.
    // This code will create a new "li" item for every property inside the object
    const outputText = key.toUpperCase() + ": " + dummyUserData[key];
    // key.toUpperCase() will give the names of the properties of the object.
    // dummyUserData[Key] will give the values of the properties of that object.
    newUserDataListItemElement.textContent = outputText;
    outputDataElement.append(newUserDataListItemElement);
  }
}

displayUserDataButtonElement.addEventListener("click", displayUserData);

// -----------------------------------------------------------------------------------------------------------------------
// Statistics / Roll the Dice
// This is just a code that checks how many times it rolled to "match" a randomized number to the
// number which was given by the user via an input.

const rollDiceButtonElement = document.querySelector("#statistics button");

function rollDice() {
  // return Math.random();
  // Math is a globally available object built into the browser.
  // It has a "random" method which returns a random number between 0 and 1.
  // 0 is included and 1 is excluded and this returns any floating point number in between. (like 0.5234)
  // But we need a integer value between 1 and 6.
  // We can achieve that like this.
  return Math.floor(Math.random() * 6) + 1;
  // Math.floor will round a floating value to the nearest integer.
  // But actually it's not rounding. It just cuts down the floating numbers.
  // So if we have 5.7655 as the result, it will give 5 as the output.
  // But this still gives numbers between 0 and 5. But we want numbers between 1 and 6.
  // So if we add +1 in the end, we get random numbers between 1 and 6 instead of 0 and 5.
}
// We create the Dice Rolling logic "outside" the event listener function like this.
// We can add this function "inside" to the event listener function after that.

function deriveNumberOfDiceRolls() {
  const targetNumberInputElement =
    document.getElementById("user-target-number");
  const diceRollsListElement = document.getElementById("dice-rolls");
  const enteredNumber = targetNumberInputElement.value;
  // This code gives the value as a "string".

  // const enteredNumber = +targetNumberInputElement.value;
  // If we put a + sign in front like this, the code will give the value as a "number".

  diceRollsListElement.innerHTML = "";
  // This line of code ensures that the display data loop won't be executed more than once.
  // Because it's technically removed and re-added in every click.

  let hasRolledTargetNumber = false;
  // This is also another common way of naming variables. (using has at the beginning of the name.)

  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    // This is how we add the dice rolling logic function inside the event listener function.

    numberOfRolls = numberOfRolls + 1;
    // numberOfRolls++; This is an alternative way to write the above code.
    // This code will keep track of the number of rolls it took to match the target number.

    const newRollListItemElement = document.createElement("li");
    const outputText = "Roll " + numberOfRolls + ": " + rolledNumber;
    newRollListItemElement.textContent = outputText;
    diceRollsListElement.append(newRollListItemElement);
    // This is how we output the result of the roll.

    // if (rolledNumber == enteredNumber) {
    // When we get a value from a input field, it will always be a "string" even if the input type is number.
    // So because we compare a string to a number, we use == instead of ====.
    // hasRolledTargetNumber = true;
    // }
    // We can shorten the above code like this.
    hasRolledTargetNumber = rolledNumber == enteredNumber;
    // This == comparison operator "yield" a Boolean value;
    // So This code tells that if rolledNumber == enteredNumber, then hasRolledTargetNumber = true;
    // Otherwise if rolledNumber !== enteredNumber, then hasRolledTargetNumber = false;
  }
  //  A while loop will keep on looping "until" a certain condition is "not" met anymore.

  const outputTotalRollsElement = document.getElementById("output-total-rolls");
  const outputTargetNumberElement = document.getElementById(
    "output-target-number"
  );

  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener("click", deriveNumberOfDiceRolls);
