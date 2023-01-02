import React, { useState } from "react";
import { Navbar } from "/components/navbar.js";

export default function Home() {
  const [monthlySpending, setMonthlySpending] = useState(0);
  const [monthlyMortgageRent, setMonthlyMortgageRent] = useState(0);
  const [savings, setSavings] = useState(0);
  const[debt, setDebt]= useState(0);
  let spending = parseFloat(monthlySpending);
  let payment = parseFloat(monthlyMortgageRent);
  let savingTotal = parseFloat(savings);
  let debtTotal = parseFloat(debt);

  let suggestedMonthlySalary = spending + payment + savingTotal + debtTotal 
  let sMonthlySalary = suggestedMonthlySalary.toLocaleString();
  let suggestedAnnualSalary = suggestedMonthlySalary * 12 
  let sAnnualSalary = suggestedAnnualSalary.toLocaleString();
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Create the account object and add it to the array
 

    // Clear the form inputs
    setMonthlySpending(0);
    setMonthlyMortgageRent(0);
    setSavings(0);
    setDebt(0);

    // Display the result in the HTML
    document.querySelector('#output1').textContent = `
    Suggested Monthly Income: $ ${sMonthlySalary}
    
    `|| null || {};

    document.querySelector('#output2').textContent = `
  Suggested Annual Salary:  $ ${sAnnualSalary}
    `|| null || {};
  }
 


 
  

 

  return (
  <>
  <Navbar />
  <div className="py-20 bg-gray-900 radius-for-skewed">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-md mx-auto text-center">
  
  <h1 className="text-4xl md:text-6xl font-bold text-white text-3xl font-bold underline">Salary Spender</h1>
  </div>
  <section className="bg-coolGray-50 py-4">
          <div className="container justify-center mx-auto">
            <div className="flex flex-wrap -m-3">
              <div className="w-full mx-auto md:w-1/2 xl:w-1/4 p-3">
                <div className="bg-green-600  border border-coolGray-100 shadow-dashboard rounded-md ">
                  <div className="flex flex-col justify-center items-center  px-4 pt-8 pb-6 border-b border-coolGray-100 ">
<form onSubmit={handleSubmit}>
  <div className="block flex text-2lg md:text-2lg font-bold text-white bg-blue-400 border rounded mb-2  w-1/2 "><label className=" p-2"  for="monthlySpending">Monthly Spending:
  <input className="text-2md md:text-2md font-bold text-black border rounded w-3/4" type ="number" onChange={(e) => setMonthlySpending(e.target.value)}
    id="monthlySpending" name="SpendingForm" /></label></div>
  <div className="block flex text-2lg md:text-2lg font-bold text-white bg-red-400 border rounded mb-2  w-1/2 ">
  <label className=" p-2" for="monthlyMortgageRent">Monthly Housing:
  <input className="text-2md md:text-2md font-bold text-black border rounded w-3/4" type ="number" onChange={(e) => setMonthlyMortgageRent(e.target.value)}
    id="monthlyMortgageRent" name="SpendingForm" /></label></div>
  <div className="block flex text-2lg md:text-2lg font-bold text-white bg-green-400 border rounded mb-2  w-1/2 ">
<label className=" p-2" for="savingsDebt">Monthly Savings:
  <input className="text-2md md:text-2md font-bold text-black border rounded w-3/4" onChange={(e) => setSavings(e.target.value)}
    type="number" id="savingsDebt" name="SpendingForm" /></label></div>
    <div className="block flex text-2lg md:text-2lg font-bold text-white bg-yellow-400 border rounded mb-2  w-1/2 ">
<label className=" p-2" for="savingsDebt">Monthly Debt:
  <input className="text-2md md:text-2md font-bold text-black border rounded w-3/4" onChange={(e) => setDebt(e.target.value)}
    type="number" id="debt" name="SpendingForm" /></label></div>
 <div className="block flex text-2lg md:text-2lg font-bold text-white bg-purple-400 border rounded mb-2  w-1/2 ">  
<button className=" text-white text-center rounded-full py-2 px-12" type="submit">Submit</button></div> 
</form>
</div>
</div>
</div>
</div>
</div>
<div className ="flex items-center h-12 mx-auto mt-6   3/4"><h6 id="output1" className="text-2xl md:text-4xl font-bold text-white mx-auto"></h6></div><div className ="flex items-center h-12 mx-auto mt-6  3/4"><h6 id="output2" className="text-2xl md:text-4xl font-bold text-white mx-auto  "></h6></div>
  
</section>
  
  </div>
  </div>
  </>
  )
}
