import Link from "next/link";

function Product({ categories }) {
  return (
    <div>
      <div className="flex gap-10">
        {categories?.map((category) => (
          <div
            key={category?._id}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <picture>
                <img src={category?.imageUrl} alt="product" />
              </picture>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{category?.name}</h2>
              <p className="w-20 h-5 rounded-2xl text-center bg-emerald-300 text-white hover:bg-emerald-400">
                {category?.status}
              </p>
              <p className="text-xl">Category: {category?.categoryName}</p>
              <p className="text-xl">Price: {category?.price}</p>
              <div className="">
                <Link href={`/products/${category?._id}`}>
                  <button className="btn bg-emerald-300 text-white hover:bg-emerald-400 w-full">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
