import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function NotFoundPage() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 5000);
  return (
    <div>
      <Head>
        {" "}
        <title>404 Error-MasterTECH</title>
      </Head>
      <div class="flex items-center justify-center h-screen">
        <div class="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 class="text-6xl font-bold text-red-500">404</h1>
          <div class="text-2xl font-bold  text-gray-800 mt-4">
            <p>
              MASTER<span className="text-success font-bold">TECH </span>
              <span> Page Not Found</span>
            </p>
          </div>
          <p class="text-lg text-gray-600 mt-2">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link href="/">
            <button class="mt-8 px-6 py-3 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
