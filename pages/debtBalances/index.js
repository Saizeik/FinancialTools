import React from 'react';

const findLowestDebtBalances = (debts) => {
    // Sort the debts by balance in ascending order
    const sortedDebts = debts.sort((a, b) => a.balance - b.balance);
  
    // Extract the balances from the sorted debts
    const balances = sortedDebts.map((debt) => debt.balance);
  
    // Calculate the total sum of the balances
    const totalSum = balances.reduce((total, balance) => total + balance, 0);
  
    // Calculate the target sum that is half of the total sum
    const targetSum = totalSum / 2;
  
    // Initialize a running total and an array to store the balances that meet the target sum
    let runningTotal = 0;
   let lowestBalances = [];
  
    // Iterate through the sorted balances and add them to the running total and the lowestBalances array
    // until the running total reaches or exceeds the target sum
    for (const balance of balances) {
      runningTotal += balance;
      lowestBalances.push(balance);
      if (runningTotal >= targetSum) {
        break;
      }
    }
  
    return lowestBalances;
  }





const MyComponent = () => {
  const [debts, setDebts] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Extract the debt balances and monthly payments from the form fields
    const balances = event.target.elements.balances.value.split(',').map(Number);
    const monthlyPayments = event.target.elements.monthlyPayments.value.split(',').map(Number);

    // Create an array of debts from the balances and monthly payments
    const newDebts = balances.map((balance, index) => ({ balance, monthlyPayment: monthlyPayments[index] }));

    // Set the debts state to the new debts
    setDebts(newDebts);
  };

  const lowestDebtBalances = findLowestDebtBalances(debts);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Debt balances:
        <input type="text" name="balances" />
      </label>
      <br />
      <label>
        Monthly payments:
        <input type="text" name="monthlyPayments" />
      </label>
      <br />
      <div class="bg-purple-400 w-1/12">  
      <button className="button" type="submit" onClick={()=>{findLowestDebtBalances(debts)}}>Submit</button>
      </div>
      <div>
      <h6 className="text-4xl font-bold">Lowest Debt Balances: {lowestDebtBalances}</h6>
      </div>
      </form>
    
  );

}
export default MyComponent;