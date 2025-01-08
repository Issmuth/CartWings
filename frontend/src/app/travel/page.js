"use client";
import { useState } from "react";
import Image from "next/image";
import TravelForm from "@/components/TravelForm";

const Order = () => {
    return (
        <div className="bg-accentPurpleBg w-full px-6 py-12 md:flex justify-center">
            <div className="glass border-2 border-white rounded-xl py-12 flex flex-col gap-8 md:w-full md:max-w-[800px]">
                <h1 className="font-primary text-5xl text-center text-accentPurpleDark font-semibold px-3">Post Your Trip</h1>
                <TravelForm />
            </div>
        </div>
    )
}

export default Order;