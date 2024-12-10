import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Page({ params }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    // If the user is not logged in, show a login message
    return (
      <div>
        <p className="text-red-600 text-lg font-bold">You need to log in to view the details.</p>
        <a className="text-sm font-bold" href="/auth/login">Go to Login</a>
      </div>
    );
  }

  const slug = (await params).slug;
  const data = await fetch('http://localhost:3000/juice/'+slug);
  const juiceDetail = await data.json();
  const result = await juiceDetail.result;

  return (
    <div>
      <h4 className="text-3xl mt-2 mx-4 font-bold">Detial Juice</h4>
      <div className="grid grid-cols-2 bg-gray-300 text-gray-800 gap-0 my-5 mx-5">
          <div className="font-semibold text-lg text-white bg-blue-600 p-2">
            <h4>Name</h4>
          </div>
          <div className="font-semibold text-lg text-white bg-blue-600 p-2">
            Value
          </div>

          <div className="text-sm text-gray-800 p-2">
            Brand Code
          </div>
          <div className="text-sm text-gray-800 p-2">
            {result.brand_code}
          </div>

          <div className="text-sm text-gray-800 p-2">
            Brand
          </div>
          <div className="text-sm text-gray-800 p-2">
          {result.brand}
          </div>

          <div className="text-sm text-gray-800 p-2">
            Description
          </div>
          <div className="text-sm text-gray-800 p-2">
          {result.description}
          </div>

      </div>
    </div>
  )
}
