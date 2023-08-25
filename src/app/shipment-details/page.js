"use client";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Tab, Transition } from "@headlessui/react";
import DateTime from "@/assets/svg/dateTime";
import Doller from "@/assets/svg/doller";
import Edit from "@/assets/svg/edit";
import Loan from "@/assets/svg/loan";
import Location from "@/assets/svg/location";
import Link from "next/link";
import ArrowUp from "@/assets/svg/arrowUp";
import ArrowDown from "@/assets/svg/arrowDown";
import Close from "@/assets/svg/close";
import Plan from "@/assets/svg/plan";
import PlanOutline from "@/assets/svg/planOutline";
import StarFill from "@/assets/svg/startFill";
import StarOutline from "@/assets/svg/startOutline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ShipmentDetails() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });
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

          <div className="flex items-center ml-auto lg:space-x-7">
            <button className="btn btn-primary hover:bg-transparent h-12 w-12 p-0 flex justify-center items-center btn-outline-primary">
              <Doller />
            </button>
            <button className="btn btn-primary px-5">Track shipment</button>
          </div>
        </nav>
      </header>
      <main>
        <div className="container">
          <section className="bg-white pt-16 pb-12">
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
                  <div className="flex items-center justify-center w-10 h-10 mx-auto bg-[#868686] rounded-full border-2 border-[#F8F9FD]"></div>
                  <p className="mt-2 text-sm font-normal text-black">Booking</p>
                </div>
              </div>
            </div>
          </section>
          <div className="px-4 py-7 mb-5 bg-white shadow-main rounded-[14px]">
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
                    defaultValue="Delhi, 110003"
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
                    defaultValue="Shanghai 200080"
                  />
                </div>

                <div className="filter-search-form relative">
                  <span className="absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]">
                    <DateTime />
                  </span>
                  <input
                    name="name"
                    type="text"
                    defaultValue="13 April 2023"
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
                    defaultValue="114.21KG - AIR"
                    className="form-input h-7 lg:rounded-t-sm lg:rounded-e-none lg:rounded-b-none lg:rounded-s-sm lg:outline-0 w-full filter-input-box bg-gray-50 dark:bg-slate-800 border-0 focus:ring-0 pl-10"
                    placeholder="Load"
                  />
                </div>
              </div>
              <div className="flex items-center mt-5 lg:mt-0">
                <span className="lg:border-l-[1px] h-7 pl-3 border-gray-200"></span>
                <button className="btn gap-3 h-9 w-full lg:w-9 p-0 flex justify-center items-center rounded-lg">
                  <span className="lg:hidden">Edit</span>
                  <Edit />
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr className="border-[#B4B4B499]" />
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <Close />
                        <span className="sr-only">Close menu</span>
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="block lg:hidden px-4 py-5">
                      <Disclosure as="div" className="pb-7">
                        {({ open }) => (
                          <>
                            <h3 className="-my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between outline-none focus:outline-none py-3 text-sm text-gray-400 hover:text-gray-500">
                                <span className="font-semibold text-black">
                                  Filters
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? <ArrowUp /> : <ArrowDown />}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="h6">Filters Content</div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                      <Disclosure as="div" className="pb-7">
                        {({ open }) => (
                          <>
                            <h3 className="-my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between outline-none focus:outline-none py-3 text-sm text-gray-400 hover:text-gray-500">
                                <span className="font-semibold text-black">
                                  Price
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? <ArrowUp /> : <ArrowDown />}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="h6">Price Content</div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                      <Disclosure as="div" className="pb-7">
                        {({ open }) => (
                          <>
                            <h3 className="-my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between outline-none focus:outline-none py-3 text-sm text-gray-400 hover:text-gray-500">
                                <span className="font-semibold text-black">
                                  Modes
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? <ArrowUp /> : <ArrowDown />}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="h6">Modes Content</div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                      <Disclosure as="div" className="pb-7">
                        {({ open }) => (
                          <>
                            <h3 className="-my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between outline-none focus:outline-none py-3 text-sm text-gray-400 hover:text-gray-500">
                                <span className="font-semibold text-black">
                                  Seller
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? <ArrowUp /> : <ArrowDown />}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="h6">Seller Content</div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-9">
              <p className="font-bold tracking-tight text-black">
                3 Top Quote <span className="font-normal">(6 in Total)</span>
              </p>

              <div className="flex items-center">
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <ArrowDown />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <form className="hidden lg:block">
                  <Disclosure as="div" className="pb-7">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between outline-none focus:outline-none py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-semibold text-black">
                              Filters
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? <ArrowUp /> : <ArrowDown />}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="h6">Filters Content</div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="pb-7">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between outline-none focus:outline-none py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-semibold text-black">
                              Price
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? <ArrowUp /> : <ArrowDown />}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="h6">Price Content</div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="pb-7">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between outline-none focus:outline-none py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-semibold text-black">
                              Modes
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? <ArrowUp /> : <ArrowDown />}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="h6">Modes Content</div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="pb-7">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between outline-none focus:outline-none py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-semibold text-black">
                              Seller
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? <ArrowUp /> : <ArrowDown />}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="h6">Seller Content</div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </form>

                {/* Product grid */}
                <div className="lg:col-span-3">
                  <Tab.Group>
                    <Tab.List className="flex space-x-1 overflow-auto mb-9 rounded-xl bg-[#EBE8FF] shadow-main">
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            "w-full rounded-lg py-3 text-sm font-bold leading-5 text-[#868686] focus:outline-none",
                            selected
                              ? "bg-white shadow-main text-[#9747FF]"
                              : "text-[#868686] hover:bg-white/[0.12] "
                          )
                        }
                      >
                        Best Value 5-5 days. $3,121
                      </Tab>
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            "w-full rounded-lg py-3 text-sm font-bold leading-5 text-[#868686] focus:outline-none",
                            selected
                              ? "bg-white shadow-main text-[#9747FF]"
                              : "text-[#868686] hover:bg-white/[0.12] "
                          )
                        }
                      >
                        Quickest 5-5 days. $3,121
                      </Tab>
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            "w-full rounded-lg py-3 text-sm font-bold leading-5 text-[#868686] focus:outline-none",
                            selected
                              ? "bg-white shadow-main text-[#9747FF]"
                              : "text-[#868686] hover:bg-white/[0.12] "
                          )
                        }
                      >
                        Cheapest 5-5 days. $3,121
                      </Tab>
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                      <Tab.Panel>
                        <div className="py-[18px] px-7 rounded-[14px] bg-white shadow-main flex gap-3 justify-between">
                          <div>
                            <div className="flex items-center gap-6">
                              <button className="btn bg-[#AFFFAD] rounded-xl px-3 h-8 text-sm font-normal text-black flex gap-2 items-center">
                                <span className="h-[10px] w-[10px] bg-[#05FF00] rounded-full inline-block"></span>
                                Best Value
                              </button>
                              <div className="flex items-center ">
                                <p className="text-[#FF0000] text-sm mb-0 font-normal pr-[10px] border-r-[1px] border-[#B1B1B199]">
                                  Express
                                </p>
                                <p className="ml-[10px] text-[#565656] mb-0 font-normal">
                                  Est. 5 days
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mt-5">
                              <div className="flex items-center gap-2">
                                <Location />
                                <p className="mb-0">110003, Delhi</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <hr className="w-7 border-[#565656]" />
                                <PlanOutline />
                                <hr className="w-7 border-[#565656]" />
                              </div>
                              <div className="flex items-center gap-2">
                                <Location />
                                <p className="mb-0">110003, Delhi</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 mt-6">
                              <p className="mb-0 text-sm text-[#808080]">Primetime Worldwide</p>
                              <div className="flex items-center gap-1">
                                <StarFill />
                                <StarFill />
                                <StarFill />
                                <StarFill />
                                <StarOutline />
                              </div>
                            </div>
                          </div>
                          <div className="border-l-[1px] pl-3 border-[#A3A3A366]">
                            <h6 className="font-bold text-xl text-black text-center">
                              $ 3,982<span className="text-xs">.63</span>
                            </h6>
                            <button className="btn btn-primary text-base mt-3 h-10 flex justify-center items-center p-0 px-7">
                              Select
                            </button>
                            <Link
                              href="#"
                              className="block text-[#363636] underline text-center mt-2"
                            >
                              View details
                            </Link>
                          </div>
                        </div>
                      </Tab.Panel>
                      <Tab.Panel>
                        <div className="py-[18px] px-7 rounded-[14px] bg-white shadow-main flex gap-3 justify-between">
                          <div>
                            <div className="flex items-center gap-6">
                              <button className="btn bg-[#AFFFAD] rounded-xl px-3 h-8 text-sm font-normal text-black flex gap-2 items-center">
                                <span className="h-[10px] w-[10px] bg-[#05FF00] rounded-full inline-block"></span>
                                Best Value
                              </button>
                              <div className="flex items-center ">
                                <p className="text-[#FF0000] text-sm mb-0 font-normal pr-[10px] border-r-[1px] border-[#B1B1B199]">
                                  Express
                                </p>
                                <p className="ml-[10px] text-[#565656] mb-0 font-normal">
                                  Est. 5 days
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mt-5">
                              <div className="flex items-center gap-2">
                                <Location />
                                <p className="mb-0">110003, Delhi</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <hr className="w-7 border-[#565656]" />
                                <PlanOutline />
                                <hr className="w-7 border-[#565656]" />
                              </div>
                              <div className="flex items-center gap-2">
                                <Location />
                                <p className="mb-0">110003, Delhi</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 mt-6">
                              <p className="mb-0 text-sm text-[#808080]">Primetime Worldwide</p>
                              <div className="flex items-center gap-1">
                                <StarFill />
                                <StarFill />
                                <StarFill />
                                <StarFill />
                                <StarOutline />
                              </div>
                            </div>
                          </div>
                          <div className="border-l-[1px] pl-3 border-[#A3A3A366]">
                            <h6 className="font-bold text-xl text-black text-center">
                              $ 3,982<span className="text-xs">.63</span>
                            </h6>
                            <button className="btn btn-primary text-base mt-3 h-10 flex justify-center items-center p-0 px-7">
                              Select
                            </button>
                            <Link
                              href="#"
                              className="block text-[#363636] underline text-center mt-2"
                            >
                              View details
                            </Link>
                          </div>
                        </div>
                      </Tab.Panel>
                      <Tab.Panel>
                        <div className="py-[18px] px-7 rounded-[14px] bg-white shadow-main flex gap-3 justify-between">
                          <div>
                            <div className="flex items-center gap-6">
                              <button className="btn bg-[#AFFFAD] rounded-xl px-3 h-8 text-sm font-normal text-black flex gap-2 items-center">
                                <span className="h-[10px] w-[10px] bg-[#05FF00] rounded-full inline-block"></span>
                                Best Value
                              </button>
                              <div className="flex items-center ">
                                <p className="text-[#FF0000] text-sm mb-0 font-normal pr-[10px] border-r-[1px] border-[#B1B1B199]">
                                  Express
                                </p>
                                <p className="ml-[10px] text-[#565656] mb-0 font-normal">
                                  Est. 5 days
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mt-5">
                              <div className="flex items-center gap-2">
                                <Location />
                                <p className="mb-0">110003, Delhi</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <hr className="w-7 border-[#565656]" />
                                <PlanOutline />
                                <hr className="w-7 border-[#565656]" />
                              </div>
                              <div className="flex items-center gap-2">
                                <Location />
                                <p className="mb-0">110003, Delhi</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 mt-6">
                              <p className="mb-0 text-sm text-[#808080]">Primetime Worldwide</p>
                              <div className="flex items-center gap-1">
                                <StarFill />
                                <StarFill />
                                <StarFill />
                                <StarFill />
                                <StarOutline />
                              </div>
                            </div>
                          </div>
                          <div className="border-l-[1px] pl-3 border-[#A3A3A366]">
                            <h6 className="font-bold text-xl text-black text-center">
                              $ 3,982<span className="text-xs">.63</span>
                            </h6>
                            <button className="btn btn-primary text-base mt-3 h-10 flex justify-center items-center p-0 px-7">
                              Select
                            </button>
                            <Link
                              href="#"
                              className="block text-[#363636] underline text-center mt-2"
                            >
                              View details
                            </Link>
                          </div>
                        </div>
                      </Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                </div>
              </div>
            </section>
          </main>
        </div>
      </main>
    </>
  );
}
