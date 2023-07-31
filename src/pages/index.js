import HomePageBanner from "@/components/UI/Banner";
import Head from "next/head";

export default function Home() {
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
    </div>
  );
}
