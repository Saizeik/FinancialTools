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
  const [interestRate, setInterestRate] = useState(0);
  // Event handler for the form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Create the account object and add it to the array
    const account = { name, balance, payment, interestRate };
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
  const sortedDebts = debts.sort((a, b) => b.interestRate - a.interestRate);
  console.log("sortedDebts", sortedDebts);
  // Extract the monthly payments from the sorted debts
  const monthlyPayments = sortedDebts.map((debt) => parseFloat(debt.payment));
  /*const interestRates = sortedDebts.map((debt) =>
    parseFloat(debt.interestRate)
  ); */
  console.log("monthlyPayments", monthlyPayments);
  const monthlyNames = sortedDebts.map((debt) => debt.name);
  console.log("sortedNames", monthlyNames);

  const sum = monthlyPayments.reduce((total, pay) => total + pay, 0);
  const finalSum = sum;
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

  const getdebtNames = accounts.map((account) => ({
    name: account.name,
    payment: parseFloat(account.payment),
  }));

  console.log("getdebtNames", getdebtNames);

  function comparePropertyValues() {
    const result = [];
    const combined = [];
    let values = [];
    for (let i = 0; i < getdebtNames.length; i++) {
      if (payments.includes(getdebtNames[i].payment)) {
        result.push(getdebtNames[i].name);
      }
    }
    console.log("result", result);
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
      <div ClassName="flex justify-center">
        <section ClassName="bg-coolGray-50 py-6 mr-20">
          <div ClassName="container px-9 mx-auto">
            <div ClassName="flex flex-wrap -m-3">
              <div ClassName=" grow w-14 w-full md:w-full xl:w-full sm:w-full  p-1 ">
                <div ClassName="bg-indigo-300 border border-coolGray-100 shadow-dashboard rounded-md ">
                  <div ClassName="flex flex-col justify-center items-center px-4 pt-8 pb-6 border-b border-coolGray-100">
                    <h4 ClassName=" text-2xl md:text-3xl font-bold text-white">
                      Enter Account Data
                    </h4>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div ClassName="flex justify-start mb-2 ">
                      <label ClassName="text-2lg md:text-2lg font-bold text-white mt-2 ">
                        Account Name
                        <input
                          ClassName="text-2lg md:text-2lg font-bold text-black w-20 ml-2"
                          type="text"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                        />
                      </label>
                    </div>

                    <div ClassName="flex justify-start mb-4">
                      <label ClassName="text-2lg md:text-2lg font-bold text-white">
                        Balance:
                        <input
                          ClassName=" text-2lg md:text-2lg font-bold text-black w-20 ml-14 "
                          type="number"
                          value={balance}
                          onChange={(event) => setBalance(event.target.value)}
                        />
                      </label>
                    </div>

                    <div ClassName="flex justify-start mb-4">
                      <label ClassName="text-2lg md:text-2lg font-bold text-white">
                        Min Payment:
                        <input
                          ClassName="text-2lg md:text-2lg font-bold text-black w-20 ml-3.5"
                          type="number"
                          value={payment}
                          onChange={(event) => setPayment(event.target.value)}
                        />
                      </label>
                    </div>

                    <div ClassName="flex justify-start mb-4">
                      <label ClassName="text-2lg md:text-2lg font-bold text-white">
                        Interest Rate:
                        <input
                          ClassName="text-2lg md:text-2lg font-bold text-black w-20 ml-3.5"
                          type="number"
                          value={interestRate}
                          onChange={(event) =>
                            setInterestRate(event.target.value)
                          }
                        />
                      </label>
                    </div>

                    <button
                      ClassName="text-2lg md:text-2lg font-bold text-white"
                      type="submit"
                    >
                      Add Account
                    </button>
                  </form>
                  <div>
                    <ul>
                      {accounts.map((account, index) => (
                        <li key={index}>
                          {account.name} (${account.balance}, ${account.payment}, {account.interestRate}%
                          )
                          <button
                            ClassName="text-2lg md:text-2lg font-bold text-white"
                            onClick={() => handleRemoveAccount(index)}
                          >
                            Delete Account
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section ClassName="bg-coolGray-50 py-4">
          <div ClassName="container px-4 mx-auto">
            <div ClassName="flex flex-wrap -m-3">
              <div ClassName=" mx-auto w-1/2 ">
                <div ClassName="bg-white border border-coolGray-100 shadow-dashboard rounded-md">
                  <div ClassName="flex flex-col justify-center items-center px-4 pt-8 pb-6 border-b border-coolGray-100">
                    <p>
                      You currently pay a total of
                      {<strong> ${fixedSum}</strong>} per month in minimum debt
                      payments. By cutting your debt in half, you can reduce
                      your total monthly payments to
                      {<strong> ${targetSumString} </strong>}
                      in total monthly payments. This will bring you financial
                      relief! To pay off your debt as efficiently as possible,
                      start by targeting the accounts with the highest interest
                      rate(APR) and paying more than the minimum payment. Here
                      are the lowest monthly debt payments based on the highest
                      interest rate account balances to target:
                      {<strong>{comparePropertyValues()}</strong>}. All
                      accounts will be shown here if the monthly payments are
                      equal to or less than half your monthly payment total.
                      Target the first of the higher interest rate balances and pay more than
                      the minimum payment. For example, look at your highest interest rate
                      account balance, focus on paying that off first by paying
                      more than the minimum amount. Once that debt is paid off,
                      move on to the next lowest balance and repeat until your
                      debt is $0.00. You will save more money in the long run by paying off the highest interest rate accounts first.   
                    </p>
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
      <div ClassName="py-20 bg-gray-900 radius-for-skewed">
        <div ClassName="container mx-auto px-6">
          <div ClassName="mb-16 max-w-md mx-auto text-center">
            <h1 ClassName=" text-4xl md:text-5x text-indigo-300 font-bold">Debts</h1>
            <h2 ClassName="text-4xl md:text-5xl font-bold text-white">
              Do you want to cut your monthly debt payments in half the
              avalanche way?
            </h2>
          </div>
          <AccountForm />
        </div>
      </div>
    </>
  );
}
