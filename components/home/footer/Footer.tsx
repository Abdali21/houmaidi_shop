import Image from "next/image"

const Footer = () => {
    return (
        <footer className="pt-20 pb-12">
            <div className="w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto 
                     grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
            >
                <div className="">
                    <h1 className="text-[25px] uppercase font-semibold text-black mb-4">
                        Houmaidi Shop
                    </h1>
                    <p className="text-sm text-black text-opacity-60">
                        Discover the latest trends and exclusive collections at Houmaidi Shop.
                        Your one-stop destination for quality products and exceptional service.
                    </p>
                    <p className="text-base mt-6 text-black text-opacity-80">
                        ( +212 ) 000 100 12  HoumaidiShop@gmail.com
                    </p>
                </div>
                <div className="lg:mx-auto ">
                    <h1 className="footer__title">
                        informations
                    </h1>
                    <p className="footer__link">About us</p>
                    <p className="footer__link">Privacy Police</p>
                    <p className="footer__link">Return Police</p>
                    <p className="footer__link">Shipping Police</p>
                    <p className="footer__link">Drop Shipping</p>
                </div>
                <div className="lg:mx-auto ">
                    <h1 className="footer__title">
                        Account
                    </h1>
                    <p className="footer__link">Dashbord</p>
                    <p className="footer__link">My Orders</p>
                    <p className="footer__link">Account Details</p>
                    <p className="footer__link">Track Orders</p>
                </div>
                <div className="lg:mx-auto ">
                    <h1 className="footer__title">
                        Shop
                    </h1>
                    <p className="footer__link">Affiliate</p>
                    <p className="footer__link">Best Sellers</p>
                    <p className="footer__link">Latest Products</p>
                    <p className="footer__link">Sale Products</p>
                </div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 justify-between w-4/5 mx-auto">
                <p className="text-sm text-black opacity-60">@Copyright
                     <a href="https://www.linkedin.com/in/abdelali-houmaidi-72b123293/" className="underline ml-3">
                         Abdelali houmaidi
                     </a>
                </p>
                <Image src='/images/pay.svg' alt="footer" width={230} height={230} className="object-contain sm:ml-auto" />
            </div>
        </footer>
    )
}

export default Footer
