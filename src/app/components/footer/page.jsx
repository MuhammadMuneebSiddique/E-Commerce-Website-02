import Image from "next/image";
import Link from "next/link";
import instagram_I from "./images/ant-design_instagram-outlined.png"
import facebook_I from "./images/facebook (1).png"
import twitter_I from "./images/ant-design_twitter-outlined.png"


export default function  Footer() {
    return(
        <footer className="footer font-Montserrat text-black flex flex-col gap-[9em] p-[10em] justify-center">
            <div className="flex justify-between">
                <h2 className="text-[2.4em] font-bold capitalize">bandage</h2>
                <div className="flex gap-[3.5em]" >
                    <Image src={facebook_I} className="w-[2.5em] h-[2.5em] object-cover" alt="icon"/>
                    <Image src={twitter_I} className="w-[2.5em] h-[2.5em] object-cover" alt="icon"/>
                    <Image src={instagram_I} className="w-[2.5em] h-[2.5em] object-cover" alt="icon"/>
                </div>
            </div>
            <div className="footer-items flex justify-between">
                <div className="flex flex-col gap-[2.5em]">
                    <h2 className="text-[2em] capitalize font-bold ">company info</h2>
                    <div className="flex flex-col  gap-[1em]">
                        <Link href="/" className="text-[1.4em] capitalize text-[#737373] font-bold">about us</Link>
                        <Link href="/" className="text-[1.4em] capitalize text-[#737373] font-bold">carrier</Link>
                        <Link href="/" className="text-[1.4em] capitalize text-[#737373] font-bold">we are hiring</Link>
                        <Link href="/" className="text-[1.4em] capitalize text-[#737373] font-bold">blog</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-[2.5em]">
                    <h2 className="text-[2em] capitalize font-bold ">legal</h2>
                    <div className="flex flex-col  gap-[1em]">
                        <Link href="/" className="text-[1.4em] capitalize text-[#737373] font-bold">about us</Link>
                        <Link href="/" className="text-[1.4em] capitalize text-[#737373] font-bold">carrier</Link>
                        <Link href="/" className="text-[1.4em] capitalize text-[#737373] font-bold">we are hiring</Link>
                        <Link href="/" className="text-[1.4em] capitalize text-[#737373] font-bold">blog</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-[2.5em]">
                    <h2 className="text-[2em] capitalize font-bold ">features</h2>
                    <div className="flex flex-col  gap-[1em]">
                        <Link href="/" className="text-[1.4em] capitalize text-[#737373] font-bold">business & marketing</Link>
                        <Link href="/" className="text-[1.4em] capitalize text-[#737373] font-bold">user analytic</Link>
                        <Link href="/" className="text-[1.4em] capitalize text-[#737373] font-bold">life chat</Link>
                        <Link href="/" className="text-[1.4em] capitalize text-[#737373] font-bold">unlimited support</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-[2.5em]">
                    <h2 className="text-[2em] capitalize font-bold ">resources</h2>
                    <div className="flex flex-col  gap-[1em]">
                        <Link href="/" className="text-[1.4em] capitalize text-[#737373] font-bold">IOS & andorid</Link>
                        <Link href="/" className="text-[1.4em] capitalize text-[#737373] font-bold">watch a demo</Link>
                        <Link href="/" className="text-[1.4em] capitalize text-[#737373] font-bold">customers</Link>
                        <Link href="/" className="text-[1.4em] capitalize text-[#737373] font-bold">API</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-[2em]">
                    <h2 className="text-[2em] capitalize font-bold">get in touch</h2>
                    <div>
                        <input type="text" className="text-[1.4em] py-[1.2em]" placeholder="Enter your email"/>
                        <button className="text-[1.4em] capitalize font-bold px-[2em] py-[1.2em] rounded-[0.4em] bg-[#23A6F0]">subscribe</button>
                    </div>
                    <p className="text-[1.2em] font-normal">Lore imp sum dolor Amit</p>
                </div>
            </div>
            <div>
                <p className="text-[#737373] text-[1.4em] capitalize font-bold">Made With Love By Finland All Right Reserved </p>
            </div>
        </footer>
    )
}