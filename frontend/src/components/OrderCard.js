
const OrderCard = (prop) => {
    

    return (
        <div className="border-accentGreen border rounded-lg overflow-hidden bg-accentGreenLighter">
            <div className="flex flex-col lg:flex-row">
                <img src={prop.img} className="w-full h-auto lg:w-2/5 object-cover bg-accentGreenExtralight" />
                <div className="py-4 px-2 w-full md:w-3/5 flex flex-col gap-3 md:px-6">
                    <div className="flex gap-2">
                        <img src={prop.profileImg} className="w-12 h-12 rounded-full md:hidden" />
                        <div className="flex flex-col justify-center">
                            <h2 className="text-xl text-accentGreenDark font-bold leading-none">{prop.productName}</h2>
                            <a href={prop.productLink} className="text-accentGreen">Buy it here</a>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="gap-4 hidden md:flex">
                            <img src={prop.profileImg} className="w-12 h-12 rounded-full" />
                            <div>
                                <h3>{prop.profileName}</h3>
                                <p>Posted 5 hours ago</p>
                            </div>
                        </div>
                        <h3 className="font-semibold text-accentGreenDark">{prop.from} to {prop.to}</h3>
                    </div>
                    <div className="text-accentGreenDark text-sm flex flex-col gap-1">
                        <div className="flex justify-between">
                            <h4>Delivered by</h4>
                            <p className="font-semibold">{prop.deliveredBy}</p>
                        </div>
                        <div className="flex justify-between">
                            <h4>Product Price</h4>
                            <p className="font-semibold">{prop.productPrice}</p>
                        </div>
                        <div className="flex justify-between">
                            <h4>Starting Offer</h4>
                            <p className="font-semibold">{prop.offer}</p>
                        </div>
                        <div className="flex justify-between">
                            <h4>Package Condition</h4>
                            <p className="font-semibold">{prop.condition}</p>
                        </div>
                    </div>
                    <button onClick={() => {window.location.href = `/order/${prop.id}`}} className="w-full py-3 bg-accentGreen text-white font-semibold rounded-lg">More Details</button>
                </div>
            </div>  
        </div>
    )
}


export default OrderCard;