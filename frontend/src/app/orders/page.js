import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import OrderCard from "@/components/OrderCard";

const Orders = () => {
    return (
        <section className="bg-accentGreenBg px-5 py-5">
            <div className="flex flex-col gap-5">
                <div className="w-full glass py-5 rounded-lg border-white border-2 flex">
                    <SearchBar className='flex flex-row' />
                </div>
                <div className="flex flex-col  glass border-white border-2 rounded-lg py-5 px-6 gap-6">
                    <div className="w-full flex justify-between">
                        <span className="flex gap-2 items-center text-accentGreenDark font-bold">Sort by <Image src="/images/Arrow.png" className="rotate-180 h-4 w-4" width={12} height={12}/></span>
                        <span className="flex gap-2 items-center text-accentGreenDark font-bold">Filters <Image src="/images/Arrow.png" className="rotate-180 h-4 w-4" width={12} height={12}/></span>
                    </div>

                    <div>
                        <h1 className="mb-2">234 Results</h1>
                        <div className="flex flex-col gap-4">
                            <OrderCard/>
                            <OrderCard/>
                        </div>
                    </div>

                    <div className="flex w-full gap-2">
                        <button className="flex-1 border-accentGreenDark border py-3 rounded-lg text-accentGreenDark font-semibold">Back to Top</button>
                        <button className="flex-1 border-accentGreen border py-3 rounded-lg text-accentGreen font-semibold">Load More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Orders;