export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-16 p-2 px-4 text-white border-b-2 border-gray-700 bg-stone-900">
      <ul className="flex">
        <li className="ml-4">Home</li>
        <li className="ml-4">About</li>
        <li className="ml-4">Contact</li>
      </ul>
    </div>
  );
}
