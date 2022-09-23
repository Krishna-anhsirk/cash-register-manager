const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const check = document.querySelector(".check-money");
const message = document.querySelector(".message");
const notes = document.querySelectorAll(".notes");
const displayChange = document.querySelector(".display-change");

const givenNotes = [2000, 500, 100, 20, 10, 5, 1];

function validateCash() {
  //To reset message and the details
  resetRegister();
  //Checking if bill amount is valid
  if (billAmount.value > 0) {
    //Checking if given cash is greater than bill
    const remainingChange = cashGiven.value - billAmount.value;
    if (remainingChange >= 0) {
      displayChange.innerText = remainingChange;
      returnChange(remainingChange);
    } else {
      showMessage("Do you wanna wash the plates ?");
    }
  } else {
    showMessage("Enter valid bill amount!");
  }
}

function resetRegister() {
  showMessage("");
  displayChange.innerText = "";
  //To reset notes
  for (let i = 0; i < notes.length; i++) {
    notes[i].innerText = "";
  }
}

function returnChange(change) {
  for (let i = 0; i < givenNotes.length; i++) {
    notes[i].innerText = Math.trunc(change / givenNotes[i]);
    change = change % givenNotes[i];
  }
}

check.addEventListener("click", validateCash);

function showMessage(errorMessage) {
  message.innerText = errorMessage;
}
