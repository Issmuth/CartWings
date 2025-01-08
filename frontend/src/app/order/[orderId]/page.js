import TravelForm from "@/components/TravelForm";

const OrderDetails = () => {
    return (
        <section className='bg-accentGreenBg flex flex-col px-5 py-8 gap-5'>
            <div className="glass w-full border-2 border-white rounded-xl px-3 py-5 flex flex-col gap-3">
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-2xl font-semibold">Macbook Air 13,13"</h1>
                        <p className="text-lg">Paris to New York</p>
                    </div>
                    <a href="#" className="text-accentGreen">Buy it here</a>
                </div>
                <div className="w-full border border-accentGreen bg-accentGreenExtralight rounded-xl overflow-hidden">
                    <img src="/images/macbook.png" className="w-full h-auto object-contain" />
                </div>
                <div className="w-full grid grid-cols-3 gap-2 bg-accentGreenLighter border border-accentGreen rounded-xl p-3">
                    <img src="/images/mac1.png" className="w-full h-auto object-contain rounded-xl" />
                    <img src="/images/mac2.png" className="w-full h-auto object-contain rounded-xl" />
                    <img src="/images/mac3.png" className="w-full h-auto object-contain rounded-xl" />
                    <img src="/images/mac4.png" className="w-full h-auto object-contain rounded-xl" />
                </div>
            </div>
            <div className="glass w-full border-2 border-white rounded-xl px-3 py-5 flex flex-col gap-5">
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
                    <button className="bg-accentGreen w-full text-white font-semibold py-3 rounded-lg">Make Offer</button>
                </div>
            </div>
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 py-12 px-5 overflow-scroll">
                <div className="glass border-2 border-white rounded-xl py-12 flex flex-col gap-8 md:w-full md:max-w-[800px]">
                    <div></div>
                    <TravelForm/>
                </div>
            </div>
        </section>
    )
}

export default OrderDetails;