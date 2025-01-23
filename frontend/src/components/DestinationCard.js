
const DestinationCard = (prop) => {
    return (
        <div className="flex flex-col p-0 rounded-xl overflow-hidden bg-accentGreenLighter border border-accentGreen hover:border-transparent hover:shadow-green transition-all duration-200 ease-in">
            <a href={`/orders?from=${encodeURIComponent("")}&to=${encodeURIComponent(prop.city)}`} className="flex flex-col gap-3">
              <img src={prop.img} className="w-full h-44 object-cover" />
              <div className="flex flex-col justify-betwe gap-3 p-3 text-foreground">
                <div>
                  <h4 className="text-2xl font-semibold font-primary text-accentGreenDark">{prop.city}</h4>
                  <p className="font-semibold">{prop.orders} Orders</p>
                </div>
                <div>
                    <h5 className="text-xl font-bold font-primary text-accentGreen">${prop.rewards}</h5>
                    <p>In Rewards</p>
                </div>
              </div>
            </a>
          </div>
    )
}

export default DestinationCard;