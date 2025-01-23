const TopTravelerCard = (prop) => {
    return (
        <div className=" p-2 hover:p-0 relative rounded-t-full rounded-b-[1000px] transition-[padding] ease-out duration-500">
            <div className="text-center shadow-inner flex flex-col rounded-t-full rounded-b-[1000px] overflow-hidden bg-white bg-opacity-85  transition-all duration-200 ease-in">
              <a href={`/profile?id=${prop.id}`}>
                <img src={prop.img} className="w-full aspect-square object-cover rounded-l-full" />
                <div className="flex flex-col gap-3 p-3 text-foreground">
                  <div>
                    <h4 className="text-2xl gradient-text font-bold font-primary">{prop.name}</h4>
                    <p className="font-semibold opacity-60">${prop.earned} earned</p>
                  </div>
                  <div>
                    <h5 className="text-2xl gradient-text font-bold font-primary">{prop.delivered}</h5>
                    <p className="font-semibold opacity-60">Completed Orders</p>
                  </div>
                </div>
              </a>
              <div class="absolute inset-0 rounded-t-full rounded-xl -z-10  bg-gradient-to-r from-accentPurpleLight to-accentGreenLight glow-animate opacity-75"></div>
            </div>
          </div>
    )
}

export default TopTravelerCard;