import RootLayout from "@/components/Layouts/RootLayout";
import HomePageBanner from "@/components/UI/Banner";
import FeatureProducts from "@/components/UI/FeaturedProducts";
import TopCategories from "@/components/UI/TopCategories";
import Head from "next/head";

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
