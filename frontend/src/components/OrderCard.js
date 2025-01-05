import Image from "next/image";

const OrderCard = () => {
    return (
        <div className="border-accentGreen border rounded-lg overflow-hidden bg-accentGreenLighter">
            <div>
                <Image src="/images/earpod.jpg" width={5184} height={3456} className="w-full h-auto" />
                <div className="p-4 flex flex-col gap-3">
                    <div className="flex gap-2">
                        <Image src='/images/profile.jpg' width={200} height={200} className="w-12 h-12 rounded-full" />
                        <div className="flex flex-col justify-center">
                            <h2 className="text-xl text-accentGreenDark font-bold leading-none">AirPods Pro</h2>
                            <a className="text-accentGreen">Buy it here</a>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-4 hidden">
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
                    <button className="w-full py-3 bg-accentGreen text-white font-semibold rounded-lg">Make an Offer</button>
                </div>
            </div>
        </div>
    )
}

export default OrderCard;