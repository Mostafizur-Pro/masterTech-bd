import Image from "next/image";
import CustomButton from "../hooks/Button";
import motherboard from "@/assets/Slider/motherboard.png";
import ram from "@/assets/Slider/ram.png";
import monitor from "@/assets/Slider/monitor.png";
import powersupply from "@/assets/Slider/powersupply.png";

function HomePageBanner() {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="hero mx-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <Image
                src={motherboard}
                className="rounded-lg lg:w-1/2 "
                alt="motherboard"
              />
              <div>
                <h1 className="text-5xl font-bold">MSI GODLIKE GAMING </h1>
                <p className="py-6">
                  Prioritize your Dental hygiene. Get Free consultation upon
                  treatment.
                </p>
                <CustomButton>Getting Started </CustomButton>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="hero mx-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div>
                <h1 className="text-5xl font-bold">VENGEANCE RGB PRO</h1>
                <p className="py-6">
                  Prioritize your Dental hygiene. Get Free consultation upon
                  treatment.
                </p>
                <CustomButton>Getting Started </CustomButton>
              </div>
              <Image
                src={ram}
                className="rounded-lg lg:w-1/2 "
                alt="motherboard"
              />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="hero mx-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <Image
                src={monitor}
                className="rounded-lg lg:w-1/2 "
                alt="motherboard"
              />
              <div>
                <h1 className="text-5xl font-bold">
                  MSI OPTIX CURVED GAMING MONITOR
                </h1>
                <p className="py-6">
                  Prioritize your Dental hygiene. Get Free consultation upon
                  treatment.
                </p>
                <CustomButton>Getting Started </CustomButton>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="hero mx-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div>
                <h1 className="text-5xl font-bold">
                  GIGABYTE GAMING POWER SUPPLY
                </h1>
                <p className="py-6">
                  Prioritize your Dental hygiene. Get Free consultation upon
                  treatment.
                </p>
                <CustomButton>Getting Started </CustomButton>
              </div>
              <Image
                src={powersupply}
                className="rounded-lg lg:w-1/2 "
                alt="motherboard"
              />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageBanner;
