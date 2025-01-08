"use client";
import { useState } from "react";
import Image from "next/image";

const OrderForm = () => {
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
                    <label className="text-xl font-semibold">Product details:</label>
                    <div className="input input-green w-full">
                        <input placeholder="Product link" />
                    </div>

                    {/* Retailer Selection */}
                    <div className=" text-center">
                        <h1 className="font-accentGreenDark text-lg">Choose your retailer</h1>
                        <div className="flex whitespace-nowrap overflow-auto scroll-hide gap-2 py-2">
                            {[{ icon: '/images/amazon.png' }, { icon: '/images/ebay.png' }, { icon: '/images/walmart.png' }].map((retailer, index) => (
                                <button
                                    key={index}
                                    className={`py- min-w-[160px] flex justify-center flex-grow items-center flex-shrink-0 rounded-lg whitespace-nowrap overflow-x-auto bg-accentGreenLighter border-2 ${selectedButton === index ? 'border-accentGreen text-accentGreen bg-transparent' : 'text-accentGreenDark border-transparent'}`}
                                    onClick={() => handleButtonClick(index)}
                                >
                                    <img src={retailer.icon} />
                                </button>
                            ))}

                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="input input-green w-full">
                            <input placeholder="Product Name" />
                        </div>
                        <div className="input input-green w-full">
                            <input placeholder="Price" onChange={handlePriceChange} />
                        </div>
                        <div className="input input-green w-full">
                            <input placeholder="Weight" />
                        </div>
                    </div>

                    {/* Image upload */}
                    <div className="flex w-full gap-3 flex-wrap h-fit">
                        {imageInputs.map((input, index) => (
                            <div key={index} id="upload-container" className="relative flex-1 min-w-[150px] h-auto">
                                <label htmlFor={`image-${index}`} className="w-full aspect-square">
                                    <div className={`relative bg-transparent border-dashed  w-full aspect-square flex flex-col items-center justify-center text-center p-5 rounded-2xl overflow-hidden border-2  ${input.uploaded ? 'border-transparent bg-accentGreenExtralight' : 'border-accentGreen'} ease-in duration-100 hover:bg-accentGreenExtralight md:max-w-[200px]`}>
                                        {input.uploaded ? (
                                            <img src={input.src} alt="Uploaded" className="w-full h-full object-contain absolute" />
                                        ) : (
                                            <>
                                                <Image src='/images/Camera.png' width={50} height={50} />
                                                <h1 className="text-center font-semibold text-accentGreen">Product image</h1>
                                            </>
                                        )}

                                    </div>
                                    <input id={`image-${index}`} type="file" className="hidden" onChange={(e) => handleImageChange(index, e)} />
                                </label>
                                {input.uploaded && (
                                    <button
                                        type="button"
                                        className="absolute top-2 left-2 bg-black bg-opacity-50 text-white rounded-full font-light text-2xl w-10 h-10 flex items-center justify-center"
                                        onClick={() => removeImageInput(index)}
                                    >
                                        ×
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>

                    <label className="text-xl font-semibold">Order details:</label>
                    <div>
                        <div className="flex flex-col w-full items-center gap-2 md:flex-row">
                            <div className='input input-green w-full'>
                                <input type="text" placeholder="from" />
                            </div>
                            <button className="w-6 h-6 md:w-12 md:h-12"><Image src='/images/swap.png' width={24} height={24} alt="swap icon" className="" /></button>
                            <div className='input input-green w-full'>
                                <input type="text" placeholder="to" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-2 h-full">
                        <div className="flex flex-col gap-2 flex-grow">
                            <h1>Delivered before:</h1>
                            <div className="input input-green h-full">
                                <input className='date-input' type="date" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 flex-grow">
                            <h1>Delivered after:</h1>
                            <div className="input input-green h-full">
                                <input className='date-input' type="date" />
                            </div>
                        </div>

                        <div className="flex-grow">
                            <h1 className="mb-2">Quantity:</h1>
                            <div className="input input-green items-center justify-center gap-2">
                                <input value={quantity} readOnly className="max-w-fit" />
                                <div className="flex flex-col gap-1 items-end">
                                    <button type="button" onClick={increaseQuantity}>
                                        <Image src='/images/Arrow.png' width={20} height={20} />
                                    </button>
                                    <button type="button" onClick={decreaseQuantity}>
                                        <Image src='/images/Arrow.png' width={20} height={20} className="rotate-180" />
                                    </button>
                                </div>
                            </div>
                            <h1 className="pr-3 font-semibold justify-self-end">Total Price: $ {price * quantity}</h1>
                        </div>
                    </div>

                    {/* Condition Selection */}
                    <div className=" text-center">
                        <h1 className="font-accentGreenDark text-lg">Product Condition</h1>
                        <div className="flex whitespace-nowrap overflow-auto scroll-hide gap-2 py-2">
                            {["With box", 'Open box', 'Refubrished'].map((retailer, index) => (
                                <button
                                    key={index}
                                    className={`py-3 min-w-[160px] flex justify-center font-bold flex-shrink-0 flex-grow items-center rounded-lg whitespace-nowrap overflow-x-auto bg-accentGreenLighter border-2 ${selectedButton === index ? 'border-accentGreen text-accentGreen bg-transparent' : 'text-accentGreenDark border-transparent'}`}
                                    onClick={() => handleButtonClick(index)}
                                >
                                    {retailer}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h1>Additional description:</h1>
                        <div className="input input-green">
                            <textarea className='placeholder-[#586e66] min-h-28' placeholder="Write description here" />
                        </div>
                    </div>
                </div>

                <div className="flex w-full gap-2 text-white">
                    <button className="py-3 bg-accentGreen w-full rounded-lg">Complete Order</button>
                </div>
            </div>
        </>
    )
}

export default OrderForm;