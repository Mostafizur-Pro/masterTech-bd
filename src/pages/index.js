import RootLayout from "@/components/Layouts/RootLayout";
import HomePageBanner from "@/components/UI/Banner";
import FeatureProducts from "@/components/UI/FeaturedProducts";
import TopCategories from "@/components/UI/TopCategories";
import CustomButton from "@/components/hooks/Button";
import Head from "next/head";
import Link from "next/link";

function HomePage({ products }) {
  // console.log(products);
  return (
    <div>
      <Head>
        <title>MasterTECH</title>
        <meta
          name="description"
          content="This is computer PC builder website create by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <CustomButton>
        <Link href="http://localhost:3000/api/products">Click</Link>
      </CustomButton>
      <CustomButton>
        <Link href="http://localhost:3000/api/products/64c54eb6aee1c697bedecf96">
          Click id
        </Link>
      </CustomButton> */}
      <HomePageBanner />
      <TopCategories />
      <FeatureProducts products={products} />
    </div>
  );
}

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  // if (typeof window === "undefined") {
  //   return {
  //     props: {
  //       products: [],
  //     },
  //   };
  // }
  const res = await fetch(`${process.env.URL}/products`);
  const data = await res.json();

  return {
    props: {
      products: data,
    },
    revalidate: 3,
  };
};
