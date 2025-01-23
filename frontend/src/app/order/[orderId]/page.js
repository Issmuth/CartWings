"use client";
import TravelForm from "@/components/TravelForm";
import Image from "next/image";
import { useState } from "react";

const OrderDetails = () => {
    const [isCreateTrip, setCreateTrip] = useState(false);
    const [isOffer, setIsOffer] = useState(false);
    // const [[selectedImage, prevImage], setSelectedImage] = useState(['/images/macbook.png', '']);

    
    const tripToggle = () => {
        setCreateTrip(!isCreateTrip);
    }

    const toggleOffer = () => {
        setIsOffer(!isOffer);
    }
    return (
        <section className='mt-32 md:mt-20 bg-accentGreenBg flex flex-col px-5 py-8 gap-5 md:flex-row'>
            <div className="glass w-full border-2 border-white rounded-xl px-3 py-5 flex flex-col gap-3 flex-1 basis-[65%] md:px-5">
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-2xl font-semibold">Macbook Air 13,13"</h1>
                        <p className="text-lg">Paris to New York</p>
                    </div>
                    <a href="#" className="text-accentGreen">Buy it here</a>
                </div>
                <div className="flex flex-col gap-3 md:flex-row">
                    <div className="w-full border border-accentGreen bg-accentGreenExtralight rounded-xl overflow-hidden flex-1 basis-2/3">
                        <img src='/images/macbook.png' className="w-full h-auto object-contain" />
                    </div>
                    <div className="w-full h-fit max-h-full grid grid-cols-3 gap-2 bg-accentGreenLighter border border-accentGreen rounded-xl p-3 md:grid-cols-1 flex-1">
                        <img src="/images/mac1.png" className="w-full h-auto object-contain rounded-xl cursor-pointer" />
                        <img src="/images/mac2.png" className="w-full h-auto object-contain rounded-xl" />
                        <img src="/images/mac3.png" className="w-full h-auto object-contain rounded-xl" />
                        <img src="/images/mac4.png" className="w-full h-auto object-contain rounded-xl" />
                    </div>
                </div>
            </div>
            <div className="glass w-full border-2 border-white rounded-xl px-3 py-5 flex flex-col gap-5 flex-1 basis-[35%]">
                <div className="flex bg-accentGreenLighter rounded-xl p-4 gap-2 text-accentGreenDark">
                    <img src='/images/profile.jpg' className="rounded-full aspect-square w-12" />
                    <div>
                        <h2 className="text-xl text-accentGreenDark font-bold">Harold</h2>
                        <p>Posted 5 hours ago</p>
                    </div>
                </div>
                <div className="flex bg-accentGreenLighter rounded-xl p-4 gap-5 text-accentGreenDark flex-col">
                    <h2 className="text-2xl text-accentGreen">Order details</h2>
                    <div className="flex flex-col text-lg gap-2">
                        <div className="flex justify-between">
                            <h4>Delivered by</h4>
                            <p className="font-semibold">January 25 2025</p>
                        </div>
                        <div className="flex justify-between">
                            <h4>Product Price</h4>
                            <p className="font-semibold">$349.99</p>
                        </div>
                        <div className="flex justify-between">
                            <h4>Starting Offer</h4>
                            <p className="font-semibold">$60.0</p>
                        </div>
                        <div className="flex justify-between">
                            <h4>Package Condition</h4>
                            <p className="font-semibold">Open Box</p>
                        </div>
                    </div>
                    <div className="p-3 border border-accentGreenDark rounded-lg flex flex-col gap-2">
                        <h1 className="text-xl text-accentGreen">Additional Desription</h1>
                        <p className="text-lg">I’d would love it if the color choice is rose gold but not necessarily</p>
                    </div>
                    <button 
                        className="bg-accentGreen w-full text-white font-semibold py-3 rounded-lg"
                        onClick={toggleOffer}
                    >
                        Make Offer
                    </button>
                </div>
            </div>
            
            {isOffer && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 py-12 px-5 overflow-scroll scroll-hide flex justify-center">
                <div className="glass border-2 border-white rounded-xl py-12 px-2 flex flex-col gap-8 h-fit w-full md:max-w-[800px] items-center">
                    <button className="absolute top-4 right-4 z-40" onClick={toggleOffer}><Image width={25} height={25} src='/images/Close.png'/></button>
                    <div className="w-full border-b-[1.5px] border-accentPurple flex gap-6 justify-center px-2 py-3">
                        <button
                            className={`py-3 flex w-full max-w-[160px] justify-center font-bold items-center flex-grow rounded-lg bg-transparent border-2 md:flex-initial ${isCreateTrip ? 'text-accentPurpleDark border-transparent' : 'border-accentPurple text-accentPurple'}`} 
                            onClick={tripToggle}
                        >
                            Trips
                        </button>
                        <button
                            className={`py-3 flex w-full max-w-[160px] justify-center font-bold  items-center rounded-lg flex-grow bg-transparent border-2 md:flex-initial px-5${isCreateTrip ? ' border-accentPurple text-accentPurple' : ' border-transparent text-accentPurpleDark'}`}  
                            onClick={tripToggle}
                        >
                            Create new
                        </button>
                    </div>

                    <div className="w-full overflow-hidden relative">
                        <div className={`w-full transform ${ isCreateTrip ? '-translate-x-full absolute' : 'translate-x-0'} transition-transform ease-in-out duration-500`}>
                            <div className="flex flex-col gap-3 md:px-6">
                               <div className="bg-accentPurpleLighter border border-accentPurple rounded-lg p-3">
                                    <h3 className="text-accentPurple text-lg font-semibold">Paris to New York</h3>
                                    <h4 className="font-light">January 20 2025</h4>
                                    <p className="font-extralight text-sm">3 Orders Pending</p>
                                </div> 
                               <div className="bg-accentPurpleLighter border border-accentPurple rounded-lg p-3">
                                    <h3 className="text-accentPurple text-lg font-semibold">Paris to New York</h3>
                                    <h4 className="font-light">January 20 2025</h4>
                                    <p className="font-extralight text-sm">3 Orders Pending</p>
                                </div> 
                               <div className="bg-accentPurpleLighter border border-accentPurple rounded-lg p-3">
                                    <h3 className="text-accentPurple text-lg font-semibold">Paris to New York</h3>
                                    <h4 className="font-light">January 20 2025</h4>
                                    <p className="font-extralight text-sm">3 Orders Pending</p>
                                </div> 
                                {/* <button className="py-3 bg-accentPurple w-full rounded-lg text-white">Next</button> */}
                            </div>
                        </div>
                        <div className={`w-full transform ${ isCreateTrip ? 'translate-x-0' : 'translate-x-full absolute'} transition-transform ease-in-out duration-500`}>
                            <TravelForm/>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </section>
    )
}

export default OrderDetails;