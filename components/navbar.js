import Link from 'next/link';

export const Navbar = () => (
    <nav>
      <ul ClassName="flex justify-between items-center p-4">
      <li ClassName="mr-6">
          <Link href="/index" as="/">
            <a ClassName="text-white-500 hover:text-green-600">Home</a>
          </Link>
        </li>
         <li ClassName="mr-6">
          <Link href="/salarySpender" as="/salarySpender">
            <a ClassName="text-white-500 hover:text-green-600">Salary Spender</a>
          </Link>
        </li>
        <li ClassName="mr-6">
          <Link href="/snowballDebt" as="/snowballDebt">
            <a ClassName="text-white-500 hover:text-green-600">Cut Debt Snowball Method</a>
          </Link>
        </li>
        <li ClassName="mr-6">
          <Link href="/avalancheDebt" as="/avalanchelDebt">
            <a ClassName="text-white-500 hover:text-green-600">Cut Debt Avalanche Method</a>
          </Link>
        </li>
      </ul>
    </nav>
  );