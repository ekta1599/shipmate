import Home from "@/assets/svg/home";
import Pallets from "@/assets/svg/pallets";
import Plan from "@/assets/svg/plan";
import Star from "@/assets/svg/star";
import Weight from "@/assets/svg/weight";
import Link from "next/link";
import Image1 from "@/assets/images/images.png";
import Image2 from "@/assets/images/images2.png";

export default function Booking() {
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
      <main className="container">
        <section className="bg-white pt-16 pb-16">
          <div className="relative max-w-768 mx-auto">
            <div className="absolute inset-x-0 top-5 block border-[1px] border-[#D3B0FF]"></div>

            <div className="relative flex justify-between gap-5">
              <div>
                <div className="flex items-center justify-center w-10 h-10 mx-auto bg-[#D3B0FF] rounded-full border-2 border-[#F8F9FD]">
                  <span className="text-white font-bold text"> 1 </span>
                </div>
                <p className="mt-2 text-sm font-normal text-black">Search</p>
              </div>
              <div>
                <div className="flex items-center justify-center w-10 h-10 mx-auto bg-[#D3B0FF] rounded-full border-2 border-[#F8F9FD]">
                  <span className="text-white font-bold text"> 2 </span>
                </div>
                <p className="mt-2 text-sm font-normal text-black">
                  Recommended services
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-10 h-10 mx-auto bg-[#D3B0FF] rounded-full border-2 border-[#F8F9FD]">
                  <span className="text-white font-bold text"> 3 </span>
                </div>
                <p className="mt-2 text-sm font-normal text-black">Results</p>
              </div>
              <div>
                <div className="flex items-center justify-center w-10 h-10 mx-auto bg-[#D3B0FF] rounded-full border-2 border-[#F8F9FD]">
                  <span className="text-white font-bold text"> 4 </span>
                </div>
                <p className="mt-2 text-sm font-normal text-black">Booking</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="lg:flex gap-8">
            <div className="w-full lg:w-[calc(100%-380px)]">
              <div className="shadow-main py-8 px-6 bg-white mb-[10px] rounded-[14px]">
                <h4 className="font-bold text-black mb-7 pb-14">
                  Booking summary
                </h4>
                <div className="flex items-center justify-between relative">
                  <div className="absolute inset-x-0 -top-14 flex flex-col items-center justify-center">
                    <p className="font-semibold text-black text-sm mb-2">
                      Express
                    </p>
                    <Plan />
                  </div>
                  <div className="absolute inset-x-0 top-5 block border-[1px] border-[#D3B0FF] m-auto w-[calc(100%-190px)]"></div>
                  <div className="flex items-center flex-col max-w-[126px] gap-5">
                    <Home />
                    <h6 className="font-semibold text-black text-center">
                      Delhi,
                      <br />
                      110003 India
                    </h6>
                  </div>
                  <div className="flex items-center flex-col max-w-[126px] gap-5">
                    <Home />
                    <h6 className="font-semibold text-black text-center">
                      Shanghai
                      <br />
                      200080, China
                    </h6>
                  </div>
                </div>
              </div>
              <div className="md:flex items-center gap-[10px]">
                <div className="shadow-main py-5 px-6 bg-white mb-[10px] rounded-[14px] flex items-center flex-col md:w-max">
                  <p className="text-xl font-semibold mb-2">
                    Total Weight/Volume
                  </p>
                  <Weight />
                  <p className="text-xl font-bold text-black mb-0 mt-2">
                    114.21KG
                  </p>
                </div>
                <div className="shadow-main py-5 px-6 bg-white mb-[10px] rounded-[14px] md:w-[calc(100%-260px)]">
                  <p className="text-xl font-semibold mb-2">Load</p>
                  <div className="flex justify-center">
                    <h4 className="text-black font-bold mt-4">1X</h4>
                    <div className="flex flex-col items-center">
                      <Pallets />
                      <h6 className="text-black font-bold text-base mb-1">
                        Pallets
                      </h6>
                      <p className="text-xl text-black mb-0">
                        230 X 140 X 120 CM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="shadow-main py-5 px-6 bg-white mb-[10px] rounded-[14px] flex flex-col w-full">
                  <p className="text-xl font-semibold mb-8">
                    <span className="font-normal">Seller: </span>Primetime
                    Worldwide
                  </p>
                  <img src={Image1.src} alt="" className="mx-auto h-10" />
                </div>
                <div className="shadow-main py-5 px-6 bg-white mb-[10px] rounded-[14px] flex flex-col w-full">
                  <p className="text-xl font-semibold mb-8">
                    <span className="font-normal">Insurance: </span>Xcover.com
                  </p>
                  <img src={Image2.src} alt="" className="mx-auto h-10" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[380px] lg:min-w-[380px]">
              <div className="shadow-main py-9 pl-9 pr-12 bg-white mb-[10px] rounded-[14px]">
                <div className="flex items-center gap-5 mb-9">
                  <h4 className="text-black font-bold">Price details</h4>
                  <div className="flex items-center w-max gap-2 px-3 py-1 rounded-full bg-[#E5E6E6] text-xs font-normal text-black">
                    <Star />
                    Known shipper
                  </div>
                </div>
                <div className="flex gap-2 items-center justify-between text-[#808080] border-b-[1px] border-[#B3B3B380]">
                  <p>Seller’s Quote</p>
                  <p>$ 3,659.25</p>
                </div>
                <div className="text-[#808080] border-b-[1px] border-[#B3B3B380]">
                  <div className="flex gap-2 items-center justify-between mt-6">
                    <p className="mb-3">Duties and taxes</p>
                    <p className="mb-3">Not Included</p>
                  </div>
                  <div className="flex gap-2 justify-between">
                    <div>
                      <p className="-mb-1">Insurance</p>
                      <p>Based on the items cost</p>
                    </div>
                    <p>$323.40</p>
                  </div>
                </div>
                <div className="mt-6 text-[#808080] border-b-[1px] border-[#B3B3B380]">
                  <div>
                    <p>
                      Add a{" "}
                      <Link href="#" className="text-primary underline">
                        promo code
                      </Link>
                    </p>
                  </div>
                  <div className="flex gap-2 items-center justify-between text-[#808080]">
                    <p>Platform fee</p>
                    <p>$119.48</p>
                  </div>
                </div>
                <div className="flex gap-2 items-center mt-6 mb-16 justify-between">
                  <h4 className="font-bold text-[28px]">Total:</h4>
                  <h4 className="font-bold text-[28px]">$ 4,102.13</h4>
                </div>
                <button className="btn btn-primary w-full rounded-2xl bg-[#9747FF]">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
