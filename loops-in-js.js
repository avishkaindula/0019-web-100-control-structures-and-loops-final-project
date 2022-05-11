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
