import Image from "next/image";

const TripCard = () => {
    return (
        <div className="border-accentPurple border rounded-lg overflow-hidden bg-accentPurpleLighter">
            <div className="flex flex-col lg:flex-row">
                <Image src="/images/profile.jpg" width={5184} height={3456} className="w-full h-auto lg:w-2/5 object-cover bg-accentPurpleExtralight" />
                <div className="py-4 px-2 w-full flex flex-col gap-3 md:px-6">
                    <div className="flex gap-2">
                        <Image src='/images/profile.jpg' width={200} height={200} className="w-12 h-12 rounded-full" />
                        <div className="flex flex-col justify-center">
                            <h2 className="text-xl text-accentPurpleDark font-bold leading-none">AirPods Pro</h2>
                            <h3 className="font-medium text-accentPurpleDark">Paris to New York</h3>
                        </div>
                    </div>
                    <div className="flex justify-between">
                    </div>
                    <div className="text-accentPurpleDark text-sm flex flex-col gap-1">
                        <div className="flex justify-between">
                            <h4>Arrival Date</h4>
                            <p className="font-bold">January 25 2025</p>
                        </div>
                        <div className="flex justify-between">
                            <h4>Return Date</h4>
                            <p className="font-bold">February 3 2025</p>
                        </div>
                        <div className="flex justify-between">
                            <h4>Minimum Price</h4>
                            <p className="font-bold">$9.99</p>
                        </div>
                        <div className="flex justify-between">
                            <h4>Maximum Price</h4>
                            <p className="font-bold">$360.0</p>
                        </div>
                        <div className="flex justify-between">
                            <h4>Weight Cap</h4>
                            <p className="font-bold">2.5KG</p>
                        </div>
                    </div>
                    <button className="w-full py-3 bg-accentPurple text-white font-semibold rounded-lg">More Details</button>
                </div>
            </div>  
        </div>
    )
}

export default TripCard;