const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const Hidden = document.querySelector("#hidden");
const message = document.querySelector("#message")
const messageCheck = document.querySelector("#message-check");
const btnCheck = document.querySelector("#btn-check");
const btnNext = document.querySelector("#btn-next");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];

Hidden.style.display = "none";
btnNext.addEventListener("click", function () {
    message.style.display = "none";
    btnNext.style.display = "none";
    if (billAmount.value == "") {
        showMessage("Insert Bill Amount")
        btnNext.style.display = "block";
    } else {
        Hidden.style.display = "block";
    }
})

btnCheck.addEventListener("click", function validate() {
    message.style.display = "none";
    if (billAmount.value > 0) {
        if (cashGiven.value > billAmount.value) {
            const amounToBeReturn = cashGiven.value - billAmount.value;
            calculateAmount(amounToBeReturn);
        } else {
            showMessage("The Case Provided Should Be Equal To Bill Amount")
        }
    } else {
        showMessage("Invalid Bill Amount")
    }
})

function calculateAmount(amounToBeReturn) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amounToBeReturn / availableNotes[i]);
        amounToBeReturn = amounToBeReturn % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;

}