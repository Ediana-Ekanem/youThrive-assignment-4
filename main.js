// Sender's information
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
  bankName: "uba",
};

// Function to prompt the user for pin and validate it
const enterPin = () => {
  let enteredPin = prompt("Please enter your PIN to proceed:");
  if (parseInt(enteredPin) === sendersInfo.pin) {
    return true;
  } else {
    alert("Incorrect PIN. Transaction canceled.");
    return false;
  }
};

// Function to perform withdrawal
const withdrawal = () => {
  let amount = prompt("Enter the amount you want to withdraw:");
  amount = parseInt(amount);

  // Check if the entered amount is not a number or is less than or equal to 0
  if (isNaN(amount) || amount <= 0) {
    alert("Invalid amount. Transaction Canceled");
    return;
  }

  if (amount <= sendersInfo.balance) {
    sendersInfo.balance -= amount;
    alert(`Withdrawal successful! Your new balance is ${sendersInfo.balance}`);
  } else {
    alert("Insufficient funds. Transaction canceled.");
  }
};

// Function to perform transfer
const transfer = () => {
  let receiverBankOption = prompt(`Select receiver's bank:
1. Access
2. UBA
3. Union
4. GTB
5. FCMB
6. First
7. Zenith
Enter the corresponding number for the bank:`);

  let receiverBank;
  switch (receiverBankOption) {
    case "1":
      receiverBank = "Access";
      break;
    case "2":
      receiverBank = "UBA";
      break;
    case "3":
      receiverBank = "Union";
      break;
    case "4":
      receiverBank = "GTB";
      break;
    case "5":
      receiverBank = "FCMB";
      break;
    case "6":
      receiverBank = "First";
      break;
    case "7":
      receiverBank = "Zenith";
      break;
    default:
      alert("Invalid bank selection. Transaction canceled.");
      return;
  }

  let receiverAccNumber = prompt("Enter receiver's account number:");

  // Check if receiver's account number and bank are correct
  if (
    receiverAccNumber !== receiverInfo.accountNumber ||
    receiverBank.toLowerCase() !== receiverInfo.bankName.toLowerCase()
  ) {
    alert(
      `Receiver's bank or account number is not correct. 
  Transaction canceled.`
    );
    return;
  }

  // Display receiver details for confirmation
  alert(`Receiver's Bank Name: ${receiverInfo.names}
Receiver's Bank: ${receiverBank}
Receiver's Account Number: ${receiverAccNumber}`);

  let amount = prompt("Kindly enter the transfer amount:");
  amount = parseInt(amount);

  // Validate the amount
  if (isNaN(amount) || amount <= 0) {
    alert("Invalid amount. Transaction canceled.");
    return;
  }
  let description = prompt("Enter description for the transfer:");

  // Confirm transaction with transfer details
  let confirmTransfer = confirm(
    `Are you sure you want to transfer ${amount} 
to ${receiverInfo.names}'s of ${receiverBank} Bank
with account number of ${receiverAccNumber}
Description: ${description}  ?

Please click OK to proceed or Cancel to terminate this transaction.`
  );
  if (confirmTransfer) {
    // Deduct from sender's balance
    if (amount <= sendersInfo.balance) {
      sendersInfo.balance -= amount;
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
      alert("Insufficient funds. Transaction canceled.");
    }
  } else {
    alert("Transfer canceled.");
  }
};

// Main program
let initializeTransaction = prompt(
  "Type 'yes' to initialize the transaction (inserting card):"
);
if (initializeTransaction.toLowerCase() === "yes") {
  if (enterPin()) {
    alert(
      `Welcome ${sendersInfo.names}
Bank: ${sendersInfo.bankName}
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
