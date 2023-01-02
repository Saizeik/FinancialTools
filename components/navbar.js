import Link from 'next/link';

export const Navbar = () => (
    <nav>
      <ul className="flex justify-between items-center p-4">
      <li className="mr-6">
          <Link href="/index" as="/">
            <a className="text-white-500 hover:text-green-600">Home</a>
          </Link>
        </li>
         <li className="mr-6">
          <Link href="/salarySpender" as="/salarySpender">
            <a className="text-white-500 hover:text-green-600">Salary Spender</a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/snowballDebt" as="/snowballDebt">
            <a className="text-white-500 hover:text-green-600">Cut Debt Snowball Method</a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/avalancheDebt" as="/avalanchelDebt">
            <a className="text-white-500 hover:text-green-600">Cut Debt Avalanche Method</a>
          </Link>
        </li>
      </ul>
    </nav>
  );