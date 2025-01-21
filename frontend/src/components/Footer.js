import Image from "next/image";

const Footer = () => {
    return (
        <footer className="px-16 py-10 content-center">
            <div className="sm:hidden lg:hidden mx-auto my-6 w-fit text-center md:text-left lg:mb-0 flex flex-col items-center justify-center lg:items-start">
                <Image className="w-56" src="/images/logo.png" alt="CartWings Logo" width={150} height={50} />
                <p className="text-2xl font-semibold mt-2 md">Earn on the go, shop the globe.</p>
            </div>
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center hidden md:text-left mb-4 md:mb-0 lg:flex flex-col items-center md:items-start">
                    <Image src="/images/logo.png" alt="CartWings Logo" width={150} height={50} />
                    <p className="font-semibold mt-2 md">Earn on the go, shop the globe.</p>
                </div>
                <div className="flex flex-col gap-4 items-center text-accentGreenLight">
                    <h3 className="text-xl text-accentGreenDark font-primary font-semibold">Company</h3>
                    <a href="#" className=" font-semibold"><span className="px-6 py-2 w-fit h-fit rounded-lg border-[1.5px] border-transparent hover:border-accentGreenLight transition-colors duration-300">About Us</span></a>
                    <a href="#" className=" font-semibold"><span className="px-6 py-2 w-fit h-fit rounded-lg border-[1.5px] border-transparent hover:border-accentGreenLight transition-colors duration-300">Contact</span></a>
                    <a href="#" className=" font-semibold"><span className="px-6 py-2 w-fit h-fit rounded-lg border-[1.5px] border-transparent hover:border-accentGreenLight transition-colors duration-300">Careers</span></a>
                    <a href="#" className=" font-semibold"><span className="px-6 py-2 w-fit h-fit rounded-lg border-[1.5px] border-transparent hover:border-accentGreenLight transition-colors duration-300">Blog</span></a>
                </div>
                <div className="flex flex-col gap-4 items-center text-accentGreenLight">
                    <h3 className="text-xl text-accentGreenDark font-primary font-semibold">Support</h3>
                    <a href="#" className=" font-semibold"><span className="px-6 py-2 w-fit h-fit rounded-lg border-[1.5px] border-transparent hover:border-accentGreenLight transition-colors duration-300">Help Center</span></a>
                    <a href="#" className=" font-semibold"><span className="px-6 py-2 w-fit h-fit rounded-lg border-[1.5px] border-transparent hover:border-accentGreenLight transition-colors duration-300">FAQ</span></a>
                    <a href="#" className=" font-semibold"><span className="px-6 py-2 w-fit h-fit rounded-lg border-[1.5px] border-transparent hover:border-accentGreenLight transition-colors duration-300">Terms of Service</span></a>
                    <a href="#" className=" font-semibold"><span className="px-6 py-2 w-fit h-fit rounded-lg border-[1.5px] border-transparent hover:border-accentGreenLight transition-colors duration-300">Privacy Policy</span></a>
                </div>
                <div className="flex flex-col gap-4 items-center text-accentGreenLight">
                    <h3 className="text-xl text-accentPurpleDark font-primary font-semibold">Follow Us</h3>
                    <div className="flex gap-1">
                        <a href="#" className=" text-2xl p-3 hover:bg-accentPurpleLighter rounded-full transition-colors duration-300">
                            <svg className="w-6 h-6 fill-accentPurple" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.0774 36.4363C33.551 35.4806 35.5065 33.525 36.4623 31.0514C36.9147 29.8797 37.2314 28.5428 37.3173 26.5872C37.3377 26.1291 37.3535 25.7446 37.3682 25.3589V12.293C37.3581 12.0204 37.3467 11.7365 37.332 11.4176C37.2461 9.46201 36.9294 8.11832 36.477 6.95334C36.0099 5.71711 35.2905 4.60982 34.3495 3.69027C33.4288 2.7549 32.3147 2.02877 31.0921 1.56956C29.9203 1.11714 28.5834 0.80045 26.6278 0.71449C24.6575 0.620613 24.0321 0.599121 19.0362 0.599121C14.0404 0.599121 13.4138 0.620612 11.4514 0.706572C9.49585 0.792531 8.15216 1.10922 6.98719 1.56164C5.75095 2.02877 4.64366 2.74811 3.72299 3.69027C2.78874 4.61095 2.06261 5.72503 1.60227 6.94656C1.14985 8.11832 0.833161 9.45522 0.747201 11.4108C0.653325 13.3811 0.631836 14.0066 0.631836 19.0035C0.631836 24.0005 0.653324 24.626 0.739283 26.5883C0.825243 28.5439 1.14194 29.8887 1.59549 31.0526C2.06261 32.2888 2.78874 33.3961 3.72299 34.3168C4.64366 35.251 5.75774 35.9783 6.9804 36.4375C8.15216 36.8899 9.48906 37.2066 11.4446 37.2925C13.407 37.3796 14.0325 37.4011 19.0294 37.4011C24.0264 37.4011 24.6507 37.3796 26.6142 37.2925C28.5698 37.2066 29.9124 36.8888 31.0774 36.4363ZM19.043 34.0928C14.132 34.0928 13.5427 34.0713 11.6086 33.9854C9.81141 33.9062 8.84097 33.6042 8.19401 33.3531C7.39663 33.0579 6.67049 32.5908 6.08009 31.98C5.46932 31.3828 5.00107 30.6646 4.707 29.8661C4.45591 29.2191 4.15391 28.2408 4.07474 26.4515C3.98878 24.5106 3.96729 23.9281 3.96729 19.0171C3.96729 14.1061 3.98878 13.5168 4.07474 11.5839C4.15391 9.78662 4.45591 8.81618 4.707 8.16922C5.0022 7.3707 5.46932 6.64457 6.08801 6.05529C6.68407 5.44453 7.40341 4.9774 8.2008 4.6822C8.84776 4.43111 9.82612 4.12912 11.6154 4.04995C13.5563 3.96399 14.1388 3.9425 19.0487 3.9425C23.9585 3.9425 24.549 3.96399 26.483 4.04995C28.2803 4.12912 29.2507 4.43111 29.8977 4.6822C30.6951 4.9774 31.4212 5.44453 32.0105 6.05529C32.6212 6.65249 33.0895 7.3707 33.3836 8.16922C33.6347 8.81618 33.9366 9.7934 34.0158 11.5839C34.1018 13.5247 34.1233 14.1072 34.1233 19.0171C34.1233 23.927 34.1018 24.5027 34.0158 26.4435C33.9366 28.2408 33.6347 29.2112 33.3836 29.8582C32.7649 31.462 31.4925 32.7344 29.8898 33.352C29.2428 33.6031 28.2656 33.9051 26.4751 33.9842C24.5343 34.0702 23.9529 34.0928 19.043 34.0928Z"  />
                                <path d="M19.0366 9.54805C13.8168 9.54805 9.5822 13.7827 9.5822 19.0025C9.5822 24.2222 13.8168 28.4569 19.0366 28.4569C24.2564 28.4569 28.4899 24.2222 28.4899 19.0025C28.4899 13.7827 24.2553 9.54805 19.0366 9.54805ZM19.0366 25.1339C15.6503 25.1339 12.9041 22.3877 12.9041 19.0013C12.9041 15.615 15.6503 12.8688 19.0366 12.8688C22.423 12.8688 25.1692 15.615 25.1692 19.0013C25.1692 22.3877 22.423 25.1339 19.0366 25.1339Z"  />
                                <path d="M31.0685 9.17426C31.0685 7.95499 30.08 6.96759 28.8607 6.96759C27.6415 6.96759 26.6541 7.95613 26.6541 9.17426C26.6541 10.3924 27.6426 11.3809 28.8607 11.3809C30.0789 11.3809 31.0685 10.3935 31.0685 9.17426Z"  />
                            </svg>
                        </a>
                        <a href="#" className=" text-2xl p-3 hover:bg-accentPurpleLighter rounded-full transition-colors duration-300">
                            <svg className="w-6 h-6 fill-accentPurple" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.8702 13.692L30.0921 0.917969H27.4338L17.6858 12.0072L9.90579 0.917969H0.930298L12.6977 17.6885L0.930298 31.0824H3.58859L13.8761 19.3693L22.0941 31.0824H31.0696M4.54802 2.88104H8.6319L27.4318 29.2158H23.3469"  />
                            </svg>
                        </a>
                        <a href="#" className=" text-2xl p-3 hover:bg-accentPurpleLighter rounded-full transition-colors duration-300">
                            <svg className="w-6 h-6 fill-accentPurple"  width="32" height="30" viewBox="0 0 32 30" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.72884 29.493V9.93528H1.23391V29.493H7.72884ZM4.48273 7.26545C6.74717 7.26545 8.15694 5.76365 8.15694 3.88681C8.11455 1.96722 6.74717 0.507324 4.52579 0.507324C2.30289 0.507324 0.851074 1.96722 0.851074 3.88664C0.851074 5.76348 2.26033 7.26529 4.44017 7.26529L4.48273 7.26545ZM11.3239 29.493H17.8183V18.5723C17.8183 17.9885 17.8607 17.4032 18.0323 16.9863C18.5016 15.8179 19.5702 14.6085 21.3648 14.6085C23.7144 14.6085 24.6549 16.4019 24.6549 19.0313V29.493H31.1491V18.2792C31.1491 12.2722 27.9454 9.47676 23.6723 9.47676C20.169 9.47676 18.6304 11.4366 17.7756 12.7714H17.8188V9.93596H11.3242C11.409 11.7707 11.3239 29.493 11.3239 29.493Z"  />
                            </svg>
                        </a>
                        <a href="#" className=" text-2xl p-3 hover:bg-accentPurpleLighter rounded-full transition-colors duration-300">
                            <svg className="w-6 h-6 fill-accentPurple" width="16" height="30" viewBox="0 0 16 30" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.7862 16.8424L15.6128 11.5071H10.5211V8.03914C10.5211 6.58027 11.2319 5.15474 13.505 5.15474H15.8525V0.611395C14.4855 0.389931 13.1041 0.27012 11.7196 0.25293C7.52884 0.25293 4.79285 2.81221 4.79285 7.43892V11.5071H0.147461V16.8424H4.79285V29.7472H10.5211V16.8424H14.7862Z"  />
                            </svg>

                        </a>
                    </div>
                </div>
            </div>
            <p className="font-semibold text-center  mt-8">© 2023 CartWings. All rights reserved.</p>
        </footer>
    )
}

export default Footer;