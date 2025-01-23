"use client";
import { useState } from "react";
import Image from "next/image";
import OrderForm from "@/components/OrderForm";

const Order = () => {
    return (
        <div className="mt-32 md:mt-20 bg-accentGreenBg w-full px-6 py-12 md:flex justify-center">
            <div className="glass border-2 border-white rounded-xl py-12 flex flex-col gap-8 md:w-full md:max-w-[800px]">        
                <h1 className="font-primary text-5xl text-center text-accentGreenDark font-semibold px-3">Make Your Order</h1>
                <OrderForm />
            </div>
        </div>
    )
}

export default Order;