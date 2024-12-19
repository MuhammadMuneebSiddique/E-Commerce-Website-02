import Image from "next/image";
import arrow_I from "./images/Vector (7).png"
import shop01_I from "./images/col-md-4 (1).png"
import shop02_I from "./images/card-item (2).png"
import shop03_I from "./images/card-item (3).png"
import shop04_I from "./images/col-md-4 (1).png"
import shop05_I from "./images/card-item (4).png"
import more_I from "./images/Vector (8).png"
import complete_I from "./images/Vector (9).png"
import downarrrow_I from "./images/Vector (10).png"
import product1_I from "../main/images/product-cover-5.png"
import product2_I from "../main/images/product-cover-5 (2).png"
import product3_I from "../main/images/fixed-height.png"
import product4_I from "../main/images/fixed-height (1).png"
import product5_I from "../main/images/fixed-height (2).png"
import product6_I from "../main/images/fixed-height (3).png"
import product7_I from "../main/images/product-cover-5 (3).png"
import product8_I from "../main/images/product-cover-5 (4).png"
import Header from "../header/page"
import Footer from "../footer/page"
import companyBanner from "./images/container.png"
import Link from "next/link";


export default function ProductPage(){
    let products = [
        {image:product1_I , name:"graphic design" , category:"english department" , originalPrice:"16.48" , salePrice:"6.48"},
        {image:product2_I , name:"graphic design" , category:"english department" , originalPrice:"16.48" , salePrice:"6.48"},
        {image:product3_I , name:"graphic design" , category:"english department" , originalPrice:"16.48" , salePrice:"6.48"},
        {image:product4_I , name:"graphic design" , category:"english department" , originalPrice:"16.48" , salePrice:"6.48"},
        {image:product5_I , name:"graphic design" , category:"english department" , originalPrice:"16.48" , salePrice:"6.48"},
        {image:product6_I , name:"graphic design" , category:"english department" , originalPrice:"16.48" , salePrice:"6.48"},
        {image:product7_I , name:"graphic design" , category:"english department" , originalPrice:"16.48" , salePrice:"6.48"},
        {image:product8_I , name:"graphic design" , category:"english department" , originalPrice:"16.48" , salePrice:"6.48"},
        {image:product1_I , name:"graphic design" , category:"english department" , originalPrice:"16.48" , salePrice:"6.48"},
        {image:product2_I , name:"graphic design" , category:"english department" , originalPrice:"16.48" , salePrice:"6.48"},
        {image:product3_I , name:"graphic design" , category:"english department" , originalPrice:"16.48" , salePrice:"6.48"},
        {image:product4_I , name:"graphic design" , category:"english department" , originalPrice:"16.48" , salePrice:"6.48"},
    ]

    return(
        <div>
            <Header/>
            <section className="product-page px-[10rem] font-Montserrat">
                <div className="flex justify-between items-center">
                    <h2 className="text-[2.4em] font-bold capitalize">shop</h2>
                    <div className="flex gap-[1em] items-center ">
                        <h3 className="text-[1.4em] font-bold capitalize">home</h3>
                        <Image src={arrow_I} className="w-[1em] h-[1em] object-cover" alt="icon"/>
                        <h3 className="text-[1.4em] font-bold capitalize text-[#BDBDBD]">shop</h3>
                    </div>
                </div>
                <div className="flex justify-center my-[4em] flex-wrap items-center gap-[2em]">
                    <Image src={shop01_I} className="w-[20.6em] h-[22.3em] object-cover" alt="image"/>
                    <Image src={shop02_I} className="w-[20.6em] h-[22.3em] object-cover" alt="image"/>
                    <Image src={shop03_I} className="w-[20.6em] h-[22.3em] object-cover" alt="image"/>
                    <Image src={shop04_I} className="w-[20.6em] h-[22.3em] object-cover" alt="image"/>
                    <Image src={shop05_I} className="w-[20.6em] h-[22.3em] object-cover" alt="image"/>
                </div>
                <div className="product-option flex justify-between items-center my-[4em] gap-[2em]">
                    <h2 className="text-[1.4em] font-bold text-[#737373]">Showing all 12 results</h2>
                    <div className="flex gap-[2em] items-center">
                        <h2 className="text-[1.4em] font-bold text-[#737373] capitalize">view:</h2>
                        <Image src={more_I} className="w-[1em] h-[1em] object-cover" alt="icon"/>
                        <Image src={complete_I} className="w-[1em] h-[1em] object-cover" alt="icon"/>
                    </div>
                    <div className="flex items-center gap-[2em]">
                        <button className="capitalize text-[#737373] text-[1.4em] flex items-center gap-[1em] font-medium border-[0.1em] w-[10em] border-[#737373] py-[0.7em]  rounded-[0.4em] px-[1.5em]">popularity  <Image src={downarrrow_I} className="w-[1em] h-[1em] object-cover" alt="icon"/></button>
                        <button className="capitalize font-bold text-white text-[1.4em] bg-[#23A6F0] border-[0.1em] py-[0.7em] rounded-[0.4em] px-[1.5em]">filter</button>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-[4em] my-[5em] flex-wrap">
                        {products.map((elem,index)=>{
                            return(
                                <div key={index} className="hover:scale-105 duration-500 flex flex-col justify-center items-center gap-[2.5em] mb-[7em]">
                                    <div className="w-[23.9em] h-[42.7em]">
                                    <Link href="/components/productDetail"><Image src={elem.image} className="w-[100%] h-[100%] object-cover" alt="image"/></Link>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-[1.5em] w-[23.9rem]">
                                        <h3 className="text-[1.6em] font-bold capitalize ">{elem.name}</h3>
                                        <h4 className="text-[1.4em] font-bold capitalize text-[#737373]">{elem.category}</h4>
                                        <h5 className="text-[1.6em] font-bold flex gap-[0.5em] text-[#737373]">${elem.originalPrice}<span className="text-[#23856D]">${elem.salePrice}</span></h5>
                                        <div className="flex items-center gap-[1em]">
                                            <div className="w-[2em] h-[2em] rounded-full bg-[#23A6F0]"></div>
                                            <div className="w-[2em] h-[2em] rounded-full bg-[#23856D]"></div>
                                            <div className="w-[2em] h-[2em] rounded-full bg-[#E77C40]"></div>
                                            <div className="w-[2em] h-[2em] rounded-full bg-[#252B42]"></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
                <div className="w-[100%] flex justify-center items-center">
                    <Image src={companyBanner} className="w-[107.5em] h-[17.5em] object-cover" alt="icon"/>
                </div>
            </section>
            <Footer/> 
        </div>
    )
}