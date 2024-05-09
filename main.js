let sendersInfo = {
  names: "Ediana Ekanem",
  accountNumber: "3098161276",
  balance: 500000,
  pin: 5567,
  bankName: "Access",
};

// Receiver's information
let receiverInfo = {
  names: "Mike Dickson",
  accountNumber: "2634895601",
  balance: 10000,
  pin: 2267,
  bankName: "Uba",
};

// Function to prompt the user for pin and validate it
function enterPin() {
  let enteredPin = prompt("Please enter your PIN to proceed:");
  if (parseInt(enteredPin) === sendersInfo.pin) {
    return true;
  } else {
    alert("Incorrect PIN. Transaction canceled.");
    return false;
  }
}

// Function to perform withdrawal
function withdrawal() {
  let amount = prompt("Enter the amount you want to withdraw:");
  amount = parseInt(amount);
  if (amount <= sendersInfo.balance) {
    sendersInfo.balance -= amount;
    alert(`Withdrawal successful! Your new balance is ${sendersInfo.balance}`);
  } else {
    alert("Insufficient funds. Transaction canceled.");
  }
}

// Function to perform transfer
function transfer() {
  let receiverBank = prompt("Enter receiver's bank:");
  let receiverAccNumber = prompt("Enter receiver's account number:");

  // Display receiver details for confirmation
  alert(`Receiver's Name: ${receiverInfo.names}
      Receiver's Bank: ${receiverBank}
      Receiver's Account Number: ${receiverAccNumber}`);

  let amount = prompt("Enter the amount you want to transfer:");
  amount = parseInt(amount);
  let description = prompt("Enter description for the transfer:");

  // Confirm transaction
  let confirmTransfer = confirm(
    `Transfer ${amount} to ${receiverBank} account ${receiverAccNumber}?`
  );
  if (confirmTransfer) {
    // Deduct from sender's balance
    if (amount <= sendersInfo.balance) {
      sendersInfo.balance -= amount;
    } else {
      alert("Insufficient funds. Transaction canceled.");
      return;
    }

    // Update receiver's balance
    receiverInfo.balance += amount;

    // Display transaction details
    alert(`Transfer successful!
        Sender's previous balance: ${sendersInfo.balance + amount}
        Sender's current balance: ${sendersInfo.balance}
        Receiver's previous balance: ${receiverInfo.balance - amount}
        Receiver's current balance: ${receiverInfo.balance}
        Description: ${description}`);

    alert("Thank you for banking with us!");
  } else {
    alert("Transfer canceled.");
  }
}

// Main program
let initializeTransaction = prompt(
  "Type 'yes' to initialize the transaction (inserting card):"
);
if (initializeTransaction.toLowerCase() === "yes") {
  if (enterPin()) {
    alert(
      `Welcome ${sendersInfo.names}! 
        Bank: ${sendersInfo.bankName}, 
        Account Number: ${sendersInfo.accountNumber}`
    );

    let transactionType = prompt("Click 1 for withdrawal and 2 for transfer:");
    if (transactionType === "1") {
      withdrawal();
    } else if (transactionType === "2") {
      transfer();
    } else {
      alert("Invalid input. Transaction canceled.");
    }
  }
} else {
  alert("Transaction canceled.");
}
