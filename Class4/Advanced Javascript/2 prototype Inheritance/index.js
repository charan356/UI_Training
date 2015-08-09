//Prototypes – Advanced JavaScript Tutorial

/*
 Prototypes are a must know for any JavaScript developer.
 As you may know, JavaScript is classless. Instead, it uses prototypes.
 However, this subject confuses a lot of people.  In this tutorial,
 we’ll go more in-depth of what prototypes are. First, we’ll learn how to use them
 and then why you should use them.

 */

function BankAccount( name, type, amount )
{
    this.name           = name;
    this.accountType    = type;
    this.amount         = amount;
    this.getAccountType = function getAccountType(){
        return this.accountType;
    };
}

var JacksBankAccount = new BankAccount( 'Jack', 'Checkings', 20 );




function BankAccount( name, type, amount )
{
    this.name           = name;
    this.accountType    = type;
    this.amount         = amount;
}

BankAccount.prototype.getAccountType = function getAccountType(){
    return this.accountType;
}



//Inheritance – Advanced JavaScript Tutorial

function BankAccount()
{
    this.status = true;
}
BankAccount.prototype.getStatus = function getAccountType(){
    return this.status;
};

function SavingsAccount( name, amount )
{
    this.name   = name;
    this.amount = amount;
}

SavingsAccount.prototype = new BankAccount(); // Inheritance

var JacksAccount = new SavingsAccount( 'Jack', 20 );
document.write( "Is " + JacksAccount.name + "'s bank account active? " + JacksAccount.getStatus() );