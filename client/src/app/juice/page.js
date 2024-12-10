import Link from "next/link";
import Popular from '@/app/components/popular';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div>
        <p className="text-red-600 text-lg font-bold">Access Denied</p>
        <a className="text-sm font-bold" href="/auth/login">Go to Login</a>
      </div>
    );
  }

  let data = await fetch('http://localhost:3000/juice');
  let jsonData = await data.json();
  let results = await jsonData.result;
  const userInfo = await session.user.user;
  console.log("data-"+JSON.stringify(results));
  console.log("session-"+JSON.stringify(session));
  console.log("session.user.name-"+session.user.user.name);
  return (
    <>
        <h4 className="text-3xl mt-2 mx-4 font-bold">Welcome to Juice Store, {userInfo.name} !</h4>
        <div className="grid grid-cols-3 bg-gray-300 text-gray-800 gap-0 my-10 mx-5">
            <div className="font-semibold text-lg text-white bg-blue-600 p-2">
              <h4>Brand Code</h4>
            </div>
            <div className="font-semibold text-lg text-white bg-blue-600 p-2">
              Brand
            </div>
            <div className="font-semibold text-lg text-white bg-blue-600 p-2">
              Action
            </div>

            {results.map((item) => (
              <div className="col-span-3 grid grid-cols-3" key={item._id}>
                <div className="text-sm text-gray-800 p-2">
                  <h4>{item.brand_code}</h4>
                </div>
                <div className="text-sm text-gray-800 p-2">
                  {item.brand}
                </div>
                <div className="text-sm text-gray-800 p-2">
                  <Link href={'/juice/'+item.brand_code}>
                    <button className='bg-purple-600 text-white p-2 rounded-md hover:bg-purple-900 hover:text-white'>View Detail</button>
                  </Link>
                  <button className='bg-purple-700 text-white p-2 rounded-md hover:bg-purple-900 hover:text-white ml-5'>Order Now</button>
                </div>
              </div>
            ))}

        </div>

        <Popular />
    </>
  )
}
