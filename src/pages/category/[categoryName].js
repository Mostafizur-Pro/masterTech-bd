import RootLayout from "@/components/Layouts/RootLayout";
import Product from "@/components/UI/Product";
import ProductBanner from "@/components/UI/ProductBanner";
import Head from "next/head";
import Link from "next/link";

function CategoryName({ categories }) {
  // console.log(categories);
  return (
    <div>
      <Head>
        <title>Category-MasterTECH</title>
      </Head>
      <div className="bg-white">
        <div class="flex">
          <div class="w-1/5  h-screen p-4">
            <hr className="my-10" />
            <h1 className="text-2xl font-bold">Categories</h1>

            <div className="ml-5">
              {" "}
              <li className="hover:text-success my-3">
                <Link href="/category/Processor">CPU/Processor</Link>
              </li>
              <hr />
              <li className="hover:text-success my-3">
                <Link href="/category/Motherboard">Motherboard</Link>
              </li>
              <hr />
              <li className="hover:text-success my-3">
                <Link href="/category/RAM">RAM</Link>
              </li>
              <hr />
              <li className="hover:text-success my-3">
                <Link href="/category/Power%20Supply%20Unit">
                  Power Supply Unit
                </Link>
              </li>
              <hr />
              <li className="hover:text-success my-3">
                <Link href="/category/Storage%20Device">Storage Device</Link>
              </li>
              <hr />
              <li className="hover:text-success my-3">
                <Link href="/category/Monitor">Monitor</Link>
              </li>
              <hr />
              <li className="hover:text-success my-3">
                <Link href="/category/GPU">GPU</Link>
              </li>
              <hr />
              <li className="hover:text-success my-3">
                <Link href="/category/Mouse">Mouse</Link>
              </li>
              <hr />
              <li className="hover:text-success my-3">
                <Link href="/category/Keyboard">Keyboard</Link>
              </li>
            </div>
            <div>
              <hr className="my-10" />
              <h1 className="text-2xl font-bold">Latest Posts</h1>
            </div>
          </div>
          <div class="w-4/5 bg-gray-100 p-4">
            {/* ----------------Main Page-------------- */}

            <ProductBanner categories={categories} />
            <Product categories={categories} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryName;

CategoryName.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.URL}/categories`);
  const data = await res.json();

  const paths = data.map((category) => ({
    params: { categoryName: category.name },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { categoryName } = params;
  const res = await fetch(
    `${process.env.URL}/categories?categoryName=${categoryName}`
  );
  const data = await res.json();
  return {
    props: {
      categories: data,
    },
    revalidate: 3,
  };
};
