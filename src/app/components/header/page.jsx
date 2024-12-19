"use client"

import Link from "next/link"
import Image from "next/image"
import search_I from "../header/images/btn-32.png" 
import favoruite_I from "../header/images/btn-32 (1).png"
import cart_I from "../header/images/a.png"
import menu_I from "../header/images/menu (1).png"
import profile_I from "./images/Vector (3).png"
import contact_I from "./images/Vector (4).png"
import email_I from "./images/Vector (5).png"
import instagram_I from "./images/icn settings icn-xs.png"
import twitter_I from "./images/icn settings icn-xs (2).png"
import facebook_I from "./images/Vector (6).png"
import youtube_I from "./images/icn settings icn-xs (1).png"
import cart_MI from "./images/cart.png"
import search_MI from "./images/search-interface-symbol.png"
import { useEffect } from "react"
import close_I from "./images/close (1).png"


export default function Header(){
    useEffect(()=>{
        let menu = document.getElementById("menu")
        let close = document.getElementById("close")
        let mobile_header = document.getElementById("mobile-header-items")
        
        menu?.addEventListener("click",()=>{
            menu.style.display="none"
            close.style.display="block"
            mobile_header.style.display="flex"
            close.addEventListener("click",()=>{
                menu.style.display="block"
                close.style.display="none"
                mobile_header.style.display="none"
            })
        })

    })
    return(

        <header className="header">
            {/* desktop header */}
            <div className="desktop-header">
                <div className="banner bg-[#252B42] text-white flex items-center justify-between py-[2em] px-[4em]">
                    <div className="flex items-center gap-[2em]">
                        <div className="flex items-center gap-[1em]">
                            <Image src={contact_I} className="w-[2em] h-[2em] object-cover" alt="icon"/>
                            <h3 className="text-[1.4em] font-bold font-Montserrat">(225) 555-0118</h3>
                        </div>
                        <div className="flex items-center gap-[1em]">
                            <Image src={email_I} className="w-[2em] bg-[#252B42] h-[2em] object-cover" alt="icon"/>
                            <h3 className="text-[1.4em] font-bold font-Montserrat">michelle.rivera@example.com</h3>
                        </div>
                    </div>
                    <h2 className="text-[1.4em] font-bold font-Montserrat">Follow Us  and get a chance to win 80% off</h2>
                    <div className="flex items-center gap-[2em]">
                        <h2 className="text-[1.4em] font-bold font-Montserrat">Follow Us</h2>:
                        <div className="flex items-center gap-[1em]">
                            <Image src={facebook_I} className="w-[2em] h-[2em] object-cover" alt="icon"/>
                            <Image src={twitter_I} className="w-[2em] h-[2em] object-cover" alt="icon"/>
                            <Image src={instagram_I} className="w-[2em] h-[2em] object-cover" alt="icon"/>
                            <Image src={youtube_I} className="w-[2em] h-[2em] object-cover" alt="icon"/>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between sm:justify-center py-[2em] gap-[14.4em] items-center">
                    <div className="website-name flex items-center gap-[10em]">
                        <h2 className="text-[2.4em] capitalize tracking-wide font-bold font-inter">Bandage</h2>
                        <ul className="flex justify-center items-center font-poppines gap-[1.5em] text-[1.7em] font-medium capitalize">
                            <li className="nav_item"><Link href="/">home</Link></li>
                            <li className="nav_item"><Link href="/components/productListing">shop</Link></li>
                            <li className="nav_item"><Link href="/components/aboutPage">about</Link></li>
                            <li className="nav_item"><Link href="/components/teamPage">team</Link></li>
                            <li className="nav_item"><Link href="/components/contactPage">contact</Link></li>
                            <li className="nav_item"><Link href="/components/pricingPage">pricing</Link></li>
                        </ul>
                    </div>
                    <div className="search-section flex justify-center items-center gap-[2.8em]">
                        <div className="flex justify-center items-center pl-[2em] py-[0.8em] rounded-md">
                            <div className="flex items-center gap-[1em]">
                                <Image src={profile_I} className="w-[2em] h-[2em] object-cover" alt="icon"/>
                                <Link href="" className="text-[1.4em] capitalize font-Montserrat font-bold text-[#23A6F0]">login</Link>/
                                <Link href="" className="text-[1.4em] capitalize font-Montserrat font-bold text-[#23A6F0]">register</Link>
                            </div>
                        </div>
                        <Image className="w-[5em] h-[5em] object-cover" alt="image" src={search_I}/>
                        <Image className="w-[5em] h-[5em] object-cover" alt="image" src={favoruite_I}/>
                        <Image className="w-[5em] h-[5em] object-cover" alt="image" src={cart_I}/>
                    </div>
                </div>
            </div>
            {/* mobile header */}
            <div className="mobile-header hidden font-Montserrat flex-col justify-center items-center p-[2em] gap-[3em]">
                <div className="flex justify-between w-full  items-center">
                    <h2 className="text-[2.4em] capitalize tracking-wide font-bold font-inter">Bandage</h2>
                    <div className="flex items-center gap-[2em]">
                        <Image className="w-[3em] h-[3em] object-cover cursor-pointer" alt="image" src={search_MI}/>
                        <Image className="w-[3em] h-[3em] object-cover cursor-pointer" alt="image" src={cart_MI}/>
                        <Image className="w-[3em] h-[3em] object-cover cursor-pointer" id="menu" alt="image" src={menu_I}/>
                        <Image className="hidden w-[3em] h-[3em] object-cover cursor-pointer" id="close" alt="image" src={close_I}/>
                    </div>
                </div>
                <div id="mobile-header-items" className="hidden flex-col justify-center items-center gap-[5em]">
                    <div className="flex flex-col justify-center items-center gap-[3em]">
                        <Link href="/" className="mobile-nav-item text-[3em] font-normal capitalize">home</Link>
                        <Link href="/components/productListing" className="mobile-nav-item text-[3em] font-normal capitalize">shop</Link>
                        <Link href="/components/aboutPage" className="mobile-nav-item text-[3em] font-normal capitalize">about</Link>
                        <Link href="/components/teamPage" className="mobile-nav-item text-[3em] font-normal capitalize">team</Link>
                        <Link href="/components/contactPage" className="mobile-nav-item text-[3em] font-normal capitalize">contact</Link>
                        <Link href="/components/pricingPage" className="mobile-nav-item text-[3em] font-normal capitalize">pricing</Link>
                    </div>        
                    <div className="flex flex-col justify-center items-center gap-[2.8em]">
                        <div className="flex flex-col justify-center items-center pl-[2em] py-[0.8em] rounded-md">
                            <div className="flex items-center gap-[1em]">
                                <Image src={profile_I} className="cursor-pointer w-[3em] h-[3em] object-cover" alt="icon"/>
                                <Link href="" className="text-[3em] capitalize font-Montserrat font-bold text-[#23A6F0]">login</Link>/
                                <Link href="" className="text-[3em] capitalize font-Montserrat font-bold text-[#23A6F0]">register</Link>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-[2em]">
                            <Image className="w-[10em] h-[10em] object-cover" alt="image" src={search_I}/>
                            <Image className="w-[10em] h-[10em] object-cover" alt="image" src={favoruite_I}/>
                            <Image className="w-[10em] h-[10em] object-cover" alt="image" src={cart_I}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}