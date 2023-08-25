import Link from "next/link";
import SupportIcon from "@/assets/svg/supportIcon";
import BusinessServices from "@/assets/svg/businessServices";
import DateTime from "@/assets/svg/dateTime";
import FreightServices from "@/assets/svg/freightServices";
import Loan from "@/assets/svg/loan";
import Location from "@/assets/svg/location";
import RightArrow from "@/assets/svg/rightArrow";
import ShippingLogistics from "@/assets/svg/shippingLogistics";
import Vector from "@/assets/images/Vector.png";

export default function Home() {
  return (
    <>
      <header className="pb-6 bg-white lg:pb-0 container">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="#" title="" className="flex">
              <div className="font-bold text-2xl md:text-[42px] text-black leading-8">
                Ship<span className="font-semibold text-primary">mate.</span>
              </div>
            </Link>
          </div>

          <div className="flex gap-3 items-center ml-auto lg:space-x-7">
            <button className="btn btn-primary">Login</button>
            <button className="btn btn-primary btn-outline-primary">
              Learn more
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="container">
          <div className="text-center mt-28 mb-32">
            <h1 className="mb-2">Hassle-Free Shipping Solutions</h1>
            <div className="h4 font-medium">
              Compare, book, and manage your freight across the world’s top
              logistics providers, all on one platform.
            </div>
          </div>
          <div className="px-4 py-7 bg-white shadow-main rounded-[14px]">
            <form action="#" className="lg:flex items-center">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6 lg:divide-x-[1px] lg:divide-gray-200 lg:dark:divide-gray-700">
                <div className="filter-search-form relative">
                  <span className="absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]">
                    <Location />
                  </span>
                  <input
                    name="name"
                    type="text"
                    className="form-input h-7 lg:rounded-t-sm lg:rounded-e-none lg:rounded-b-none lg:rounded-s-sm lg:outline-0 w-full filter-input-box bg-gray-50 dark:bg-slate-800 border-0 focus:ring-0 pl-10"
                    placeholder="Origin, Port, City"
                  />
                </div>

                <div className="filter-search-form relative">
                  <span className="absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]">
                    <Location />
                  </span>
                  <input
                    name="name"
                    type="text"
                    className="form-input h-7 lg:rounded-t-sm lg:rounded-e-none lg:rounded-b-none lg:rounded-s-sm lg:outline-0 w-full filter-input-box bg-gray-50 dark:bg-slate-800 border-0 focus:ring-0 pl-10"
                    placeholder="Destination, Port, City"
                  />
                </div>

                <div className="filter-search-form relative">
                  <span className="absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]">
                    <DateTime />
                  </span>
                  <input
                    name="name"
                    type="text"
                    className="form-input h-7 lg:rounded-t-sm lg:rounded-e-none lg:rounded-b-none lg:rounded-s-sm lg:outline-0 w-full filter-input-box bg-gray-50 dark:bg-slate-800 border-0 focus:ring-0 pl-10"
                    placeholder="13 April 2023"
                  />
                </div>

                <div className="filter-search-form relative">
                  <span className="absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]">
                    <Loan />
                  </span>
                  <input
                    name="name"
                    type="text"
                    className="form-input h-7 lg:rounded-t-sm lg:rounded-e-none lg:rounded-b-none lg:rounded-s-sm lg:outline-0 w-full filter-input-box bg-gray-50 dark:bg-slate-800 border-0 focus:ring-0 pl-10"
                    placeholder="Load"
                  />
                </div>
              </div>
              <div className="flex items-center mt-5 lg:mt-0">
                <span className="lg:border-l-[1px] h-7 pl-3 border-gray-200"></span>
                <button className="btn gap-3 btn-primary h-9 w-full lg:w-9 p-0 flex justify-center items-center rounded-lg">
                  <span className="lg:hidden">Search</span>
                  <RightArrow />
                </button>
              </div>
            </form>
          </div>
          <div className="pt-24 pb-10">
            <h1 className="mb-2 text-center">Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-lg shadow-main dark:shadow-gray-800 px-6 py-7">
                <div className="flex items-center pb-5 border-b border-[#9E9E9E] ">
                  <FreightServices />
                  <h5 className="ps-4 font-medium text-black">
                    Freight Services
                  </h5>
                </div>

                <p className="font-medium mt-5 mb-0">
                  Open new Opportunites to grow your busniess. Enter new markets
                  and discover new contitnents, We are with you, door-to-door.
                </p>
              </div>
              <div className="rounded-lg shadow-main dark:shadow-gray-800 px-6 py-7">
                <div className="flex items-center pb-5 border-b border-[#9E9E9E] ">
                  <BusinessServices />
                  <h5 className="ps-4 font-medium text-black">
                    Business Services
                  </h5>
                </div>

                <p className="font-medium mt-5 mb-0">
                  We support your goals for growth with cargo insurance, online
                  payments and paperless workflow. Take your business to the
                  next level.
                </p>
              </div>
              <div className="rounded-lg shadow-main dark:shadow-gray-800 px-6 py-7">
                <div className="flex items-center pb-5 border-b border-[#9E9E9E] ">
                  <ShippingLogistics />
                  <h5 className="ps-4 font-medium text-black">
                    Shipping & Logistics
                  </h5>
                </div>

                <p className="font-medium mt-5 mb-0">
                  Find powerful solutions to meet your diverse transportation
                  needs. Agile solutions to handle all your supply chain needs.
                </p>
              </div>
              <div className="rounded-lg shadow-main dark:shadow-gray-800 px-6 py-7">
                <div className="flex items-center pb-5 border-b border-[#9E9E9E] ">
                  <SupportIcon />
                  <h5 className="ps-4 font-medium text-black">24/7 Support</h5>
                </div>

                <p className="font-medium mt-5 mb-0">
                  Receive support from our experts all over the world at every
                  stage of the process, 24/7.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden">
          <div className="waveWrapper">
            <div className="wave waveBottom">
              <img src={Vector.src} alt="" />
            </div>
            <div className="wave waveBottom2">
              <img src={Vector.src} alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
