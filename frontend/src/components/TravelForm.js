"use client";
import { useState } from "react";
import Image from "next/image";

const TravelForm = () => {
    const [imageInputs, setImageInputs] = useState([{ uploaded: false, src: null }]);
    const [selectedButton, setSelectedButton] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(0);

    const handleImageChange = (index, event) => {
        const file = event.target.files[0];
        const newImageInputs = [...imageInputs];
        newImageInputs[index] = { uploaded: true, src: URL.createObjectURL(file) };
        if (index === imageInputs.length - 1) {
            newImageInputs.push({ uploaded: false, src: null });
        }
        setImageInputs(newImageInputs);
    };

    const removeImageInput = (index) => {
        const newImageInputs = imageInputs.filter((_, i) => i !== index);
        setImageInputs(newImageInputs);
    };

    const handleButtonClick = (index) => {
        setSelectedButton(index);
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handlePriceChange = (event) => {
        const value = parseFloat(event.target.value);
        setPrice(isNaN(value) ? 0 : value);
    };

    return (
        <>
            <div className="flex flex-col px-3 gap-6 md:px-8">
                <div className="flex flex-col gap-8 w-full">
                    <label className="text-xl font-semibold">Trip details:</label>

                    <div>
                        <div className="flex flex-col w-full items-center gap-2 md:flex-row">
                            <div className='input input-purple w-full'>
                                <input type="text" placeholder="from" />
                            </div>
                            <button className="w-6 h-6 md:w-12 md:h-12"><Image src='/images/swap.png' width={24} height={24} alt="swap icon" className="" /></button>
                            <div className='input input-purple w-full'>
                                <input type="text" placeholder="to" />
                            </div>
                        </div>
                    </div>

                    <div className=" text-center">
                        <h1 className="font-accentPurpleDark text-lg">Trip type</h1>
                        <div className="flex whitespace-nowrap overflow-auto scroll-hide gap-2 py-2">
                            {["One Way", 'Round Trip'].map((retailer, index) => (
                                <button
                                    key={index}
                                    className={`py-3 min-w-[160px] flex justify-center font-bold flex-shrink-0 flex-grow items-center rounded-lg whitespace-nowrap overflow-x-auto bg-accentPurpleLighter border-2 ${selectedButton === index ? 'border-accentPurple text-accentPurple bg-transparent' : 'text-accentPurpleDark border-transparent'}`}
                                    onClick={() => handleButtonClick(index)}
                                >
                                    {retailer}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-2 h-full">
                        <div className="flex flex-col gap-2 flex-grow">
                            <h1>Arrival date:</h1>
                            <div className="input input-purple h-full">
                                <input className='date-input' type="date" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 flex-grow">
                            <h1>Return date:</h1>
                            <div className="input input-purple h-full">
                                <input className='date-input' type="date" disabled={selectedButton === 0}/>
                            </div>
                        </div>
                    </div>

                    <label className="text-xl font-semibold">Order Resctrictions:</label>

                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="input input-purple w-full">
                            <input placeholder="Min Price" />
                        </div>
                        <div className="input input-purple w-full">
                            <input placeholder="Max Price"/>
                        </div>
                        <div className="input input-purple w-full">
                            <input placeholder="Weight Cap"/>
                        </div>
                    </div>
                    
                    <div>
                        <h1>Additional description:</h1>
                        <div className="input input-purple">
                            <textarea className='placeholder-[#585a6ea5] min-h-28' placeholder="Write description here" />
                        </div>
                    </div>
                </div>

                <div className="flex w-full gap-2 text-white">
                    <button className="py-3 bg-accentPurple w-full rounded-lg">Create Trip</button>
                </div>
            </div>
        </>
    )
}

export default TravelForm;