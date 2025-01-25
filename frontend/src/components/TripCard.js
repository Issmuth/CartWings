const TripCard = (props) => {
    return (
        <div className="border-accentPurple border rounded-lg overflow-hidden bg-accentPurpleLighter">
            <div className="flex flex-col lg:flex-row">
                <img src={props.profileImg} width={5184} height={3456} className="w-full h-auto lg:w-2/5 object-cover bg-accentPurpleExtralight" />
                <div className="py-4 md:pt-10 px-2 w-full flex flex-col justify-between gap-3 md:px-6">
                    <div className="flex gap-2">
                        <img src={props.profileImg} width={200} height={200} className="w-12 h-12 rounded-full" />
                        <div className="flex flex-col justify-center">
                            <h2 className="text-xl text-accentPurpleDark font-bold leading-none">{props.name}</h2>
                            <h3 className="font-medium text-accentPurpleDark">{props.from} to {props.to}</h3>
                        </div>
                    </div>
                    <div className="flex justify-between">
                    </div>
                    <div className="text-accentPurpleDark text-sm flex flex-col gap-1">
                        <div className="flex justify-between">
                            <h4>Arrival Date</h4>
                            <p className="font-bold">{props.arrivesOn}</p>
                        </div>
                        <div className="flex justify-between">
                            <h4>Return Date</h4>
                            <p className="font-bold">{props.returnsOn}</p>
                        </div>
                        <div className="flex justify-between">
                            <h4>Minimum Price</h4>
                            <p className="font-bold">{props.minPrice}</p>
                        </div>
                        <div className="flex justify-between">
                            <h4>Maximum Price</h4>
                            <p className="font-bold">{props.maxPrice}</p>
                        </div>
                        <div className="flex justify-between">
                            <h4>Weight Cap</h4>
                            <p className="font-bold">{props.maxWeight}</p>
                        </div>
                    </div>
                    <button className="w-full py-3 bg-accentPurple text-white font-semibold rounded-lg">More Details</button>
                </div>
            </div>  
        </div>
    )
}

export default TripCard;