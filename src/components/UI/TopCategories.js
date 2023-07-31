import Link from "next/link";
import monitor from "@/assets/Categories/monitor.png";
import motherboard from "@/assets/Categories/motherboard.png";
import memory from "@/assets/Categories/ram.png";
import storage from "@/assets/Categories/storage.png";
import mouse from "@/assets/Categories/mouse.png";
import keyboard from "@/assets/Categories/keyboard.png";
import powersupply from "@/assets/Categories/powersupply.png";
import Image from "next/image";

function TopCategories() {
  return (
    <div className="mt-20 mx-20 ">
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold ">Top Categories</h1>
        <p className="text-lg mt-2">
          Get Your Desired Product from Featured Category!
        </p>
      </div>
      <hr />
      <br />
      <div className="flex justify-between gap-5">
        <Link href="/category/Monitor">
          <div className="col-span-1 mr-10 mx-auto  ">
            <Image src={monitor} alt="monitor" className="w-32  " />
            <div className="text-center mt-5">
              <h2>Monitor</h2>
            </div>
          </div>
        </Link>
        <Link href="/category/Motherboard">
          {" "}
          <div className="col-span-1 mr-10 mx-auto">
            <Image src={motherboard} alt="motherboard" className="w-32" />
            <div className="text-center mt-5">
              <h2>Motherboard</h2>
            </div>
          </div>
        </Link>
        <Link href="/category/RAM">
          <div className="col-span-1 mr-10 mx-auto">
            <Image src={memory} alt="ram" className="w-32" />
            <div className="text-center mt-5">
              <h2>Memory</h2>
            </div>
          </div>
        </Link>
        <Link href="/category/Storage%20Device">
          <div className="col-span-1 mr-10 mx-auto">
            <Image src={storage} alt="storage" className="w-32" />
            <div className="text-center mt-5">
              <h2>Storage</h2>
            </div>
          </div>
        </Link>
        <Link href="/category/Mouse">
          {" "}
          <div className="col-span-1 mr-10 mx-auto">
            <Image src={mouse} alt="mouse" className="w-32" />
            <div className="text-center mt-5">
              <h2>Mouse</h2>
            </div>
          </div>
        </Link>
        <Link href="/category/Keyboard">
          {" "}
          <div className="col-span-1 mr-10 mx-auto">
            <Image src={keyboard} alt="keyboard" className="w-32" />
            <div className="text-center mt-5">
              <h2>Keyboard</h2>
            </div>
          </div>
        </Link>
        <Link href="/category/Power%20Supply%20Unit">
          {" "}
          <div className="col-span-1 mr-10 mx-auto">
            <Image src={powersupply} alt="powersupply" className="w-32" />
            <div className="text-center mt-5">
              <h2>Power Supply</h2>
            </div>
          </div>
        </Link>

        {/* <div className="col-span-1 mr-10 mx-auto">
          <Image src={keyboard} alt="keyboard" className="w-32" />
          <div className="text-center mt-5">
            <h2>Keyboard</h2>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default TopCategories;
