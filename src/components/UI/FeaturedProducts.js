import Link from "next/link";

function FeatureProducts({ products }) {
  if (!products) {
    return <div>Loading...</div>;
  }
  // console.log("pro", products);
  return (
    <div className="my-20 mx-20 ">
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold ">Featured Products</h1>
        <p className="text-lg mt-2">Check & Get Your Desired Product!</p>
      </div>
      {/* Processor */}
      <div>
        <div>
          <h1 className="text-2xl bg-success w-48  text-white pl-6  p-2 rounded-tr-2xl font-semibold ">
            Processor
          </h1>
          <div className="border-b-4  border-success "></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <>
              {product?.categoryName === "Processor" && (
                <>
                  <Link href={`/products/${product?._id}`}>
                    <div className="">
                      <div className=" p-5 rounded-2xl ">
                        <picture>
                          <img
                            className="w-48"
                            src={product?.imageUrl}
                            alt="motherboard"
                          />
                        </picture>
                        <h3 className="text-lg font-semibold">
                          {product?.name}
                          <div className="badge badge-accent ml-2">
                            {product?.status}
                          </div>
                        </h3>
                        <p>Category : {product?.categoryName}</p>
                        <p>Price : {product?.price}</p>

                        <p>Rating : {product?.ratings}</p>
                      </div>
                    </div>
                  </Link>
                </>
              )}
            </>
          ))}
        </div>
      </div>
      {/* Motherboard */}
      <div>
        <div>
          <h1 className="text-2xl bg-success w-48  text-white pl-6  p-2 rounded-tr-2xl font-semibold ">
            Motherboard
          </h1>
          <div className="border-b-4  border-success "></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <>
              {product?.categoryName === "Motherboard" && (
                <>
                  <Link href={`/products/${product?._id}`} key={product?._id}>
                    <div className="">
                      <div className=" p-5 rounded-2xl ">
                        <picture>
                          <img
                            className="w-48"
                            src={product?.imageUrl}
                            alt="motherboard"
                          />
                        </picture>
                        <h3 className="text-lg font-semibold">
                          {product?.name}
                          <div className="badge badge-accent ml-2">
                            {product?.status}
                          </div>
                        </h3>
                        <p>Category : {product?.categoryName}</p>
                        <p>Price : {product?.price}</p>

                        <p>Rating : {product?.ratings}</p>
                      </div>
                    </div>
                  </Link>
                </>
              )}
            </>
          ))}
        </div>
      </div>
      {/* RAM */}
      <div>
        <div>
          <h1 className="text-2xl bg-success w-48  text-white pl-6  p-2 rounded-tr-2xl font-semibold ">
            RAM
          </h1>
          <div className="border-b-4  border-success "></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <>
              {product?.categoryName === "RAM" && (
                <>
                  <Link href={`/products/${product?._id}`} key={product?._id}>
                    <div className="">
                      <div className=" p-5 rounded-2xl ">
                        <picture>
                          <img
                            className="w-48"
                            src={product?.imageUrl}
                            alt="motherboard"
                          />
                        </picture>
                        <h3 className="text-lg font-semibold">
                          {product?.name}
                          <div className="badge badge-accent ml-2">
                            {product?.status}
                          </div>
                        </h3>
                        <p>Category : {product?.categoryName}</p>
                        <p>Price : {product?.price}</p>

                        <p>Rating : {product?.ratings}</p>
                      </div>
                    </div>
                  </Link>
                </>
              )}
            </>
          ))}
        </div>
      </div>
      {/* Power Supply */}
      <div>
        <div>
          <h1 className="text-2xl bg-success w-48  text-white pl-6  p-2 rounded-tr-2xl font-semibold ">
            Power Supply
          </h1>
          <div className="border-b-4  border-success "></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <>
              {product?.categoryName === "Power Supply Unit" && (
                <>
                  <Link href={`/products/${product?._id}`} key={product?._id}>
                    <div className="">
                      <div className=" p-5 rounded-2xl ">
                        <picture>
                          <img
                            className="w-48"
                            src={product?.imageUrl}
                            alt="motherboard"
                          />
                        </picture>
                        <h3 className="text-lg font-semibold">
                          {product?.name}
                          <div className="badge badge-accent ml-2">
                            {product?.status}
                          </div>
                        </h3>
                        <p>Category : {product?.categoryName}</p>
                        <p>Price : {product?.price}</p>

                        <p>Rating : {product?.ratings}</p>
                      </div>
                    </div>
                  </Link>
                </>
              )}
            </>
          ))}
        </div>
      </div>
      {/* Storage Device */}
      <div>
        <div>
          <h1 className="text-2xl bg-success w-60  text-white pl-6  p-2 rounded-tr-2xl font-semibold ">
            Storage Device
          </h1>
          <div className="border-b-4  border-success "></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <>
              {product?.categoryName === "Storage Device" && (
                <>
                  <Link href={`/products/${product?._id}`} key={product?._id}>
                    <div className="">
                      <div className=" p-5 rounded-2xl ">
                        <picture>
                          <img
                            className="w-48"
                            src={product?.imageUrl}
                            alt="motherboard"
                          />
                        </picture>
                        <h3 className="text-lg font-semibold">
                          {product?.name}
                          <div className="badge badge-accent ml-2">
                            {product?.status}
                          </div>
                        </h3>
                        <p>Category : {product?.categoryName}</p>
                        <p>Price : {product?.price}</p>

                        <p>Rating : {product?.ratings}</p>
                      </div>
                    </div>
                  </Link>
                </>
              )}
            </>
          ))}
        </div>
      </div>
      {/* Monitor */}
      <div>
        <div>
          <h1 className="text-2xl bg-success w-48  text-white pl-6  p-2 rounded-tr-2xl font-semibold ">
            Monitor
          </h1>
          <div className="border-b-4  border-success "></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <>
              {product?.categoryName === "Monitor" && (
                <>
                  <Link href={`/products/${product?._id}`} key={product?._id}>
                    <div className="">
                      <div className=" p-5 rounded-2xl ">
                        <picture>
                          <img
                            className="w-48"
                            src={product?.imageUrl}
                            alt="motherboard"
                          />
                        </picture>
                        <h3 className="text-lg font-semibold">
                          {product?.name}
                          <div className="badge badge-accent ml-2">
                            {product?.status}
                          </div>
                        </h3>
                        <p>Category : {product?.categoryName}</p>
                        <p>Price : {product?.price}</p>

                        <p>Rating : {product?.ratings}</p>
                      </div>
                    </div>
                  </Link>
                </>
              )}
            </>
          ))}
        </div>
      </div>
      {/* GPU */}
      <div>
        <div>
          <h1 className="text-2xl bg-success w-48  text-white pl-6  p-2 rounded-tr-2xl font-semibold ">
            GPU
          </h1>
          <div className="border-b-4  border-success "></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <>
              {product?.categoryName === "GPU" && (
                <>
                  <Link href={`/products/${product?._id}`} key={product?._id}>
                    <div className="">
                      <div className=" p-5 rounded-2xl ">
                        <picture>
                          <img
                            className="w-48"
                            src={product?.imageUrl}
                            alt="motherboard"
                          />
                        </picture>
                        <h3 className="text-lg font-semibold">
                          {product?.name}
                          <div className="badge badge-accent ml-2">
                            {product?.status}
                          </div>
                        </h3>
                        <p>Category : {product?.categoryName}</p>
                        <p>Price : {product?.price}</p>

                        <p>Rating : {product?.ratings}</p>
                      </div>
                    </div>
                  </Link>
                </>
              )}
            </>
          ))}
        </div>
      </div>
      {/* Mouse */}
      <div>
        <div>
          <h1 className="text-2xl bg-success w-48  text-white pl-6  p-2 rounded-tr-2xl font-semibold ">
            Mouse
          </h1>
          <div className="border-b-4  border-success "></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <>
              {product?.categoryName === "Mouse" && (
                <>
                  <Link href={`/products/${product?._id}`} key={product?._id}>
                    <div className="">
                      <div className=" p-5 rounded-2xl ">
                        <picture>
                          <img
                            className="w-48"
                            src={product?.imageUrl}
                            alt="motherboard"
                          />
                        </picture>
                        <h3 className="text-lg font-semibold">
                          {product?.name}
                          <div className="badge badge-accent ml-2">
                            {product?.status}
                          </div>
                        </h3>
                        <p>Category : {product?.categoryName}</p>
                        <p>Price : {product?.price}</p>

                        <p>Rating : {product?.ratings}</p>
                      </div>
                    </div>
                  </Link>
                </>
              )}
            </>
          ))}
        </div>
      </div>
      {/* Keyboard */}
      <div>
        <div>
          <h1 className="text-2xl bg-success w-48  text-white pl-6  p-2 rounded-tr-2xl font-semibold ">
            Keyboard
          </h1>
          <div className="border-b-4  border-success "></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <>
              {product?.categoryName === "Keyboard" && (
                <>
                  <Link href={`/product/${product?.name}`} key={product?._id}>
                    <div className="">
                      <div className=" p-5 rounded-2xl ">
                        <picture>
                          <img
                            className="w-48"
                            src={product?.imageUrl}
                            alt="motherboard"
                          />
                        </picture>
                        <h3 className="text-lg font-semibold">
                          {product?.name}
                          <div className="badge badge-accent ml-2">
                            {product?.status}
                          </div>
                        </h3>
                        <p>Category : {product?.categoryName}</p>
                        <p>Price : {product?.price}</p>

                        <p>Rating : {product?.ratings}</p>
                      </div>
                    </div>
                  </Link>
                </>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureProducts;
