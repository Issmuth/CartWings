"use client";
import { useState } from "react";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import OrderCard from "@/components/OrderCard";

const Orders = () => {
    const [isSortByOpen, setIsSortByOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handleSortByClick = () => {
        setIsSortByOpen(true);
    };

    const handleFilterClick = () => {
        setIsFilterOpen(true);
    }

    const handleCloseModal = () => {
        setIsSortByOpen(false);
        setIsFilterOpen(false);
    };


    return (
        <section className="bg-accentGreenBg px-5 py-5 flex gap-5">
            <div className="hidden h-fit md:flex flex-col gap-5 glass border-2 border-white rounded-lg w-full min-w-[300px] py-8 px-4">
                <div className={`w-full h-fit bg-accentGreenLighter rounded-lg p-4 flex flex-col gap-6`}>
                    <h2 className="text-accentGreen text-lg font-semibold">Sort by</h2>
                    <div className="flex flex-col gap-4 font-semibold text-accentGreenDark">
                        <label className="radio radio-green" htmlFor="lowest-price">
                            <input type="radio" id="lowest-price" name="sort" value="lowest-price" checked />
                            <span></span>
                            <h3>Lowest Price</h3>
                        </label>
                        <label className="radio radio-green" htmlFor="highest-reward">
                            <input type="radio" id="highest-reward" name="sort" value="highest-reward" />
                            <span></span>
                            <h3>Highest Reward</h3>
                        </label>
                        <label className="radio radio-green" htmlFor="most-recent">
                            <input type="radio" id="most-recent" name="sort" value="most-recent" />
                            <span></span>
                            <h3>Most Recent</h3>
                        </label>
                        <label className="radio radio-green" htmlFor="least-offers">
                            <input type="radio" id="least-offers" name="sort" value="least-offers" />
                            <span></span>
                            <h3>Least Offers</h3>
                        </label>
                    </div>
                </div>

                <div className={`w-full bg-accentGreenLighter h-fit  rounded-lg  p-4 flex flex-col gap-6 `}>
                    <h2 className="text-accentGreen text-lg font-semibold">Filters</h2>
                    <div className="flex flex-col gap-4 font-semibold text-accentGreenDark text-start h-fit overflow-auto scroll-hide">
                        <h3>Product Name</h3>
                        <div className="input input-green border border-accentGreen">
                            <input placeholder="Enter product name" />
                        </div>
                        <h3>Price Range</h3>
                        <div className="flex items-center gap-3">
                            <div className="input input-green border border-accentGreen">
                                <input placeholder="$ min" />
                            </div>
                            <p className="text-3xl font-light text-accentGreenDark">-</p>
                            <div className="input input-green border border-accentGreen">
                                <input placeholder="$ max" />
                            </div>
                        </div>
                        <h3>Weight Range</h3>
                        <div className="flex items-center gap-3">
                            <div className="input input-green border border-accentGreen">
                                <input placeholder="$ min" />
                            </div>
                            <p className="text-3xl font-light text-accentGreenDark">-</p>
                            <div className="input input-green border border-accentGreen">
                                <input placeholder="$ max" />
                            </div>
                        </div>
                        <h3>Package Condition</h3>
                        <div className="flex flex-col gap-3">
                            <label className="radio radio-green" htmlFor="with-box">
                                <input type="radio" id="with-box" name="package" value="with-box" checked />
                                <span></span>
                                <h3>With Box</h3>
                            </label>
                            <label className="radio radio-green" htmlFor="open-box">
                                <input type="radio" id="open-box" name="package" value="open-box" />
                                <span></span>
                                <h3>Open Box</h3>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex w-full gap-2">
                    <button className="flex-1 border-[1.5px] border-accentGreenDark text-accentGreenDark py-3 rounded-lg font-bold">Clear</button>
                    <button className="flex-1 bg-accentGreen text-white py-3 rounded-lg font-semibold">Apply</button>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <div className="w-full glass py-5 rounded-lg border-white border-2 flex">
                    <SearchBar className='flex flex-row' />
                </div>
                <div className="flex flex-col glass border-white border-2 rounded-lg py-5 px-6 gap-6">
                    <div className="w-full flex justify-between md:hidden">
                        <span onClick={handleSortByClick} className="flex gap-2 items-center text-accentGreenDark font-bold cursor-pointer">Sort by <Image src="/images/Arrow.png" className="rotate-180 h-4 w-4" width={12} height={12} /></span>
                        <span onClick={handleFilterClick} className="flex gap-2 items-center text-accentGreenDark font-bold">Filters <Image src="/images/Arrow.png" className="rotate-180 h-4 w-4" width={12} height={12} /></span>
                    </div>

                    <div>
                        <h1 className="mb-2">234 Results</h1>
                        <div className="flex flex-col gap-4">
                            <OrderCard />
                            <OrderCard />
                        </div>
                    </div>

                    <div className="flex w-full gap-2">
                        <button className="flex-1 border-accentGreenDark border py-3 rounded-lg text-accentGreenDark font-semibold">Back to Top</button>
                        <button className="flex-1 border-accentGreen border py-3 rounded-lg text-accentGreen font-semibold">Load More</button>
                    </div>
                </div>
            </div>

            {isSortByOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-end px-2 transition-opacity duration-300 ease-in-out" onClick={handleCloseModal}>
                    <div className={`w-full glass border-2 border-white rounded-t-lg border-b-0 relative text-center p-4 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out ${isSortByOpen ? 'translate-y-0' : 'translate-y-full'}`} onClick={(e) => e.stopPropagation()}>
                        <Image src="/images/Close.png" width={24} height={24} className="absolute top-4 right-4 cursor-pointer" onClick={handleCloseModal} />
                        <h2 className="text-accentGreenDark text-2xl font-semibold">Sort by</h2>
                        <div className="flex flex-col gap-4 font-semibold text-accentGreenDark">
                            <label className="radio radio-green" htmlFor="lowest-price">
                                <input type="radio" id="lowest-price" name="sort" value="lowest-price" checked />
                                <span></span>
                                <h3>Lowest Price</h3>
                            </label>
                            <label className="radio radio-green" htmlFor="highest-reward">
                                <input type="radio" id="highest-reward" name="sort" value="highest-reward" />
                                <span></span>
                                <h3>Highest Reward</h3>
                            </label>
                            <label className="radio radio-green" htmlFor="most-recent">
                                <input type="radio" id="most-recent" name="sort" value="most-recent" />
                                <span></span>
                                <h3>Most Recent</h3>
                            </label>
                            <label className="radio radio-green" htmlFor="least-offers">
                                <input type="radio" id="least-offers" name="sort" value="least-offers" />
                                <span></span>
                                <h3>Least Offers</h3>
                            </label>
                        </div>
                        <button className="bg-accentGreen text-white py-3 rounded-lg font-semibold">Apply</button>
                    </div>
                </div>
            )}

            {isFilterOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-end px-2 transition-opacity duration-300 ease-in-out" onClick={handleCloseModal}>
                    <div className={`w-full glass max-h-[600px] border-2 border-white rounded-t-lg border-b-0 relative text-center p-4 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out ${isFilterOpen ? 'translate-y-0' : 'translate-y-full'}`} onClick={(e) => e.stopPropagation()}>
                        <Image src="/images/Close.png" width={24} height={24} className="absolute top-4 right-4 cursor-pointer" onClick={handleCloseModal} />
                        <h2 className="text-accentGreenDark text-2xl font-semibold">Filters</h2>
                        <div className="flex flex-col gap-4 font-semibold text-accentGreenDark text-start h-fit overflow-auto scroll-hide">
                            <h3>Product Name</h3>
                            <div className="input input-green">
                                <input placeholder="Enter product name" />
                            </div>
                            <h3>Price Range</h3>
                            <div className="flex items-center gap-3">
                                <div className="input input-green">
                                    <input placeholder="$ min" />
                                </div>
                                <p className="text-3xl font-light text-accentGreenDark">-</p>
                                <div className="input input-green">
                                    <input placeholder="$ max" />
                                </div>
                            </div>
                            <h3>Weight Range</h3>
                            <div className="flex items-center gap-3">
                                <div className="input input-green">
                                    <input placeholder="$ min" />
                                </div>
                                <p className="text-3xl font-light text-accentGreenDark">-</p>
                                <div className="input input-green">
                                    <input placeholder="$ max" />
                                </div>
                            </div>
                            <h3>Package Condition</h3>
                            <div className="flex flex-col gap-3">
                                <label className="radio radio-green" htmlFor="with-box">
                                    <input type="radio" id="with-box" name="package" value="with-box" checked />
                                    <span></span>
                                    <h3>With Box</h3>
                                </label>
                                <label className="radio radio-green" htmlFor="open-box">
                                    <input type="radio" id="open-box" name="package" value="open-box" />
                                    <span></span>
                                    <h3>Open Box</h3>
                                </label>
                            </div>
                        </div>
                        <div className="flex w-full gap-2">
                            <button className="flex-1 border-2 border-accentGreenDark text-accentGreenDark py-3 rounded-lg font-bold">Clear</button>
                            <button className="flex-1 bg-accentGreen text-white py-3 rounded-lg font-semibold">Apply</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Orders;