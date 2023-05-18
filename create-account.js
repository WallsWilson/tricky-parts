// Write a function called createAccount which creates a bank account given a PIN number and an initial deposit amount. The return value should be an object with four methods on it:

// checkBalance: Given the correct PIN, return the current balance. (If the PIN is invalid, return “Invalid PIN.”)
// deposit: Given the correct PIN and a deposit amount, increment the account balance by the amount. (If the PIN is invalid, return “Invalid PIN.”)
// withdraw: Given the correct PIN and a withdrawal amount, decrement the account balance by the amount. You also shouldn’t be able to withdraw more than you have. (If the PIN is invalid, return “Invalid PIN.”)
// changePin: Given the old PIN and a new PIN, change the PIN number to the new PIN. (If the old PIN is invalid, return “Invalid PIN.”)


function createAccount(pin, amount) {
    let balance = amount;
    let deposit = (pin, amount) => {
        if (pin === 1111) {
            balance += amount;
            return balance;
            }   
            else {
                return "Invalid PIN";
                }
                }
                let withdraw = (pin, amount) => {
                    if (pin === 1111) {
                        if (balance - amount > 0) {
                            balance -= amount;
                            return balance;
                            }
                            else {
                                return "Insufficient funds";
                                }
                                }
                                else {
                                    return "Invalid PIN";
                                    }
                                    }
                                    let changePin = (oldPin, newPin) => {
                                        if (oldPin === 1111) {
                                            pin = newPin;
                                            return pin;
                                            }
                                            else {
                                                return "Invalid PIN";
                                                }
                                                }
                                                return {
                                                    checkBalance: () => balance,
                                                    deposit: deposit,
                                                    withdraw: withdraw,
                                                    changePin: changePin
                                                    }

}

module.exports = { createAccount };
