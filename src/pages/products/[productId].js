import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";

const ProductDetails = ({ product }) => {
  // console.log(product?.keys[0]);
  const { keys } = product;
  return (
    <div className="mx-20">
      <Head>
        <title>Details-MasterTECH</title>
      </Head>
      <div className="mt-10">
        <div className="grid grid-cols-2 gap-10">
          <div className="col-span-1">
            <picture>
              <img src={product?.imageUrl} alt="image" />
            </picture>
          </div>
          <div className="col-span-1">
            <h1 className="text-2xl">{product?.name}</h1>
            <p>
              {product?.ratings == 4.5 ? (
                <>
                  <div className="rating rating-md rating-half">
                    <input
                      type="radio"
                      name="rating-10"
                      className="rating-hidden"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-1"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-2"
                    />
                  </div>
                  <span className="text-2xl ml-3">
                    {product?.reviews.length} reviews
                  </span>
                </>
              ) : (
                <></>
              )}
            </p>
            <p>
              {product?.ratings > 4.5 ? (
                <>
                  <div className="rating rating-md rating-half">
                    <input
                      type="radio"
                      name="rating-10"
                      className="rating-hidden"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-1"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-2"
                    />
                  </div>
                  <span className="text-2xl ml-3">
                    {product?.reviews.length} reviews
                  </span>
                </>
              ) : (
                <></>
              )}
            </p>
            <h1 className="mt-5">
              <span className="text-lg bg-success uppercase text-white p-2 rounded-lg">
                {product?.status}
              </span>{" "}
            </h1>
            <div className="mt-5">
              <h1 className="text-3xl font-bold">Quick Overview</h1>
              <div className="ml-5 mt-2 text-lg">
                <li>Model: {keys[0]?.model}</li>
                <li>Cache Memory: {keys[0]?.cache}</li>
                <li>Specification: {keys[0]?.specification}</li>
                <li>Speed: {keys[0]?.speed}</li>
                <li>Type: {keys[0]?.type}</li>
              </div>

              <h2 className="text-xl bg-gray-400 mt-5 p-3 w-2/4 text-white font-bold rounded-lg">
                Price Tk {product?.price}
              </h2>
              <h1 className="text-xl mt-5">To See description below</h1>
            </div>
          </div>
        </div>
        <div className="lg:w-[1440px] mx-auto">
          <h1 className="text-2xl font-bold mt-5">Description :</h1>
          {product?.description?.map((d, i) => (
            <p className="mt-5 text-xl " key={i}>
              {d?.details}
            </p>
          ))}
        </div>
        <div className="lg:w-[1440px] mx-auto lg:mt-10">
          <h1 className="text-5xl font-bold text-center">Reviews :</h1>
          {product?.reviews?.map((d, i) => (
            <>
              <div className="chat chat-start text-2xl my-10">
                <div className="chat-image avatar">
                  <div className="w-20 rounded-full">
                    <picture>
                      {" "}
                      <img src={d?.user} alt="image" />
                    </picture>
                  </div>
                </div>
                <div className="chat-header text-xl">
                  Daniel Strong
                  <time className="text-lg ml-2 opacity-50">2 hours ago</time>
                </div>
                <div className="chat-bubble">{d?.comment}</div>
              </div>
              <hr />
            </>
          ))}
        </div>

        <div className="my-10">
          <h1 className="text-2xl mb-5 font-bold">Your Comments </h1>
          <div className="justify-start items-center flex w-full max-w-xs">
            <div className=" avatar">
              <div className="w-20 rounded-full">
                <picture>
                  {" "}
                  <img
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg"
                    alt="image"
                  />
                </picture>
              </div>
            </div>
            <div className="ml-10">
              <label className="label">
                <span className="label-text">Mostafizur Rahman</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.URL}/products`);
  const products = await res.json();

  const paths = products?.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`${process.env.URL}/products/${params.productId}`);
  const data = await res.json();

  return {
    props: {
      product: data,
    },
    revalidate: 3,
  };
};
