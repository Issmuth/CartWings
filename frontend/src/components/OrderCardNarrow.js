const OrderCardNarrow = (props) => {
    console.log(props);
    return (
        <div className="flex flex-col p-0 rounded-xl overflow-hidden bg-accentPurpleLighter border border-accentPurple hover:border-transparent hover:shadow-purple transition-all duration-200 ease-in">
        <a href={`/orders?id=${props.id}`}>
          <img src={props.img} className="w-full h-48 object-cover" />
          <div className="flex flex-col gap-3 p-3 text-foreground">
            <div>
              <h4 className="text-2xl font-bold font-primary text-accentPurpleDark">{props.name}</h4>
              <p className="text-lg font-semibold">{props.from} to {props.to}</p>
            </div>
            <div className="flex justify-between">
              <div>
                <h5 className="text-xl font-bold font-primary text-accentPurple">{props.price}</h5>
                <p>Item Price</p>
              </div>
              <div>
                <h5 className="text-xl font-bold font-primary text-accentPurple">{props.offer}</h5>
                <p>Starting Offer</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    )
}

export default OrderCardNarrow;

