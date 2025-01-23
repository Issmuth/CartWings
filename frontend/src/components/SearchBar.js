import Image from "next/image";
import { useState } from "react";

const SearchBar = (props) => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    const handleSwap = () => {
        const temp = from;
        setFrom(to);
        setTo(temp);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const basePath = props.isTravel ? '/trips' : '/orders';
        window.location.href = `${basePath}?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
    };

    return (
        <form className={`flex ${props.isHorizontal ? '' : 'flex-col' }  gap-4 px-6 justify-center items-center w-full`} onSubmit={handleSearch}>
        <div className="flex flex-col w-full items-center gap-2 md:flex-row">
          <div className={`input ${props.isTravel ? 'input-purple' : 'input-green'} w-full`}>
            <input 
                type="text" 
                placeholder="from (e.g. New York)" 
                value={from} 
                onChange={(e) => setFrom(e.target.value)} 
            />
          </div>
          <button type="button" onClick={handleSwap} className="w-6 h-6 md:w-12 md:h-12">
            <Image src='/images/swap.png' width={24} height={24} alt="swap icon" className="" />
          </button>
          <div className={`input ${props.isTravel ? 'input-purple' : 'input-green'} w-full`}>
            <input 
                type="text" 
                placeholder="to" 
                value={to} 
                onChange={(e) => setTo(e.target.value)} 
            />
          </div>
        </div>

        <button className={`${props.isTravel ? 'bg-accentPurple' : 'bg-accentGreen'} text-white ${props.isHorizontal ? 'w-fit' : 'w-full'} py-3 px-6 rounded-lg font-bold`}
          type="submit"
        >Search</button>
      </form>
    )
}

export default SearchBar;