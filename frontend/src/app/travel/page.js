"use client";
import { useState } from "react";
import Image from "next/image";
import TravelForm from "@/components/TravelForm";

const Order = () => {
    return (
        <div className="bg-accentPurpleBg w-full px-6 py-12 md:flex justify-center">
            <TravelForm />
        </div>
    )
}

export default Order;