import Image from "next/image";


const SearchBar = (props) => {
    return (
        <form className={`flex ${props.isHorizontal ? '' : 'flex-col' }  gap-4 px-6 justify-center items-center w-full`}>
        <div className="flex flex-col w-full items-center gap-2 md:flex-row">
          <div className={`input ${props.isTravel ? 'input-purple' : 'input-green'} w-full`}>
            <input type="text" placeholder="from" />
          </div>
          <button className="w-6 h-6 md:w-12 md:h-12"><Image src='/images/swap.png' width={24} height={24} alt="swap icon" className="" /></button>
          <div className={`input ${props.isTravel ? 'input-purple' : 'input-green'} w-full`}>
            <input type="text" placeholder="to" />
          </div>
        </div>

        <button className={`${props.isTravel ? 'bg-accentPurple' : 'bg-accentGreen'} text-white ${props.isHorizontal ? 'w-fit' : 'w-full'} py-3 px-6 rounded-lg font-bold`}>Search</button>
      </form>
    )
}

export default SearchBar;