import Image from "next/image";
import TravelForm from "./TravelForm";

const OrderCard = () => {
    return (
        <div className="border-accentGreen border rounded-lg overflow-hidden bg-accentGreenLighter">
            <div className="flex flex-col lg:flex-row">
                <Image src="/images/earpod.jpg" width={5184} height={3456} className="w-full h-auto lg:w-2/5 object-cover bg-accentGreenExtralight" />
                <div className="py-4 px-2 w-full flex flex-col gap-3 md:px-6">
                    <div className="flex gap-2">
                        <Image src='/images/profile.jpg' width={200} height={200} className="w-12 h-12 rounded-full md:hidden" />
                        <div className="flex flex-col justify-center">
                            <h2 className="text-xl text-accentGreenDark font-bold leading-none">AirPods Pro</h2>
                            <a className="text-accentGreen">Buy it here</a>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="gap-4 hidden md:flex">
                            <Image src='/images/profile.jpg' width={200} height={200} className="w-12 h-12 rounded-full" />
                            <div>
                                <h3>Harold</h3>
                                <p>Posted 5 hours ago</p>
                            </div>
                        </div>
                        <h3 className="font-semibold text-accentGreenDark">Paris to New York</h3>
                    </div>
                    <div className="text-accentGreenDark text-sm flex flex-col gap-1">
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
                    <button className="w-full py-3 bg-accentGreen text-white font-semibold rounded-lg">More Details</button>
                </div>
            </div>  
        </div>
    )
}

export default OrderCard;