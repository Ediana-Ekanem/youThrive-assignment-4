// Sender's information
let sender = {
  names: "Ediana Ekanem",
  accountNumber: "3098161276",
  balance: 500000,
  pin: 5567,
  bankName: "Access",
};

// Receiver's information
let receiver = {
  names: "Mike Dickson",
  accountNumber: "2634895601",
  balance: 10000,
  pin: 2267,
  bankName: "uba",
};

// Function to prompt the user for pin and validate it
const enterPin = () => {
  let enteredPin = prompt("Please Enter Your Pin to Proceed:");
  enteredPin = parseInt(enteredPin);
  if (enteredPin === sender.pin) {
    return true;
  } else {
    alert("Incorrect Pin. Transaction is Canceled");
    return false;
  }
};

// Function to perform withdrawal
const withdrawal = () => {
  let amount = prompt("Enter the amount you want to withdraw:");
  amount = parseInt(amount);
  if (isNaN(amount) || amount <= 0) {
    sendersInfo.balance -= amount;
    alert("Invalid amount. Transaction Canceled");
    return;
  }
  if (amount <= sender.balance) {
    sender.balance -= amount;
    alert(`Withdrawal successful! Your new balance is ${sender.balance}`);
  } else {
    alert("Insufficient funds. Transaction Canceled");
  }
};

// Function to perform transfer
const transfer = () => {
  let receiverBankOptions = prompt(`Select receiver's bank:
  1. Access
  2. UBA
  3. Union
  4. GTB
  5. FCMB
  6. First
  7. Zenith
  Enter the corresponding number for the bank:`);

  let receiverBank;
  switch (receiverBankOptions) {
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
      alert("Invalid bank selection. Transaction Canceled.");
      return;
  }

  let receiverAccNumber = prompt("Enter receiver's account number:");
  if (
    receiverAccNumber !== receiver.accountNumber ||
    receiverBank.toLowerCase() !== receiver.bankName.toLowerCase()
  ) {
    alert(
      `Receiver's bank or account number is not correct. Transaction canceled.`
    );
    return;
  }

  let amount = prompt("Kindly enter the transfer amount:");
  amount = parseInt(amount);
  if (isNaN(amount) || amount <= 0) {
    alert("Invalid amount. Transaction Canceled");
    return;
  }

  let description = prompt("Enter description for this transaction");

  alert(
    `Receiver's Bank Name: ${receiver.names} 
      Receiver's Bank: ${receiverBank} 
      Receiver's Account Number: ${receiverAccNumber}`
  );

  let confirmTransfer = confirm(
    `Are you sure you want to transfer ${amount} to ${receiver.names}'s of ${receiverBank} Bank, with account number of ${receiverAccNumber}, Description: ${description} ?
      
Please Click Ok proceed and Cancel to terminate this transaction`
  );

  if (confirmTransfer) {
    if (amount <= sender.balance) {
      sender.balance -= amount;
      receiver.balance += amount;

      alert(`Transfer successful!
          Sender's previous balance: ${sender.balance + amount}
          Sender's current balance: ${sender.balance}
  
          Receiver's previous balance: ${receiver.balance - amount}
          Receiver's current balance: ${receiver.balance}
          Description: ${description}`);

      alert("Thank you for banking with us!");
    } else {
      alert("Insufficient funds. Transaction canceled.");
    }
  } else {
    alert("Transfer canceled");
  }
};

// Main program
let initializeTransaction = prompt(
  "Type 'yes' to initialize the transaction (inserting card):"
);

if (initializeTransaction.toLowerCase() === "yes") {
  if (enterPin()) {
    alert(`Welcome ${sender.names}
      Bank: ${sender.bankName}
      Account Number: ${sender.accountNumber}`);

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
  alert("Transaction canceled");
}
