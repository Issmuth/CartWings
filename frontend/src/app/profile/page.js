import Image from "next/image";

const Profile = () => {
    return (
        <section className="mt-40 md:mt-20 px-5 py-12 gradient-bg">
            <div className="glass border-2 border-white rounded-xl px-4 py-8 md:px-16 flex flex-col gap-5">
                <div>
                    <h1 className="text-4xl gradient-text font-primary font-semibold">Hassan Khan</h1>
                    <p className="text-lg font-normal">Member since December 2020</p>
                </div>
                <div className="flex border border-foregroundLight rounded-xl overflow-hidden">
                    <div className="relative basis-1/4 isolate">
                        <Image src="/images/profile.jpg" layout="fill" className="object-cover"/>
                    </div>
                    <div className="py-5 px-4 basis-3/4 flex flex-col gap-4">
                        <h2 className="text-2xl font-bold">Hassan's Stats</h2>
                        <div className="flex flex-col  md:flex-row md:justify-between md:gap-14 lg:gap-24">
                            <div className="flex flex-col gap-2 w-full">
                                <h3 className="text-xl text-accentPurple font-semibold">Travel Stats</h3>
                                <div className="flex justify-between">
                                    <h4 className="text-lg">Trips</h4>
                                    <p className="text-lg">12</p>
                                </div>
                                <div className="flex justify-between">
                                    <h4 className="text-lg">Confirmed deliveries</h4>
                                    <p className="text-lg">21</p>
                                </div>
                                <div className="flex justify-between">
                                    <h4 className="text-lg">Cancellation rate</h4>
                                    <p className="text-lg">25.9%</p>
                                </div>
                                <div className="flex justify-between">
                                    <h4 className="text-lg">Average offer rates</h4>
                                    <p className="text-lg">20%</p>
                                </div>
                                <div className="flex justify-between">
                                    <h4 className="text-lg">Total earned</h4>
                                    <p className="text-lg">12</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <h3 className="text-xl text-accentGreen font-semibold">Shopping Stats</h3>
                                <div className="flex justify-between">
                                    <h4 className="text-lg">Orders</h4>
                                    <p className="text-lg">3</p>
                                </div>
                                <div className="flex justify-between">
                                    <h4 className="text-lg">Confirmed Orders</h4>
                                    <p className="text-lg">3</p>
                                </div>
                                <div className="flex justify-between">
                                    <h4 className="text-lg">Cancellation rate</h4>
                                    <p className="text-lg">25.9%</p>
                                </div>
                                <div className="flex justify-between">
                                    <h4 className="text-lg">Average starting rates</h4>
                                    <p className="text-lg">20%</p>
                                </div>
                                <div className="flex justify-between">
                                    <h4 className="text-lg">Total spent</h4>
                                    <p className="text-lg">12</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border border-foregroundLight rounded-xl overflow-hidden h-[300px] flex items-center justify-center">
                    <h2>Actions Coming Soon</h2>
                </div>
            </div>
        </section>
    )
}

export default Profile;