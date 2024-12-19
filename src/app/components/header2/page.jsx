"use client"

import Image from "next/image"
import Link from "next/link"
import close_I from "./images/close (1).png"
import menu_I from "./images/menu (1).png"
import { useEffect } from "react"

export default function Header2(){
    useEffect(()=>{
        let menu = document.getElementById("menu")
        let close = document.getElementById("close")
        let mobile_header = document.getElementById("mobile_header2_items")

        menu.addEventListener("click",()=>{
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
        <header className="header font-Montserrat">
            <div className="py-[2em] px-[4em]">
                {/* desktop header */}
                <div className="desktop-header-2 flex justify-between sm:justify-between py-[2em] gap-[14.4em] items-center">
                    <div className="website-name flex items-center gap-[10em]">
                        <h2 className="text-[2.4em] capitalize tracking-wide font-bold font-inter">Bandage</h2>
                        <ul className="flex justify-center items-center font-poppines gap-[1.5em] text-[1.7em] font-medium capitalize">
                            <li className="nav_item"><Link href="/">home</Link></li>
                            <li className="nav_item"><Link href="/components/productListing">product</Link></li>
                            <li className="nav_item"><Link href="/components/pricingPage">pricing</Link></li>
                            <li className="nav_item"><Link href="/components/aboutPage">about</Link></li>
                        </ul>
                    </div>
                    <div className="flex gap-[3em] items-center">
                        <h2 className="text-[#23A6F0] text-[1.4em] font-bold capitalize">login</h2>
                        <button className="text-white bg-[#23A6F0] text-[1.4em] font-bold capitalize rounded-[0.3em] py-[0.5em] px-[1em]">Become a member</button>
                    </div>
                </div>
                {/* mobile header */}
                <div className="mobile-header-2 hidden">
                    <div className="flex justify-between w-full items-center">
                        <h2 className="text-[3em] capitalize tracking-wide font-bold ">Bandage</h2>
                        <div className="items-center gap-[1em]">
                            <Image className="w-[3em] h-[3em] object-cover cursor-pointer" id="menu" src={menu_I}/>
                            <Image className="hidden w-[3em] h-[3em] object-cover cursor-pointer" id="close" src={close_I}/>
                        </div>
                    </div>
                    <div id="mobile_header2_items" className="hidden my-[3em] flex-col justify-center items-center gap-[5em]">
                        <ul className="flex flex-col justify-center items-center gap-[1em] text-[3em] font-medium capitalize">
                            <li><Link className="mobile-nav-item" href="/">home</Link></li>
                            <li><Link className="mobile-nav-item" href="/components/productListing">product</Link></li>
                            <li><Link className="mobile-nav-item" href="/components/pricingPage">pricing</Link></li>
                            <li><Link className="mobile-nav-item" href="/components/aboutPage">about</Link></li>
                        </ul>
                        <div className="gap-[3em] flex justify-center items-center">
                            <h2 className="text-[#23A6F0] text-[3em] font-bold capitalize cursor-pointer">login</h2>
                            <button className="text-white bg-[#23A6F0] text-[3em] font-bold capitalize rounded-[0.3em] py-[0.5em] px-[1em]">Become a member</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
