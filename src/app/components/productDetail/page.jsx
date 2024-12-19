import Link from "next/link"
import Image from "next/image"
import leftArrow_I from "./images/ChevronLeft.png"
import rightArrow_I from "./images/Vector (11).png"
import product_I from "./images/carousel-inner.png"
import arrow_I from "./images/Vector (10).png"
import star_I from "./images/stars.png"
import favourite_I from "./images/icn favorite.png"
import cart_I from "./images/icn favorite (1).png"
import view_I from "./images/Vector (12).png"
import morepic1_I from "./images/carouselCaptions (1).png"
import morepic2_I from "./images/single-product-1-thumb-2.jpg"
import roomPic_I from "./images/unsplash_QANOF9iJlFs.png"
import product1_I from "./images/fixed-height (4).png"
import product2_I from "./images/product-cover-5 (7).png"
import product3_I from "./images/product-cover-5 (6).png"
import product4_I from "./images/product-cover-5 (5).png"
import product5_I from "./images/fixed-height (4).png"
import product6_I from "./images/product-cover-5 (7).png"
import product7_I from "./images/product-cover-5 (6).png"
import product8_I from "./images/product-cover-5 (5).png"
import companyBanner from "./images/container.png"
import Header from "../header/page"
import Footer from "../footer/page"


export default function ProductDetail(){

    let products = [
        {image:product1_I , name:"graphic design" , category:"english department" , originalPrice:"16.48" , salePrice:"6.48"},
        {image:product2_I , name:"graphic design" , category:"english department" , originalPrice:"16.48" , salePrice:"6.48"},
        {image:product3_I , name:"graphic design" , category:"english department" , originalPrice:"16.48" , salePrice:"6.48"},
        {image:product4_I , name:"graphic design" , category:"english department" , originalPrice:"16.48" , salePrice:"6.48"},
        {image:product5_I , name:"graphic design" , category:"english department" , originalPrice:"16.48" , salePrice:"6.48"},
        {image:product6_I , name:"graphic design" , category:"english department" , originalPrice:"16.48" , salePrice:"6.48"},
        {image:product7_I , name:"graphic design" , category:"english department" , originalPrice:"16.48" , salePrice:"6.48"},
        {image:product8_I , name:"graphic design" , category:"english department" , originalPrice:"16.48" , salePrice:"6.48"},
    ]

    return(
        <div>
            <Header/>
            <section className="product-detail font-Montserrat ">
                <div className="flex gap-[1em] items-center bg-[#E8E8E8] px-[7em] pt-[5em]">
                    <h3 className="text-[1.4em] font-bold capitalize">home</h3>
                    <Image src={arrow_I} className="w-[1em] h-[1em] object-cover" alt="icon"/>
                    <h3 className="text-[1.4em] font-bold capitalize text-[#BDBDBD]">shop</h3>
                </div>
                <div className=" bg-[#E8E8E8] flex flex-col justify-center gap-[2em] items-center py-[7em]">
                    <div className="section-01 flex justify-center gap-[3em]">
                        <div className="relative flex justify-center items-center w-[50.6em] h-[45em]">
                            <Image src={product_I} className="w-[100%] h-[100%] object-cover" alt="image"/>
                            <div className="absolute  w-[70%] flex justify-between items-center">
                                <Image src={leftArrow_I} className="w-[5em] h-[5em] object-cover" alt="image"/>
                                <Image src={rightArrow_I} className="w-[5em] h-[5em] object-cover" alt="image"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[2.5em] w-[50em]">
                            <div>
                                <h2 className="text-[2em] capitalize font-normal">floating phone</h2>
                                <div className="flex items-center w-[20em] gap-[1em]">
                                    <Image src={star_I} className="w-[90%] h-[2em] object-cover" alt="image"/>
                                    <h3 className="text-[1.4em] text-[#737373] w-[10em] flex capitalize font-bold">10 reviews</h3>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-[2.4em] text-[#252B42] capitalize font-bold">$1,139.33</h2>
                                <p className="capitalize text-[1.4em] font-bold ">availability  : <span className="text-[#23A6F0] capitalize">in stock</span></p>
                            </div>
                            <div >
                                <p className="text-[1.4em] font-normal text-[#858585]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                            </div>
                            <hr />
                            <div className="flex items-center gap-[1em] h-[5em]">
                                <div className="w-[3.5em] h-[3.5em] rounded-full bg-[#23A6F0]"></div>
                                <div className="w-[3.5em] h-[3.5em] rounded-full bg-[#23856D]"></div>
                                <div className="w-[3.5em] h-[3.5em] rounded-full bg-[#E77C40]"></div>
                                <div className="w-[3.5em] h-[3.5em] rounded-full bg-[#252B42]"></div>
                            </div>
                            <div className="flex items-center gap-[2em] mt-[3em]">
                                <button className="text-[1.4em] font-bold capitalize text-white rounded-[0.4em] px-[2em] py-[1em] bg-[#23A6F0]">select options</button>
                                <div className="flex items-center gap-[1em]">
                                    <Image src={favourite_I} className="w-[2.5em] h-[2.5em] rounded-full bg-white object-cover" alt="image"/> 
                                    <Image src={cart_I} className="w-[2.5em] h-[2.5em]  rounded-full bg-white object-cover" alt="image"/> 
                                    <Image src={view_I} className="w-[2.5em] h-[2.5em]  rounded-full bg-white object-cover" alt="image"/> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[2em]">
                        <Image src={morepic1_I} className="w-[10em] h-[7.5em] object-cover" alt="icon"/>
                        <Image src={morepic2_I} className="w-[10em] h-[7.5em] object-cover" alt="icon"/>
                    </div>
                </div>
                <div className="py-[5em]" >
                    <div className="flex justify-center items-center gap-[7em] p-[4em]">
                        <Link href="/" className="text-[1.4em] font-semibold capitalize">Description</Link>
                        <Link href="/" className="text-[1.4em] font-semibold capitalize">Additional Information</Link>
                        <Link href="/" className="text-[1.4em] font-semibold capitalize">Reviews (0)</Link>
                    </div>
                    <div className="section-02 flex justify-center items-center gap-[3em]">
                        <div className="w-[31.6em] h-[37.2em]">
                            <Image src={roomPic_I} className="w-[100%] h-[100%] object-cover " alt="image"/>
                        </div>
                        <div className="w-[33.2em] flex flex-col gap-[3em]">
                            <h2 className="text-[2.4em]  font-bold">the quick fox jumps over </h2>
                            <div className="flex flex-col gap-[2em]">    
                                <p className="text-[1.4em] font-normal">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                                <p className="text-[1.4em] font-normal">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                                <p className="text-[1.4em] font-normal">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                            </div>
                        </div>
                        <div className="w-[33.2em] flex flex-col gap-[3em]">
                            <h2 className="text-[2.4em] font-bold">the quick fox jumps over </h2>
                            <div className="flex flex-col gap-[2em]">    
                                <p className="text-[1.4em] font-normal">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                                <p className="text-[1.4em] font-normal">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                                <p className="text-[1.4em] font-normal">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-[#E8E8E8] justify-center gap-[3em] py-[10em] px-[10em]">
                    <h2 className="font-bold text-[2.4em] pl-[2em] uppercase">bestseller product</h2>
                    <hr />
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
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="banner w-[100%] flex justify-center items-center">
                    <Image src={companyBanner} className="w-[107.5em] h-[17.5em] object-cover" alt="icon"/>
                </div>
                
            </section>
            <Footer/>
        </div>

    )
}