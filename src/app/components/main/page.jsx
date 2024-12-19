import Image from "next/image";
import bg_I from "./images/carousel 1.png"
import pic1_I from "./images/col-md-6.png"
import pic2_I from "./images/card-item.png"
import pic3_I from "./images/card-item (1).png"
import pic4_I from "./images/media bg-cover.png"
import product1_I from "./images/product-cover-5.png"
import product2_I from "./images/product-cover-5 (2).png"
import product3_I from "./images/fixed-height.png"
import product4_I from "./images/fixed-height (1).png"
import product5_I from "./images/fixed-height (2).png"
import product6_I from "./images/fixed-height (3).png"
import product7_I from "./images/product-cover-5 (3).png"
import product8_I from "./images/product-cover-5 (4).png"
import offerProduct_I from "./images/shop-hero-2-png-picture-1.png"
import addvertise_I from "./images/asian-woman-man-with-winter-clothes 1 (1).png"
import clock_I from "./images/icon akar-icons-calendar.png"
import succes_I from "./images/icon ant-design-area-chart-outlined.png"
import arrow_I from "./images/icon arrow-next.png"
import features_I from "./images/umesh-soni-uXZW7w8iYrA-unsplash.jpg"
import Link from "next/link";


export default function Main(){
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
        <main>
            {/* hero-section */}
            <section className="hero-section w-full h-screen relative text-white flex flex-col justify-center">
                <Image src={bg_I}  className="w-[100%] h-[100%] object-cover" alt="image"/>
                <div className="content absolute  left-[20em] flex flex-col px-[2em] justify-center gap-[2em]">
                    <p className="text-[1.6em] font-Montserrat font-bold capitalize">summer 2024</p>
                    <h1 className="text-[5.8em] font-Montserrat font-bold uppercase">new collection</h1>
                    <p className="text-[2em] font-normal font-Montserrat text-[#FAFAFA]">We know how large objects will act, <br />but things on a small scale.</p>
                    <button className="text-[2.4em] w-fit font-bold font-Montserrat uppercase py-[0.7em] px-[1.5em] bg-[#2DC071] rounded-[0.3em]">shop now</button>
                </div>
            </section>
            {/* editor-pic-section */}
            <section className="editor-pic-section my-[10em] py-[10em] px-[5em] flex flex-col justify-center items-center gap-[1em] w-full bg-[#FAFAFA]">
                <h2 className="text-[2.4em] font-bold font-Montserrat uppercase">EDITOR&apos;S PICK</h2>
                <p className="text-[1.4em] font-normal font-Montserrat">Problems trying to resolve the conflict between </p>
                <div className="picture-container flex justify-center items-center gap-[2em] mt-[4em]">
                    <div className="w-[51em] h-[50em] relative">
                        <Image src={pic1_I} className="w-[100%] h-[100%] object-cover" alt="image"/>
                        <button className="uppercase absolute bottom-[0.7em] left-[0.7em] text-[1.6em] font-bold font-Montserrat rounded-[0.3em] py-[0.7em] px-[3em] bg-white">Men</button>
                    </div>
                    <div className="w-[24em] h-[50em] relative">
                        <Image src={pic2_I} className="w-[100%] h-[100%] object-cover" alt="image"/>
                        <button className="uppercase absolute bottom-[0.7em] left-[0.7em] text-[1.6em] font-bold font-Montserrat rounded-[0.3em] py-[0.7em] px-[3em] bg-white">women</button>
                    </div>
                    <div className="w-[24em] h-[50em] relative flex flex-col gap-[2em]">
                        <div className="w-[100%] h-[24em] relative">
                            <Image src={pic3_I} className="w-[100%] h-[100%] object-cover" alt="image"/>
                            <button className="uppercase absolute bottom-[0.7em] left-[0.7em] text-[1.6em] font-bold font-Montserrat rounded-[0.3em] py-[0.7em] px-[3em] bg-white">ACCESSORIES</button>
                        </div>
                        <div className="w-[100%] h-[24em] relative">
                            <Image src={pic4_I} className="w-[100%] h-[100%] object-cover" alt="image"/>
                            <button className="uppercase absolute bottom-[0.7em] left-[0.7em] text-[1.6em] font-bold font-Montserrat rounded-[0.3em] py-[0.7em] px-[3em] bg-white">kids</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* product-section */}
            <section className="product-section font-Montserrat my-[5em] flex flex-col justify-center items-center gap-[7em]">
                <div className="flex flex-col gap-[1em] justify-center items-center">
                    <h3 className="capitalize text-[2em] font-normal text-[#737373]">Featured Products</h3>
                    <h2 className="uppercase text-[2.4em] font-bold">BESTSELLER PRODUCTS</h2>
                    <p className="text-[1.4em] font-normal text-[#737373]">Problems trying to resolve the conflict between </p>
                </div>
                <div className="flex justify-center items-center gap-[4em] px-[12em] flex-wrap">
                    {products.map((elem,index)=>{
                        return(
                            <div key={index} className="hover:scale-105 duration-500 flex flex-col justify-center items-center gap-[2.5em] mb-[7em]">
                                <div className="w-[23.9em] h-[42.7em]">
                                    <Link href="./components/productDetail"><Image src={elem.image} className="w-[100%] h-[100%] object-cover" alt="image"/></Link>
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
            </section>
            {/* offer-section */}
            <section className="offers-section my-[5em] bg-[#23856D] w-[100%] overflow-hidden text-white flex justify-center items-center gap-[15em] ">
                <div className="left-side flex flex-col justify-center gap-[2em]">
                    <p className="text-[2em] font-Montserrat font-bold capitalize">summer 2024</p>
                    <h1 className="text-[5.8em] font-Montserrat font-bold uppercase">Vita Classic <br /> Product</h1>
                    <p className="text-[1.4em] font-normal font-Montserrat text-[#FAFAFA]">We know how large objects will act, We know <br />how are objects will act, We know</p>
                    <div className="flex items-center gap-[2em]">
                        <h5 className="text-[2.4em] font-bold">$16.48</h5>
                        <button className="text-[1.4em] hover:bg-transparent hover:border-[0.1em] hover:border-white w-fit font-bold font-Montserrat uppercase py-[0.7em] px-[1.5em] text-white bg-[#2DC071] rounded-[0.3em]">add to cart</button>
                </div>
                </div>
                <div className="right-side w-[45em] h-[60em] mt-[15em]">
                    <Image src={offerProduct_I} className="w-[100%] h-[100%] object-cover" alt="image"/>
                </div>
            </section>
            {/* addvertise-section */}
            <section className="addvertise-section my-[10em] flex justify-center items-center gap-[10em] ">
                <div className="left-side w-[57em] h-[60em]">
                    <Image src={addvertise_I} className="w-[100%] h-[100%] object-cover" alt="image"/>
                </div>
                <div className="right-side flex flex-col justify-center gap-[2em]">
                    <p className="text-[2em] font-Montserrat font-bold capitalize">summer 2024</p>
                    <h1 className="text-[5.8em] font-Montserrat font-bold ">Part of the Neural <br /> Universe</h1>
                    <p className="text-[1.4em] font-normal font-Montserrat text-[#737373]">We know how large objects will act, <br />but things on a small scale.</p>
                    <div className="flex items-center gap-[2em]">
                        <button className="text-[1.4em] hover:bg-transparent hover:border-[0.1em] hover:border-[#2DC071] hover:text-[#2DC071] w-fit font-bold font-Montserrat uppercase py-[0.7em] px-[1.5em] text-white bg-[#2DC071] rounded-[0.3em]">buy now</button>
                        <button className="text-[1.4em] hover:bg-[#2DC071] hover:border-[0.1em] hover:border-[#2DC071] hover:text-white w-fit font-bold font-Montserrat uppercase py-[0.7em] px-[1.5em] border-[0.1em] border-[#2DC071]  bg-white text-[#2DC071] rounded-[0.3em]">read more</button>
                    </div>
                </div>
            </section>
            {/* features-section */}
            <section className="features-section font-Montserrat my-[10em] flex flex-col gap-[10em]">
                <div className="flex flex-col gap-[1.5em] justify-center items-center">
                    <h3 className="capitalize text-[1.4em] font-bold text-[#23A6F0]">Practice Advice</h3>
                    <h2 className="text-[4em] font-bold text-[#252B42]">Featured Posts</h2>
                    <p className="text-[1.4em] font-normal text-center text-[#737373]">Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className="features-container flex justify-center items-center gap-[2em]">
                    <div className="features-item flex flex-col gap-[2em]">
                        <div className="relative w-[34.8em] h-[30em]">
                            <Image src={features_I}  className="w-[100%] h-[100%] object-cover" alt="image"/>
                            <button className="absolute top-[0.5em] left-[0.5em] text-[1.4em] font-bold uppercase bg-[#E74040] py-[0.3em] px-[0.6em] rounded-[0.3em]">new</button>
                        </div>
                        <div className="flex flex-col justify-center gap-[1em] w-[34.8em] px-[2em]">    
                            <div className="flex items-center gap-[2em]">
                                <Link href="" className="text-[1.2em] font-normal capitalize hover:text-[#8EC2F2]">google</Link>
                                <Link href="" className="text-[1.2em] font-normal capitalize hover:text-[#8EC2F2]">trending</Link>
                                <Link href="" className="text-[1.2em] font-normal capitalize hover:text-[#8EC2F2]">new</Link>
                            </div>
                            <h2 className="text-[2em] font-normal text-[#252B42]">Loudest à la Madison #1 (L&apos;integral)</h2>
                            <p className="text-[1.4em] font-normal text-[#737373] ">We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.</p>
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-[1em] ">
                                    <Image src={clock_I} className="w-[1.5em] h-[1.5em] object-cover" alt="icon"/>
                                    <p className="text-[1.2em] font-normal">22 April 2021</p>
                                </span>
                                <span className="flex items-center gap-[1em] ">
                                    <Image src={succes_I} className="w-[1.5em] h-[1.5em] object-cover" alt="icon"/>
                                    <p className="text-[1.2em] font-normal">10 Comments</p>
                                </span>
                            </div>
                            <button className="text-[1.4em] font-bold flex items-center gap-[0.5em]">learn more <Image src={arrow_I} className="w-[1em] h-[1em] object-cover" alt="icon"/></button>
                        </div>
                    </div>
                    <div  className="features-item flex flex-col gap-[2em]">
                        <div className="relative w-[34.8em] h-[30em]">
                            <Image src={features_I}  className="w-[100%] h-[100%] object-cover" alt="image"/>
                            <button className="absolute top-[0.5em] left-[0.5em] text-[1.4em] font-bold uppercase bg-[#E74040] py-[0.3em] px-[0.6em] rounded-[0.3em]">new</button>
                        </div>
                        <div className="flex flex-col justify-center gap-[1em] w-[34.8em] px-[2em]">    
                            <div className="flex items-center gap-[2em]">
                                <Link href="" className="text-[1.2em] font-normal capitalize hover:text-[#8EC2F2]">google</Link>
                                <Link href="" className="text-[1.2em] font-normal capitalize hover:text-[#8EC2F2]">trending</Link>
                                <Link href="" className="text-[1.2em] font-normal capitalize hover:text-[#8EC2F2]">new</Link>
                            </div>
                            <h2 className="text-[2em] font-normal text-[#252B42]">Loudest à la Madison #1 (L&apos;integral)</h2>
                            <p className="text-[1.4em] font-normal text-[#737373] ">We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.</p>
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-[1em] ">
                                    <Image src={clock_I} className="w-[1.5em] h-[1.5em] object-cover" alt="icon"/>
                                    <p className="text-[1.2em] font-normal">22 April 2021</p>
                                </span>
                                <span className="flex items-center gap-[1em] ">
                                    <Image src={succes_I} className="w-[1.5em] h-[1.5em] object-cover" alt="icon"/>
                                    <p className="text-[1.2em] font-normal">10 Comments</p>
                                </span>
                            </div>
                            <button className="text-[1.4em] font-bold flex items-center gap-[0.5em]">learn more <Image src={arrow_I} className="w-[1em] h-[1em] object-cover" alt="icon"/></button>
                        </div>
                    </div>
                    <div  className="features-item flex flex-col gap-[2em]">
                        <div className="relative w-[34.8em] h-[30em]">
                            <Image src={features_I}  className="w-[100%] h-[100%] object-cover" alt="image"/>
                            <button className="absolute top-[0.5em] left-[0.5em] text-[1.4em] font-bold uppercase bg-[#E74040] py-[0.3em] px-[0.6em] rounded-[0.3em]">new</button>
                        </div>
                        <div className="flex flex-col justify-center gap-[1em] w-[34.8em] px-[2em]">    
                            <div className="flex items-center gap-[2em]">
                                <Link href="" className="text-[1.2em] font-normal capitalize hover:text-[#8EC2F2]">google</Link>
                                <Link href="" className="text-[1.2em] font-normal capitalize hover:text-[#8EC2F2]">trending</Link>
                                <Link href="" className="text-[1.2em] font-normal capitalize hover:text-[#8EC2F2]">new</Link>
                            </div>
                            <h2 className="text-[2em] font-normal text-[#252B42]">Loudest à la Madison #1 (L&apos;integral)</h2>
                            <p className="text-[1.4em] font-normal text-[#737373] ">We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.</p>
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-[1em] ">
                                    <Image src={clock_I} className="w-[1.5em] h-[1.5em] object-cover" alt="icon"/>
                                    <p className="text-[1.2em] font-normal">22 April 2021</p>
                                </span>
                                <span className="flex items-center gap-[1em] ">
                                    <Image src={succes_I} className="w-[1.5em] h-[1.5em] object-cover" alt="icon"/>
                                    <p className="text-[1.2em] font-normal">10 Comments</p>
                                </span>
                            </div>
                            <button className="text-[1.4em] font-bold flex items-center gap-[0.5em]">learn more <Image src={arrow_I} className="w-[1em] h-[1em] object-cover" alt="icon"/></button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}