"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import TripCard from "@/components/TripCard";
import Loader from "@/ui/Loader";

const Trips = () => {
    const [isSortByOpen, setIsSortByOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
        useEffect(() => {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1000);
            return () => clearTimeout(timer);
        }, []);

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

    const sampleTravelers = [
        {
            id: 1,
            name: "Hassan Khan",
            from: "Lahore",
            to: "Karachi",
            arrivesOn: "12th August 2021",
            returnsOn: "15th August 2021",
            minPrice: "$50",
            maxPrice: "$100",
            maxWeight: "5kg",
            profileImg: "/images/profile.jpg"
        },

        {
            id: 2,
            name: "Ali Ahmed",
            from: "Islamabad",
            to: "Lahore",
            arrivesOn: "14th August 2021",
            returnsOn: "17th August 2021",
            minPrice: "$70",
            maxPrice: "$120",
            maxWeight: "7kg",
            profileImg: "https://picsum.photos/500?random=1"
        },

        {
            id: 3,
            name: "Sara Khan",
            from: "Karachi",
            to: "Islamabad",
            arrivesOn: "16th August 2021",
            returnsOn: "19th August 2021",
            minPrice: "$80",
            maxPrice: "$130",
            maxWeight: "6kg",
            profileImg: "https://picsum.photos/500?random=2"
        },

        {
            id: 4,
            name: "Marcus Edwards",
            from: "New York",
            to: "Los Angeles",
            arrivesOn: "18th August 2021",
            returnsOn: "21st August 2021",
            minPrice: "$100",
            maxPrice: "$150",
            maxWeight: "8kg",
            profileImg: "https://picsum.photos/500?random=3"
        }
    ]

    return (
        <section className="mt-32 md:mt-20 bg-accentPurpleBg px-5 py-5 flex gap-5">
            <div className="hidden h-fit md:flex flex-col gap-5 glass border-2 border-white rounded-2xl w-min-[300px] md:max-w-[300px]  py-8 px-4">
                <div className={`w-full h-fit bg-accentPurpleLighter rounded-2xl p-4 flex flex-col gap-6`}>
                    <h2 className="text-accentPurple text-lg font-semibold">Sort by</h2>
                    <div className="flex flex-col gap-4 font-semibold text-accentPurpleDark">
                        <label className="radio radio-purple" htmlFor="lowest-price">
                            <input type="radio" id="lowest-price" name="sort" value="lowest-price" checked />
                            <span></span>
                            <h3>Most Recent</h3>
                        </label>
                        <label className="radio radio-purple" htmlFor="highest-reward">
                            <input type="radio" id="highest-reward" name="sort" value="highest-reward" />
                            <span></span>
                            <h3>Most Deliveries</h3>
                        </label>
                        <label className="radio radio-purple" htmlFor="most-recent">
                            <input type="radio" id="most-recent" name="sort" value="most-recent" />
                            <span></span>
                            <h3>Soon to Arrive</h3>
                        </label>
                        <label className="radio radio-purple" htmlFor="least-offers">
                            <input type="radio" id="least-offers" name="sort" value="least-offers" />
                            <span></span>
                            <h3>Highest Weight Cap</h3>
                        </label>
                    </div>
                </div>

                <div className={`w-full bg-accentPurpleLighter h-fit  rounded-2xl  p-4 flex flex-col gap-6 `}>
                    <h2 className="text-accentPurple text-lg font-semibold">Filters</h2>
                    <div className="flex flex-col gap-4 font-semibold text-accentPurpleDark text-start h-fit overflow-auto scroll-hide">
                        <h3>Price Range</h3>
                        <div className="flex items-center gap-3">
                            <div className="input input-purple border border-accentPurple">
                                <input placeholder="$ min" />
                            </div>
                            <p className="text-3xl font-light text-accentPurpleDark">-</p>
                            <div className="input input-purple border border-accentPurple">
                                <input placeholder="$ max" />
                            </div>
                        </div>
                        <h3>Weight Range</h3>
                        <div className="flex items-center gap-3">
                            <div className="input input-purple border border-accentPurple">
                                <input placeholder="$ min" />
                            </div>
                            <p className="text-3xl font-light text-accentPurpleDark">-</p>
                            <div className="input input-purple border border-accentPurple">
                                <input placeholder="$ max" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full gap-2">
                    <button className="flex-1 border-[1.5px] border-accentPurpleDark text-accentPurpleDark py-3 rounded-lg font-bold">Clear</button>
                    <button className="flex-1 bg-accentPurple text-white py-3 rounded-lg font-semibold">Apply</button>
                </div>
            </div>

            <div className="flex flex-col gap-5 w-full">
                <div className="w-full glass py-5 rounded-2xl border-white border-2 flex">
                    <SearchBar isTravel={true} isHorizontal={true} className='flex flex-row' />
                </div>
                <div className="flex flex-col glass border-white border-2 rounded-2xl py-5 px-6 gap-6">
                    <div className="w-full flex justify-between md:hidden">
                        <span onClick={handleSortByClick} className="flex gap-2 items-center text-accentPurpleDark font-bold cursor-pointer">Sort by <Image src="/images/Arrow.png" className="rotate-180 h-4 w-4" width={12} height={12} /></span>
                        <span onClick={handleFilterClick} className="flex gap-2 items-center text-accentPurpleDark font-bold">Filters <Image src="/images/Arrow.png" className="rotate-180 h-4 w-4" width={12} height={12} /></span>
                    </div>

                    <div>
                    {isLoading ? (
                            <div className="w-full flex justify-center items-center">
                                <Loader />
                            </div>
                        ) : (
                            <>
                                <h1 className="mb-2">234 Results</h1>
                                <div className="flex flex-col gap-4">
                                    {sampleTravelers.map((traveler) => (
                                        <TripCard key={traveler.id} {...traveler} />
                                    ))}
                                    
                                </div>
                            </>
                        )
                    }
                    </div>

                    <div className="flex w-full gap-2">
                        <button className="flex-1 border-accentPurpleDark border py-3 rounded-lg text-accentPurpleDark font-semibold">Back to Top</button>
                        <button className="flex-1 border-accentPurple border py-3 rounded-lg text-accentPurple font-semibold">Load More</button>
                    </div>
                </div>
            </div>

            {isSortByOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-end px-2 transition-opacity duration-300 ease-in-out" onClick={handleCloseModal}>
                    <div className={`w-full glass border-2 border-white rounded-t-lg border-b-0 relative text-center p-4 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out ${isSortByOpen ? 'translate-y-0' : 'translate-y-full'}`} onClick={(e) => e.stopPropagation()}>
                        <Image src="/images/Close.png" width={24} height={24} className="absolute top-4 right-4 cursor-pointer" onClick={handleCloseModal} />
                        <h2 className="text-accentPurpleDark text-2xl font-semibold">Sort by</h2>
                        <div className="flex flex-col gap-4 font-semibold text-accentPurpleDark">
                            <label className="radio radio-purple" htmlFor="lowest-price">
                                <input type="radio" id="lowest-price" name="sort" value="lowest-price" checked />
                                <span></span>
                                <h3>Lowest Price</h3>
                            </label>
                            <label className="radio radio-purple" htmlFor="highest-reward">
                                <input type="radio" id="highest-reward" name="sort" value="highest-reward" />
                                <span></span>
                                <h3>Highest Reward</h3>
                            </label>
                            <label className="radio radio-purple" htmlFor="most-recent">
                                <input type="radio" id="most-recent" name="sort" value="most-recent" />
                                <span></span>
                                <h3>Most Recent</h3>
                            </label>
                            <label className="radio radio-purple" htmlFor="least-offers">
                                <input type="radio" id="least-offers" name="sort" value="least-offers" />
                                <span></span>
                                <h3>Least Offers</h3>
                            </label>
                        </div>
                        <button className="bg-accentPurple text-white py-3 rounded-lg font-semibold">Apply</button>
                    </div>
                </div>
            )}

            {isFilterOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-end px-2 transition-opacity duration-300 ease-in-out" onClick={handleCloseModal}>
                    <div className={`w-full glass max-h-[600px] border-2 border-white rounded-t-lg border-b-0 relative text-center p-4 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out ${isFilterOpen ? 'translate-y-0' : 'translate-y-full'}`} onClick={(e) => e.stopPropagation()}>
                        <Image src="/images/Close.png" width={24} height={24} className="absolute top-4 right-4 cursor-pointer" onClick={handleCloseModal} />
                        <h2 className="text-accentPurpleDark text-2xl font-semibold">Filters</h2>
                        <div className="flex flex-col gap-4 font-semibold text-accentPurpleDark text-start h-fit overflow-auto scroll-hide">
                            <h3>Product Name</h3>
                            <div className="input input-purple">
                                <input placeholder="Enter product name" />
                            </div>
                            <h3>Price Range</h3>
                            <div className="flex items-center gap-3">
                                <div className="input input-purple">
                                    <input placeholder="$ min" />
                                </div>
                                <p className="text-3xl font-light text-accentPurpleDark">-</p>
                                <div className="input input-purple">
                                    <input placeholder="$ max" />
                                </div>
                            </div>
                            <h3>Weight Range</h3>
                            <div className="flex items-center gap-3">
                                <div className="input input-purple">
                                    <input placeholder="$ min" />
                                </div>
                                <p className="text-3xl font-light text-accentPurpleDark">-</p>
                                <div className="input input-purple">
                                    <input placeholder="$ max" />
                                </div>
                            </div>
                            <h3>Package Condition</h3>
                            <div className="flex flex-col gap-3">
                                <label className="radio radio-purple" htmlFor="with-box">
                                    <input type="radio" id="with-box" name="package" value="with-box" checked />
                                    <span></span>
                                    <h3>With Box</h3>
                                </label>
                                <label className="radio radio-purple" htmlFor="open-box">
                                    <input type="radio" id="open-box" name="package" value="open-box" />
                                    <span></span>
                                    <h3>Open Box</h3>
                                </label>
                            </div>
                        </div>
                        <div className="flex w-full gap-2">
                            <button className="flex-1 border-2 border-accentPurpleDark text-accentPurpleDark py-3 rounded-lg font-bold">Clear</button>
                            <button className="flex-1 bg-accentPurple text-white py-3 rounded-lg font-semibold">Apply</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Trips;