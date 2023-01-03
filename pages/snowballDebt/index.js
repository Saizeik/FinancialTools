import React, { useState, useEffect } from "react";
import { Navbar } from "/components/navbar.js";

//const [debtBalance, setDebtBalance] = useState();
//const[debtPayments, setDebtPayments]= useState();

export const AccountForm = () => {
  // Initialize state variables
  const [accounts, setAccounts] = useState([]);
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);
  const [payment, setPayment] = useState(0);

  // Event handler for the form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Create the account object and add it to the array
    const account = { name, balance, payment };
    setAccounts([...accounts, account]);

    // Clear the form inputs
    setName("");
    setBalance(0);
    setPayment(0);
    
  };

  const handleRemoveAccount = (index) => {
    setAccounts(accounts.filter((_, i) => i !== index));
  };
 /* useEffect(() => {
   

    // browser code
  
  const result = PayOffDebt();
    // Display the result in the HTML
    document.querySelector("#result").textContent = result;
    // Prevent the form from being submitted
   
  }, []);*/ 

  
    const debts = accounts;
    console.log("debts", debts);
  

  // Sort the debts by balance in ascending order
  const sortedDebts =  ( debts.sort((a, b) =>   ( a.balance - b.balance)))
  console.log("sortedDebts", sortedDebts);
  // Extract the monthly payments from the sorted debts
  const monthlyPayments = sortedDebts.map(debt =>parseFloat(debt.payment))
  
  console.log("monthlyPayments", monthlyPayments);
  const monthlyNames = sortedDebts.map((debt =>  debt.name));
  console.log("sortedNames", monthlyNames);

  const sum = monthlyPayments.reduce((total, pay) => total + pay, 0);
  const finalSum = sum
  const fixedSum = finalSum.toFixed(2);
  const targetSum = sum / 2;
  const targetSumString = targetSum.toFixed(2);
  let runningTotal = 0;
  const payments = [];
  for (const pay of monthlyPayments) {
    runningTotal += pay;
    payments.push(pay);
    if (runningTotal >= targetSum) {
      break;
    }
  }
  console.log("payments", payments); 
 
  const getdebtNames =  (accounts.map((account) => (
{name: account.name,  payment: parseFloat(account.payment)}
  )))

  console.log("getdebtNames", getdebtNames)

  function comparePropertyValues() {
    
    
    const result = [];
    const combined = [];
    let values = [];
    for (let i = 0; i < getdebtNames.length; i++) {
      if (payments.includes(getdebtNames[i].payment)) {
        result.push(getdebtNames[i].name);
     
      }
    }
    console.log('result', result)
    for (let i = 0; i < result.length; i++) {
      combined.push({
        name: result[i],
        monthly: payments[i],
      });
      values.push(` ${combined[i]["name"]}: ` + `$${combined[i]["monthly"]}`);
    }

    return values.join(", ");
  }



  

  

  return (
    <>
    
    <div className ="flex justify-center sm:w-full">
      <section className="bg-coolGray-50 py-6 sm:w-full">
        <div className="container px-9 mx-auto  ml-7  mr-14">
          <div className="flex flex-wrap -m-3">
            <div className=" grow  w-14 md:w-full xl:w-full sm:w-full mr-4 ">
              <div className="bg-green-600 border border-coolGray-100 shadow-dashboard rounded-md w-full sm:w-auto">
                <div className="flex flex justify-center items-center px-4 pt-4 pb-6 border-b border-coolGray-100 "><h4 className=" text-2xl md:text-3xl font-bold text-white text-center">Enter Account Data</h4></div>
                <form onSubmit={handleSubmit} className="sm:w-auto"  >
                <div className ="flex flex  justify-start mb-4 sm:w-auto  ">
                  <label className="text-2lg md:text-2lg font-bold text-white mt-2 ">Account Name
                    <input
                    className="text-2lg md:text-2lg font-bold text-black w-20 "
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </label>
                  </div>
                  
                  <div className ="flex justify-start mb-4 ">
                  <label className="text-2lg md:text-2lg font-bold text-white">
                    Balance:
                    
                    <input
                       className=" text-2lg md:text-2lg font-bold text-black w-20"
                      type="number"
                      value={balance}
                      onChange={(event) => setBalance(event.target.value)}
                    />
                      
                  </label>
                  </div>
                
                  
                  <div className ="flex justify-start mb-4">
                  <label className="text-2lg md:text-2lg font-bold text-white">
                    Min Payment:
                    <input
                       className="text-2lg md:text-2lg font-bold text-black w-20"
                      type="number"
                      value={payment}
                      onChange={(event) => setPayment(event.target.value)}
                    />
                  </label>
                  </div>
                  
                  <button className="text-2lg md:text-2lg font-bold text-white" type="submit" >Add Account</button>
                </form>
                <div>
                  <ul>
                    {accounts.map((account, index) => (
                      <li key={index}>
                        {account.name} (${account.balance}, ${account.payment})
                        <button className="text-2lg md:text-2lg font-bold text-white"
                          onClick={() => handleRemoveAccount(index)}
                        >Delete Account</button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-coolGray-50 py-4">
          <div className="container px-4 mx-auto sm:w-auto">
            <div className="flex flex-wrap -m-3">
              <div className=" mx-auto w-44 sm:w-auto">
                <div className="bg-white border border-coolGray-100 shadow-dashboard rounded-md">
                  <div className="flex flex-col justify-center items-center px-4 pt-8 pb-6 border-b border-coolGray-100">
      <p>You currently pay a total of         
      {<strong> ${fixedSum}</strong>} per month in minimum debt payments.  By cutting your debt in half, you can reduce your total monthly payments to
       {<strong> ${targetSumString} </strong>}
      in total monthly payments. This will bring you financial relief! To pay off your debt as efficiently as possible, start by targeting the accounts with the lowest balances and paying more than the minimum payment.  Here are the lowest
      monthly debt payments based on the lowest account balances to target:
      {<strong>{comparePropertyValues()} </strong>}. All accounts will be shown here if the monthly payments are equal to or less than half your monthly payment total. Target the first of the
      lower balances and pay more than the minimum payment. For example, look at your lowest account balance, focus on paying that off first by paying more than the minimum amount. Once that debt is paid off, move on to the next lowest balance and repeat until your debt is $0.00.</p>     
      </div>
                  </div>
                </div>
              </div>
            </div>
         
        </section>
        
        </div>
    </>
  );
};


export default function Debt() {
  return (
    <>
    <Navbar />
    <div className="py-20 bg-gray-900 radius-for-skewed">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-md mx-auto text-center">
          <h1 className=" text-4xl md:text-5x text-green-600 font-bold">Debts</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Do you want to cut your monthly debt payments in half the snowball
            way?
          </h2>
        </div>
        <AccountForm />
        
      </div>
    </div>
    </>
  );
}
