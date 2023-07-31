import Head from "next/head";
import Link from "next/link";
import { BsFillCpuFill, BsFillMotherboardFill } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { ImPower } from "react-icons/im";
import { FiMonitor } from "react-icons/fi";
import { LuHardDrive } from "react-icons/lu";

import RootLayout from "@/components/Layouts/RootLayout";

function PCBuilder() {
  //   const { data } = useSelector((state) => state.pcBuilder);
  // console.log("components", components);
  // const [disabled, setDisabled] = useState(false);
  const categories = [
    {
      id: 1,
      name: "Processor",
      link: "/choose?category=CPU/Processor",
      logo: <BsFillCpuFill />,
    },
    {
      id: 2,
      name: "Motherboard",
      link: "/choose?category=Motherboard",
      logo: <BsFillMotherboardFill />,
    },
    {
      id: 3,
      name: "RAM",
      link: "/choose?category=RAM",
      logo: <CgSmartphoneRam />,
    },
    {
      id: 4,
      name: "Power Supply Unit",
      link: "/choose?category=Power Supply Unit",
      logo: <ImPower />,
    },
    {
      id: 5,
      name: "Storage Device",
      link: "/choose?category=Storage Device",
      logo: <LuHardDrive />,
    },
    {
      id: 6,
      name: "Monitor",
      link: "/choose?category=Monitor",
      logo: <FiMonitor />,
    },
  ];

  return (
    <div>
      <Head>
        {" "}
        <title>PC Builder-MasterTECH</title>
      </Head>
      <div className="max-w-screen-xl mx-auto border-4 border-success ">
        <div>
          <div className="">
            <div>
              <h3 className="text-xl font-bold text-success m-5">
                PC Builder - Build Your Own Computer - MasterTECH
              </h3>
              <div className="flex gap-2 font-bold m-5">
                <input
                  type="checkbox"
                  // checked="checked"
                  className="checkbox checkbox-success"
                />
                <label className="">
                  <span className="label-text">
                    Hide Unconfigured Components
                  </span>
                </label>
              </div>
            </div>
            <h2 className="text-xl font-bold text-center">Total: 0 ৳</h2>
            <h2 className="text-xl bg-gray-400 p-2 text-white font-bold m-5">
              Core Components
            </h2>
          </div>
          {/* <div className="my-10 mx-5">Select your own PC Item:</div> */}
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-xl">
                    <th>Sl. No</th>

                    <th>Product Details</th>
                    <th>Book</th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map((c) => (
                    <>
                      <tr>
                        <th className="text-lg">{c.id}</th>

                        <th className="flex items-center gap-2">
                          <p className="text-5xl">{c.logo}</p>
                          <p className="text-lg">{c.name}</p>
                        </th>
                        <th>
                          {" "}
                          <Link href={`/builder/${c?.name}`}>
                            <button className="btn btn-success text-white">
                              Select
                            </button>
                          </Link>
                        </th>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
        // className={`text-white   px-3 py-2 w-60 rounded-xl mt-5 ${
        //   disabled ? "bg-emerald-300" : " bg-gray-300"
        // }`}
        >
          Build PC
        </button>
      </div>
    </div>
  );
}

export default PCBuilder;

PCBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
