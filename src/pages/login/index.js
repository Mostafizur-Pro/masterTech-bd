import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";
import Link from "next/link";
import loginImage from "@/assets/login/login.gif";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    //   signInWithEmailAndPassword(data.email, data.password);
    // Add login logic here
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        {" "}
        <title>Login-MasterTECH</title>
      </Head>
      <div className="max-w-md w-full space-y-8">
        <div>
          <Image className="mx-auto h-72 w-auto" src={loginImage} alt="Logo" />

          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form
          className="mt-8 space-y-6"
          // onSubmit={handleSubmit(onSubmit)}
        >
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                {...register("email", { required: true })}
                id="email-address"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">Email is required</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                {...register("password", { required: true })}
                id="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  Password is required
                </p>
              )}
              <p className="text-gray-400 mt-2">
                Do not have any account?
                <Link href="/signup" className="text-green-400 font-bold">
                  Sign Up.
                </Link>
              </p>
            </div>

            {/* <div>
              <div
                onClick={() =>
                  signIn("google", { callbackUrl: "http://localhost:3000" })
                }
              >
                Google
              </div>
              <div
                onClick={() =>
                  signIn("github", { callbackUrl: "http://localhost:3000" })
                }
              >
                Github
              </div>
            </div> */}
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="flex flex-col justify-center items-center w-full lg:flex-row">
          <div
            className="text-7xl hover:text-success"
            onClick={() =>
              signIn("google", { callbackUrl: "http://localhost:3000" })
            }
          >
            <FaGoogle />
          </div>
          <div className="divider lg:divider-horizontal">OR</div>
          <div
            className="text-7xl hover:text-success"
            onClick={() =>
              signIn("github", { callbackUrl: "http://localhost:3000" })
            }
          >
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
