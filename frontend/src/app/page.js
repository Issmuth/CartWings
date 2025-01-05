'use client';
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isTravel, setisTravel] = useState(false);

  const toggleButton = () => {
    setisTravel(!isTravel);
  };

  return (
    <div>
      {/* ########## Hero Section ########## */}
      <section className="flex flex-col gap-10 gradient-bg px-5 py-16 md:px-24 text-center">
        <h1 className="gradient-text font-tertiary text-center text-5xl px-6">Explore the World, Shop the Globe</h1>
        <div className="flex flex-col gap-8 w-full rounded-2xl overflow-hidden border-2 border-white bg-white bg-opacity-50 drop-sh md:flex-row">
          {/* clip container */}
          <div className={`${isTravel ? 'bg-accentPurpleLight' : 'bg-[#415D53]'} w-full md:w-2/5`}>
            <video src={`/videos/${isTravel ? 'travel.mp4' : 'shop.mp4'}`} autoPlay loop className="mix-blend-luminosity h-full w-auto object-cover" />
          </div>

          {/* search container */}
          <div className="flex flex-col justify-center items-center gap-2 py-8">
            <button
              className={`w-20 h-10 mb-5 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isTravel ? 'bg-accentPurpleLight' : 'bg-accentGreenLight'}`}
              onClick={toggleButton}
            >
              <div
                className={`bg-white w-7 h-7 rounded-full shadow-md transform transition-transform duration-300 ${isTravel ? 'translate-x-10' : 'translate-x-0'}`}
              ></div>
            </button>

            <h1 className={`font-tertiary text-5xl ${isTravel ? 'text-accentPurple' : 'text-accentGreen'}`}>{isTravel ? 'Earn on the Go' : 'Shop Globally'}</h1>
            <p className="font-secondary text-xl text-center px-14 font-bold">{isTravel ? 'Find orders along your route' : 'Find travelers coming to you'}</p>
            <SearchBar isTravel={isTravel} />
          </div>
        </div>
      </section>
    </div>
  );
}
