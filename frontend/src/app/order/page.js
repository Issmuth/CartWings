"use client";
import { useState } from "react";
import Image from "next/image";
import OrderForm from "@/components/OrderForm";

const Order = () => {
    return (
        <div className="bg-accentGreenBg w-full px-6 py-12 md:flex justify-center">
            <OrderForm />
        </div>
    )
}

export default Order;