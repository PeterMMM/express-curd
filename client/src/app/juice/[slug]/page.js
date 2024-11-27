export default async function Page({ params }) {
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
