import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-500 h-screen text-white">
        <div className="bg-blue-600 p-3">
          <h3>Welcome LAP Marketplace</h3>
        </div>
      <div className="flex flex-wrap justify-center">
        <Link href='/juice/'>
            <div className="bg-purple-600 text-white p-2 rounded-md mt-20 mx-20 hover:bg-purple-600 hover:text-white max-w-40 min-h-40 drop-shadow-md hover:drop-shadow-2xl text-center">
              <h3 className="font-bold mt-12">Open Juice Shop</h3>
              <p className="text-xs text-yellow-100 mt-2">Duis sint ad duis aliqua.</p>
            </div>
          </Link>
          <Link href='/sweet/'>
            <div className="bg-blue-400 text-white p-2 rounded-md mt-20 mx-20 hover:bg-blue-600 hover:text-white max-w-40 min-h-40 drop-shadow-md hover:drop-shadow-2xl text-center">
              <h3 className="font-bold mt-12">Open Sweet Shop</h3>
              <p className="text-xs text-yellow-100 mt-2">Duis sint ad duis aliqua.</p>
            </div>
          </Link>
      </div>
    </div>
  );
}
