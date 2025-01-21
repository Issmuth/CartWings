'use client';
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import { useRef } from "react";
import Link from "next/link";

export default function Home() {
  const [isTravel, setisTravel] = useState(false);
  const [isTripAccordion, setTripAccordion] = useState(false);
  const accordionRef = useRef(null);

  const tripAccordionToggle = () => {
    setTripAccordion(true);
  }

  const shopperAccordionToggle = () => {
    setTripAccordion(false);
  }

  const accordionClick = (event) => {
    const activePanel = event.target.closest('.accordion-panel');
    if (!activePanel) return;

    const buttons = activePanel.parentElement.querySelectorAll("button");
    const contents = activePanel.parentElement.querySelectorAll(".accordion-content");

    buttons.forEach(button => {
      button.setAttribute("aria-expanded", false);
    });

    activePanel.querySelector("button").setAttribute("aria-expanded", true);

    contents.forEach(content => {
      content.setAttribute("aria-hidden", true);
    })

    activePanel.querySelector(".accordion-content").setAttribute("aria-hidden", false);
  };

  const toggleButton = () => {
    setisTravel(!isTravel);
  };


  return (
    <>
      {/* ########## Hero Section ########## */}
      <section className="flex flex-col gap-10 gradient-bg px-5 py-16 md:px-24 text-center">
        <h1 className="gradient-text font-tertiary text-center text-5xl px-6">Explore the World, Shop the Globe</h1>
        <div className="flex flex-col gap-8 w-full rounded-2xl overflow-hidden border-2 border-white bg-white glass bg-opacity-50 box-shadow md:flex-row">
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



      {/* ########## Info Section ########## */}

      <div className="flex flex-col gap-2 justify-center items center py-10">
        <h1 className="text-center text-5xl font-primary font-semibold px-4 leading-[3rem]">Getting Started</h1>
        <p className="text-center text-xl">Unlock the magic of Cartwings!</p>
      </div>

      <section className={`flex flex-col items-center gap-5 py-6 px-5 ${isTripAccordion ? 'bg-accentPurpleLight' : 'bg-accentGreenLight'} md:px-20 md:pb-20 transition-colors duration-200`}>
        <div className={`text-xl ${isTripAccordion ? 'border-accentPurple' : 'border-accentGreen'} flex gap-6 justify-center px-2 py-3 md:w-[80%]`}>
          <button
            className={`py-3 flex w-full max-w-[180px] justify-center font-bold items-center flex-grow rounded-lg bg-transparent border-2 md:flex-initial px-6   ${isTripAccordion ? 'text-accentPurpleDark border-transparent hover:border-accentPurpleDark' : 'border-white text-white'} transition-all duration-200 ease-in-out`}
            onClick={shopperAccordionToggle}
          >
            Shopper
          </button>
          <button
            className={`py-3 flex w-full max-w-[180px] justify-center font-bold  items-center rounded-lg flex-grow bg-transparent border-2 md:flex-initial px-6 ${isTripAccordion ? 'border-white text-white' : 'border-transparent text-accentGreenDark hover:border-accentGreenDark'} transition-all duration-200 ease-in-out`}
            onClick={tripAccordionToggle}
          >
            Traveler
          </button>
        </div>
        <div className={`glass ${isTripAccordion ? 'box-shadow-purple' : 'box-shadow-green'} w-full flexborder-2 border-2 border-white rounded-3xl`}>
          <div className='overflow-hidden relative'>
            <div className={`max-w-[45rem] lg:max-w-[55rem] m-auto p-6 ${isTripAccordion ? '-translate-x-full absolute' : 'translate-x-0'}  transition-transform ease-in-out duration-500`}>
              <div className="flex flex-col gap-4 md:flex-row md:h-[25rem]" id="accordion" ref={accordionRef} onClick={accordionClick}>
                <div className='accordion-panel group has-[[aria-expanded="false"]]:bg-[#415d53] text-white relative isolate basis-[4.5rem] has-[[aria-expanded="true"]]:flex-grow p-3 pr-8 overflow-hidden rounded-[2.25rem] has-[[aria-expanded="true"]]:basis-[18rem] transition-[all] duration-500'>
                  <h2 id="panel1-heading">
                    <button
                      aria-controls="panel1-content"
                      aria-expanded="true"
                      className="flex items-center gap-4 flex-row-reverse font-primary font-semibold text-lg whitespace-nowrap"
                    >
                      <span id="panel1-title">Find a Traveler</span>
                      <div className="bg-accentGreen w-12 aspect-square content-center rounded-full text-white font-semibold">1</div>
                    </button>
                  </h2>
                  <div
                    id="panel1-content"
                    className="accordion-content"
                    aria-labelledby="panel1-heading"
                    role="region"
                    aria-hidden="false">
                    <p className='ml-[4rem] font-secondary translate-y-8 opacity-0 group-has-[[aria-expanded="true"]]:translate-y-0 group-has-[[aria-expanded="true"]]:opacity-100 group-has-[[aria-expanded="true"]]:transition-all group-has-[[aria-expanded="true"]]:delay-500 group-has-[[aria-expanded="true"]]:duration-500'>
                      Connect with travelers who can deliver your item by browsing those heading your way,
                      or simply place your order here and let the travelers come to you!
                    </p>
                    <img className='absolute brightness-[30%] inset-0 object-cover w-full h-full -z-10 group-has-[[aria-expanded="true"]]:brightness-[30%] transition-[filter] mix-blend-luminosity' src="/images/orderAcc1.jpg" />
                  </div>
                </div>
                <div className='accordion-panel group has-[[aria-expanded="false"]]:bg-[#415d53] text-white relative isolate basis-[4.5rem] has-[[aria-expanded="true"]]:flex-grow p-3 pr-8 overflow-hidden rounded-[2.25rem] has-[[aria-expanded="true"]]:basis-[18rem] transition-[all] duration-500'>
                  <h2 id="panel2-heading">
                    <button
                      aria-controls="panel2-content"
                      aria-expanded="false"
                      className="flex items-center gap-4 flex-row-reverse font-primary font-semibold text-lg whitespace-nowrap"
                    >
                      <span id="panel2-title">Choose a deal</span>
                      <div className="bg-accentGreen w-12 aspect-square content-center rounded-full text-white font-semibold">2</div>
                    </button>
                  </h2>
                  <div
                    id="panel2-content"
                    className="accordion-content"
                    aria-labelledby="panel2-heading"
                    role="region"
                    aria-hidden="true">
                    <p className='ml-[4rem] font-secondary translate-y-8 opacity-0 group-has-[[aria-expanded="true"]]:translate-y-0 group-has-[[aria-expanded="true"]]:opacity-100 group-has-[[aria-expanded="true"]]:transition-all group-has-[[aria-expanded="true"]]:delay-500 group-has-[[aria-expanded="true"]]:duration-500'>
                      As travelers approach, they'll bid you offers, starting from your initial proposal when placing your order.
                      You can then negotiate to secure the best deal possible.
                    </p>
                    <img className='absolute brightness-[30%] inset-0 object-cover w-full h-full -z-10 group-has-[[aria-expanded="true"]]:brightness-[30%] transition-[filter] mix-blend-luminosity' src="/images/orderAcc2.jpg" />
                  </div>
                </div>
                <div className='accordion-panel group has-[[aria-expanded="false"]]:bg-[#415d53] text-white relative isolate basis-[4.5rem] has-[[aria-expanded="true"]]:flex-grow p-3 pr-8 overflow-hidden rounded-[2.25rem] has-[[aria-expanded="true"]]:basis-[18rem] transition-[all] duration-500'>
                  <h2 id="panel3-heading">
                    <button
                      aria-controls="panel3-content"
                      aria-expanded="false"
                      className="flex items-center gap-4 flex-row-reverse font-primary font-semibold text-lg whitespace-nowrap"
                    >
                      <span id="panel3-title">Complete Order</span>
                      <div className="bg-accentGreen w-12 aspect-square content-center rounded-full text-white font-semibold">3</div>
                    </button>
                  </h2>
                  <div
                    id="panel3-content"
                    className="accordion-content"
                    aria-labelledby="panel3-heading"
                    role="region"
                    aria-hidden="hidden">
                    <p className='ml-[4rem] font-secondary translate-y-8 opacity-0 group-has-[[aria-expanded="true"]]:translate-y-0 group-has-[[aria-expanded="true"]]:opacity-100 group-has-[[aria-expanded="true"]]:transition-all group-has-[[aria-expanded="true"]]:delay-500 group-has-[[aria-expanded="true"]]:duration-500'>
                      After locating your traveler, you can finalize your order by completing the payment to Cartwings.
                      Once the delivery is confirmed, the payment will be released to the traveler. If not, you will receive a full refund.
                    </p>
                    <img className='absolute brightness-[30%] inset-0 object-cover w-full h-full -z-10 group-has-[[aria-expanded="true"]]:brightness-[30%] transition-[filter] mix-blend-luminosity' src="/images/orderAcc3.jpg" />
                  </div>
                </div>
                <div className='accordion-panel group has-[[aria-expanded="false"]]:bg-[#415d53] text-white relative isolate basis-[4.5rem] has-[[aria-expanded="true"]]:flex-grow p-3 pr-8 overflow-hidden rounded-[2.25rem] has-[[aria-expanded="true"]]:basis-[18rem] transition-[all] duration-500'>
                  <h2 id="panel4-heading">
                    <button
                      aria-controls="panel4-content"
                      aria-expanded="false"
                      className="flex items-center gap-4 flex-row-reverse font-primary font-semibold text-lg whitespace-nowrap"
                    >
                      <span id="panel4-title">Collect Your Package</span>
                      <div className="bg-accentGreen w-12 aspect-square content-center rounded-full text-white font-semibold">4</div>
                    </button>
                  </h2>
                  <div
                    id="panel4-content"
                    className="accordion-content"
                    aria-labelledby="panel4-heading"
                    role="region"
                    aria-hidden="true">
                    <p className='ml-[4rem] font-secondary translate-y-8 opacity-0 group-has-[[aria-expanded="true"]]:translate-y-0 group-has-[[aria-expanded="true"]]:opacity-100 group-has-[[aria-expanded="true"]]:transition-all group-has-[[aria-expanded="true"]]:delay-500 group-has-[[aria-expanded="true"]]:duration-500'>
                      Set up a convenient time and a public location to meet your traveler.
                      Once you receive your item, be sure to confirm the delivery by scanning the travelers QR code, so your traveler can receive their payment.
                    </p>
                    <img className='absolute brightness-[30%] inset-0 object-cover w-full h-full -z-10 group-has-[[aria-expanded="true"]]:brightness-[30%] transition-[filter] mix-blend-luminosity' src="/images/orderAcc4.jpg" />
                  </div>
                </div>
              </div>
            </div>

            <div className={`max-w-[45rem] lg:max-w-[55rem] m-auto p-6 ${!isTripAccordion ? 'translate-x-full absolute' : 'translate-x-0'}  transition-transform ease-in-out duration-500`}>
              <div className="flex flex-col gap-4 md:flex-row md:h-[25rem]" id="accordion" ref={accordionRef} onClick={accordionClick}>
                <div className='accordion-panel group has-[[aria-expanded="false"]]:bg-[#373D5C] text-white relative isolate basis-[4.5rem] has-[[aria-expanded="true"]]:flex-grow p-3 pr-8 overflow-hidden rounded-[2.25rem] has-[[aria-expanded="true"]]:basis-[18rem] transition-[all] duration-500'>
                  <h2 id="panel1-heading">
                    <button
                      aria-controls="panel1-content"
                      aria-expanded="true"
                      className="flex items-center gap-4 flex-row-reverse font-primary font-semibold text-lg whitespace-nowrap"
                    >
                      <span id="panel1-title">Find an Order</span>
                      <div className="bg-accentPurple w-12 aspect-square content-center rounded-full text-white font-semibold">1</div>
                    </button>
                  </h2>
                  <div
                    id="panel1-content"
                    className="accordion-content"
                    aria-labelledby="panel1-heading"
                    role="region"
                    aria-hidden="false">
                    <p className='ml-[4rem] font-secondary translate-y-8 opacity-0 group-has-[[aria-expanded="true"]]:translate-y-0 group-has-[[aria-expanded="true"]]:opacity-100 group-has-[[aria-expanded="true"]]:transition-all group-has-[[aria-expanded="true"]]:delay-500 group-has-[[aria-expanded="true"]]:duration-500'>
                      Discover an order on your route, or even better,
                      list your trip on our platform so shoppers can easily connect with you.
                    </p>
                    <img className='absolute brightness-[30%] inset-0 object-cover w-full h-full -z-10 group-has-[[aria-expanded="true"]]:brightness-50 transition-[filter] mix-blend-luminosity' src="/images/tokyo.png" />
                  </div>
                </div>
                <div className='accordion-panel group has-[[aria-expanded="false"]]:bg-[#373D5C] text-white relative isolate basis-[4.5rem] has-[[aria-expanded="true"]]:flex-grow p-3 pr-8 overflow-hidden rounded-[2.25rem] has-[[aria-expanded="true"]]:basis-[18rem] transition-[all] duration-500'>
                  <h2 id="panel2-heading">
                    <button
                      aria-controls="panel2-content"
                      aria-expanded="false"
                      className="flex items-center gap-4 flex-row-reverse font-primary font-semibold text-lg whitespace-nowrap"
                    >
                      <span id="panel2-title">Make an Offer</span>
                      <div className="bg-accentPurple w-12 aspect-square content-center rounded-full text-white font-semibold">2</div>
                    </button>
                  </h2>
                  <div
                    id="panel2-content"
                    className="accordion-content"
                    aria-labelledby="panel2-heading"
                    role="region"
                    aria-hidden="true">
                    <p className='ml-[4rem] font-secondary translate-y-8 opacity-0 group-has-[[aria-expanded="true"]]:translate-y-0 group-has-[[aria-expanded="true"]]:opacity-100 group-has-[[aria-expanded="true"]]:transition-all group-has-[[aria-expanded="true"]]:delay-500 group-has-[[aria-expanded="true"]]:duration-500'>
                      Review the initial offer and make your own. Once you establish a good rapport with the shopper,
                      they will secure the deal by accepting your proposal.
                    </p>
                    <img className='absolute brightness-[30%] inset-0 object-cover w-full h-full -z-10 group-has-[[aria-expanded="true"]]:brightness-50 transition-[filter] mix-blend-luminosity' src="/images/tokyo.png" />
                  </div>
                </div>
                <div className='accordion-panel group has-[[aria-expanded="false"]]:bg-[#373D5C] text-white relative isolate basis-[4.5rem] has-[[aria-expanded="true"]]:flex-grow p-3 pr-8 overflow-hidden rounded-[2.25rem] has-[[aria-expanded="true"]]:basis-[18rem] transition-[all] duration-500'>
                  <h2 id="panel3-heading">
                    <button
                      aria-controls="panel3-content"
                      aria-expanded="false"
                      className="flex items-center gap-4 flex-row-reverse font-primary font-semibold text-lg whitespace-nowrap"
                    >
                      <span id="panel3-title">Complete Purchase</span>
                      <div className="bg-accentPurple w-12 aspect-square content-center rounded-full text-white font-semibold">3</div>
                    </button>
                  </h2>
                  <div
                    id="panel3-content"
                    className="accordion-content"
                    aria-labelledby="panel3-heading"
                    role="region"
                    aria-hidden="hidden">
                    <p className='ml-[4rem] font-secondary translate-y-8 opacity-0 group-has-[[aria-expanded="true"]]:translate-y-0 group-has-[[aria-expanded="true"]]:opacity-100 group-has-[[aria-expanded="true"]]:transition-all group-has-[[aria-expanded="true"]]:delay-500 group-has-[[aria-expanded="true"]]:duration-500'>
                      Once the order is made purchase the item ordered, before your trip.
                      The purchase money will be reimbursed along with the reward money you agreed with the shopper once the delivery is complete.
                    </p>
                    <img className='absolute brightness-[30%] inset-0 object-cover w-full h-full -z-10 group-has-[[aria-expanded="true"]]:brightness-50 transition-[filter] mix-blend-luminosity' src="/images/tokyo.png" />
                  </div>
                </div>
                <div className='accordion-panel group has-[[aria-expanded="false"]]:bg-[#373D5C] text-white relative isolate basis-[4.5rem] has-[[aria-expanded="true"]]:flex-grow p-3 pr-8 overflow-hidden rounded-[2.25rem] has-[[aria-expanded="true"]]:basis-[18rem] transition-[all] duration-500'>
                  <h2 id="panel4-heading">
                    <button
                      aria-controls="panel4-content"
                      aria-expanded="false"
                      className="flex items-center gap-4 flex-row-reverse font-primary font-semibold text-lg whitespace-nowrap"
                    >
                      <span id="panel4-title">Deliver the Package</span>
                      <div className="bg-accentPurple w-12 aspect-square content-center rounded-full text-white font-semibold">4</div>
                    </button>
                  </h2>
                  <div
                    id="panel4-content"
                    className="accordion-content"
                    aria-labelledby="panel4-heading"
                    role="region"
                    aria-hidden="true">
                    <p className='ml-[4rem] font-secondary translate-y-8 opacity-0 group-has-[[aria-expanded="true"]]:translate-y-0 group-has-[[aria-expanded="true"]]:opacity-100 group-has-[[aria-expanded="true"]]:transition-all group-has-[[aria-expanded="true"]]:delay-500 group-has-[[aria-expanded="true"]]:duration-500'>
                      Arrange to meet the shopper in a safe, public location. Once they receive their item, have them scan the QR code to confirm the delivery.
                      After that, you will receive your reward along with the payment for the purchase.
                    </p>
                    <img className='absolute brightness-[30%] inset-0 object-cover w-full h-full -z-10 group-has-[[aria-expanded="true"]]:brightness-50 transition-[filter] mix-blend-luminosity' src="/images/tokyo.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ############ Latest Orders Section ############### */}

      <section className="px-9">
        <div className="flex flex-col gap-2 justify-center items center py-10">
          <h1 className="text-center text-5xl font-primary font-semibold px-4 leading-[3rem]">Latest Orders</h1>
          <p className="text-center text-xl">Explore the latest orders to inspire your next adventure</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col p-0 rounded-xl overflow-hidden bg-accentPurpleLighter border border-accentPurple hover:border-transparent hover:shadow-purple transition-all duration-200 ease-in">
            <a href="#">
              <img src="/images/earpod.jpg" className="w-full max-h-64 object-cover" />
              <div className="flex flex-col gap-3 p-3 text-foreground">
                <div>
                  <h4 className="text-2xl font-bold font-primary text-accentPurpleDark">Airpods Pro</h4>
                  <p className="text-lg font-semibold">Paris to Nairobi</p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h5 className="text-xl font-bold font-primary text-accentPurple">$199.99</h5>
                    <p>Item Price</p>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold font-primary text-accentPurple">$45</h5>
                    <p>Starting Offer</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/*######### Order CTA #########*/}
      <div className="w-full px-5 py-10 bg-accentPurpleLighter my-16 flex flex-col gap-2 items-center justify-center text-center">
        <h2 className="text-3xl font-bold md:text-4xl text-accentPurpleDark">Ready to snag a deal from overseas?</h2>
        <p className="text-foreground text-lg">Order now and let our adventurers deliver treasures to your door!</p>
        <Link href="/order">
          <button className="bg-accentPurple rounded-lg text-white font-semibold px-6 py-2 mt-3">Add your Order</button>
        </Link>
      </div>

      {/* Popular Destinations Section */}
      <section className="px-9">
        <div className="flex flex-col gap-2 justify-center items center py-10">
          <h1 className="text-center text-5xl font-primary font-semibold px-4 leading-[3rem]">Popular Destinations</h1>
          <p className="text-center text-xl">Discover the hottest travel spots to spark your next getaway.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col p-0 rounded-xl overflow-hidden bg-accentGreenLighter border border-accentGreen hover:border-transparent hover:shadow-green transition-all duration-200 ease-in">
            <a href="#">
              <img src="/images/tokyo.png" className="w-full max-h-64 object-cover" />
              <div className="flex flex-col gap-3 p-3 text-foreground">
                <div>
                  <h4 className="text-2xl font-bold font-primary text-accentGreenDark">Airpods Pro</h4>
                  <p className="text-lg font-semibold">Paris to Nairobi</p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h5 className="text-xl font-bold font-primary text-accentGreen">$199.99</h5>
                    <p>Item Price</p>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold font-primary text-accentGreen">$45</h5>
                    <p>Starting Offer</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/*######## Travel CTA Section #########*/}
      <div className="w-full px-5 py-10 bg-accentGreenLighter my-14 flex flex-col gap-2 items-center justify-center text-center">
        <h2 className="text-3xl font-bold md:text-4xl text-accentGreenDark">Got a Trip brewing in your mind?</h2>
        <p className="text-foreground text-lg">Share your upcoming trip and earn rewards while you explore!</p>
        <Link href="/travel">
          <button className="bg-accentGreen rounded-lg text-white font-semibold px-6 py-2 mt-3">Add your Trip</button>
        </Link>
      </div>

      {/* Top Adeventurers Section */}

      <div className="flex flex-col gap-2 justify-center items center py-10 px-5">
        <h1 className="text-center text-5xl font-primary font-semibold px-4 leading-[3rem]">Our Top Adventurers</h1>
        <p className="text-center text-xl">Take a look at our explorers who have successfully completed numerous orders!</p>
      </div>
      <section className="px-6 md:px-20 gradient-bg py-10">
        <div className="glass border-2 border-white p-8 rounded-xl grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className=" p-2 hover:p-0 relative rounded-t-full rounded-b-[1000px] transition-[padding] duration-300">
            <div className="text-center shadow-inner flex flex-col rounded-t-full rounded-b-[1000px] overflow-hidden bg-white bg-opacity-85  transition-all duration-200 ease-in">
              <a href="#">
                <img src="/images/profile.jpg" className="w-full aspect-square object-cover rounded-l-full" />
                <div className="flex flex-col gap-3 p-3 text-foreground">
                  <div>
                    <h4 className="text-2xl gradient-text font-bold font-primary">Hassan Khan</h4>
                    <p className="font-semibold opacity-60">$463.65 earned</p>
                  </div>
                  <div>
                    <h5 className="text-2xl gradient-text font-bold font-primary">12</h5>
                    <p className="font-semibold opacity-60">Completed Orders</p>
                  </div>
                </div>
              </a>
              <div class="absolute inset-0 rounded-t-full rounded-xl -z-10  bg-gradient-to-r from-accentPurpleLight to-accentGreenLight glow-animate opacity-75"></div>
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      
    </>
  );
}
