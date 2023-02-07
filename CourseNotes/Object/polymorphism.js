//super class
// polymorphism is overwrite a method from the parent object in the children object
function Account(agency, account, balance){
    this.account = account;
    this.agency = agency;
    this.balance = balance;
}
Account.prototype.withdraw = function(amount){
    if(amount<=this.balance){
        this.balance -= amount;
        this.showBalance();
        return amount;
    }
    console.log('This amount is greater than your balance');
}
Account.prototype.deposit = function(amount){
    this.balance += amount;
    this.showBalance();
}
Account.prototype.showBalance = function(){
    console.log(`The balance now is: ${'$'+this.balance.toFixed(2)}`);
}
function CurrentAccount(agency, account, balance, limit){
    Account.call(this, agency, account, balance);
    this.limit = limit;
}
CurrentAccount.prototype = Object.create(Account.prototype);
CurrentAccount.prototype.constructor = CurrentAccount;
CurrentAccount.prototype.withdraw = function(amount){ // it's a overwrite of the method withdraw of the Account
    if(amount <= (this.balance+this.limit)){
        this.balance -= amount;
        this.showBalance();
        return
    }
}
const account1 = new Account(08, 541, 78);
account1.deposit(20);
account1.withdraw(10);
const currentAccount1 = new CurrentAccount(10, 678, 0, 100);
currentAccount1.withdraw(50);