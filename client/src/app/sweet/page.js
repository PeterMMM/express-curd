"use client";

import { useQuery } from "@tanstack/react-query";
import getSweets from "../api/getSweets";
import Link from "next/link";


export default function Page() {

  const { data, isLoading, isError } = useQuery({
    queryFn: getSweets(),
    queryKey: ['sweets'],
  });

  if (isLoading) {
    return <p>Loading data...</p>;
  }

  if (isError) {
    return <p>Error... api fail for some reason!</p>;
  }

  return (
    <>
        <h4 className="text-3xl mt-2 mx-4 font-bold">Welcome to Sweet Store !</h4>
        <div className="grid grid-cols-3 bg-gray-300 text-gray-800 gap-0 my-10 mx-5">
            <div className="font-semibold text-lg text-white bg-blue-300 p-2">
              <h4>Sweet Code</h4>
            </div>
            <div className="font-semibold text-lg text-white bg-blue-300 p-2">
              Sweet Name
            </div>
            <div className="font-semibold text-lg text-white bg-blue-300 p-2">
              Sweet Action
            </div>

            {data.result.filter((item) => item.brand).map((item) => (
              <div className="col-span-3 grid grid-cols-3" key={item._id}>
                <div className="text-sm text-gray-800 p-2">
                  <h4>{item?.brand_code}</h4>
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
  </>
  );
}
