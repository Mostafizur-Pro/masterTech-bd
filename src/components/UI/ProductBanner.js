import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

function ProductBanner({ categories }) {
  return (
    <div>
      <div
        className="hero h-96 mb-10"
        style={{
          backgroundImage: `url(https://png.pngtree.com/background/20210711/original/pngtree-blue-minimalistic-tech-computer-banner-poster-background-picture-image_1081883.jpg)`,
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className=" grid grid-cols-2 justify-between ">
          <div className=" text-white ml-5   ">
            <h1 className="mb-5 text-5xl font-bold w-full">
              {categories[0]?.categoryName}{" "}
            </h1>

            <div className="flex align-middle gap-2 items-center  border-orange-400">
              <Link href="/">Home </Link>

              <FaAngleRight />
              <p>Products</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default ProductBanner;
