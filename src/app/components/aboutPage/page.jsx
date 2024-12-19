import Image from "next/image";
import pic_I from "./images/hero-2-bg-shape-cover.png"
import pic01_I from "./images/container (1).png"
import team01_I from "./images/team-1-user-1.jpg"
import team02_I from "./images/team-1-user-3.jpg"
import team03_I from "./images/media.png"
import media01_I from "./images/ant-design_twitter-outlined (1).png"
import media02_I from "./images/Vector (13).png"
import media03_I from "./images/ant-design_facebook-filled.png"
import brand01_I from "./images/fa-brands-1.png"
import brand02_I from "./images/fa-brands-2.png"
import brand03_I from "./images/fa-brands-3.png"
import brand04_I from "./images/fa-brands-6.png"
import brand05_I from "./images/fa-brands-5.png"
import brand06_I from "./images/Vector (14).png"
import pic02_I from "./images/unsplash_vjMgqUkS8q8.png"
import Footer from "../footer/page"
import Header2 from "../header2/page" 

export default function AboutPage(){
    let ourTeamMember = [
        {image:team01_I , name:"username" , profession:"profession"},
        {image:team02_I , name:"username" , profession:"profession"},
        {image:team03_I , name:"username" , profession:"profession"}
    ]
    return(
        <>
            {/* <Header/> */}
            <Header2/>
            <section className="aboutPage">
                {/* section 01 */}
                <section className="about-section-01 p-[2em] px-[10em] my-[5em] font-Montserrat flex justify-between gap-[10em] items-center">
                    <div className="leftside-01 flex flex-col gap-[2.5em]">
                        <h3 className="text-[1.6em] font-bold uppercase">about company</h3>
                        <h2 className="text-[5.8em] font-bold capitalize">about us</h2>
                        <p className="w-[20em] text-[2em] font-light">We know how large objects will act, but things on a small scale</p>
                        <button className="w-fit rounded-[0.4em] hover:bg-white hover:text-[#23A6F0] hover:border-[#23A6F0] hover:border-[0.1em]  text-[1.4em] font-bold capitalize px-[4em] py-[1em] bg-[#23A6F0] text-white">get qoutes now</button>
                    </div>
                    <div className="right-side-01">
                        <Image src={pic_I} className="w-[55em] h-[55em] object-cover" alt="image"/>
                    </div>
                </section>
                {/* section 02 */}
                <section className="about-section-02 px-[10rem] font-Montserrat">
                    <div className="item-1 flex justify-between my-[5em] items-center gap-[10em]">
                        <div className="leftside-01 flex w-[50em] flex-col gap-[2em]">
                            <h4 className="text-[1.em] font-medium capitalize text-[#E74040]">problem trying</h4>
                            <p className="text-[2.4em] font-bold">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</p>
                        </div>
                        <div className="rightside-01 w-[54.5em]">
                            <p className="text-[1.4em] font-medium">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                        </div>
                    </div>
                    <div className="item-2 flex justify-between items-center gap-[5em] my-[15em]">
                        <div className="text-center">
                            <h2 className="text-[5.8em] font-bold uppercase">51k</h2>
                            <p className="text-[1.6em] font-bold capitalize text-[#737373]">Happy Customers</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-[5.8em] font-bold uppercase">150k</h2>
                            <p className="text-[1.6em] font-bold capitalize text-[#737373]">Monthly Visitors</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-[5.8em] font-bold uppercase">15</h2>
                            <p className="text-[1.6em] font-bold capitalize text-[#737373]">Countries  Worldwide</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-[5.8em] font-bold uppercase">100+</h2>
                            <p className="text-[1.6em] font-bold capitalize text-[#737373]">Top Partners</p>
                        </div>
                    </div>
                    <div className="item-3 flex justify-center items-center my-[5em]">
                        <Image src={pic01_I} className="w-[98.9em] h-[54em] rounded-[0.5em] object-cover" alt="image"/>
                    </div>
                </section>
                {/* section 03 */}
                <section className="about-section-03 px-[10rem] font-Montserrat flex flex-col gap-[5rem] my-[15rem]">
                    <div className="text-center flex flex-col justify-center gap-[1em] items-center">
                        <h2 className="text-[4em] font-bold capitalize">meet our team</h2>
                        <p className="text-[1.4em] font-normal w-[40em]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                    <div className="team-card flex flex-wrap mt-[5em] justify-between items-center gap-[3em]">
                        {ourTeamMember.map((curelem,index)=>{
                            return(
                                <div key={index} className="flex flex-col justify-center items-center gap-[2em]">
                                    <div>
                                        <Image src={curelem.image} className="w-[31.6em] h-[23.em] object-cover" alt="image"/>
                                    </div>
                                    <h2 className="text-[1.6em] font-bold capitalize">{curelem.name}</h2>
                                    <h3 className="text-[1.4em] text-[#737373] font-bold capitalize">{curelem.profession}</h3>
                                    <div className="flex justify-center items-center gap-[5em]">
                                        <Image src={media01_I} className="w-[2.4em] h-[2.4em] object-cover" alt="image"/>
                                        <Image src={media02_I} className="w-[2.4em] h-[2.4em] object-cover" alt="image"/>
                                        <Image src={media03_I} className="w-[2.4em] h-[2.4em] object-cover" alt="image"/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
                {/* section 04 */}
                <section className="about-section-04 px-[10rem] bg-[#FAFAFA] py-[7rem] mt-[10rem] font-Montserrat flex flex-col justify-center items-center gap-[10rem]">
                    <div className="text-center flex flex-col justify-center gap-[1em] items-center">
                        <h2 className="text-[4em] font-bold capitalize">big companies are here</h2>
                        <p className="text-[1.4em] font-normal w-[40em]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                    </div>
                    <div className="company-logo flex-wrap flex justify-center items-center gap-[5em]">
                        <Image src={brand01_I} className="w-[9em] object-cover" alt="image" />
                        <Image src={brand02_I} className="w-[9em] object-cover" alt="image" />
                        <Image src={brand03_I} className="w-[9em] object-cover" alt="image" />
                        <Image src={brand04_I} className="w-[9em] object-cover" alt="image" />
                        <Image src={brand05_I} className="w-[9em] object-cover" alt="image" />
                        <Image src={brand06_I} className="w-[9em] object-cover" alt="image" />
                    </div>
                </section>
                {/* section 05 */}
                <section className="about-section-05 font-Montserrat flex">
                    <div className="leftside-05 bg-[#2A7CC7] w-[70%] px-[20em] py-[15em] text-white flex flex-col gap-[2em]">
                        <h3 className="text-[1.6em] font-semibold uppercase">work with us</h3>
                        <h2 className="text-[4em] font-bold capitalize">now let&apos;s grow your</h2>
                        <p className="text-[1.4em] font-normal">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>
                        <button className="text-[1.4em] hover:bg-white hover:text-black w-fit font-bold px-[2em] py-[0.5em] border-[0.1em] border-white rounded-[0.2em]">Let&apos;s Go</button>
                    </div>
                    <div className="rightside-05 w-[30%]">
                        <Image src={pic02_I} className="w-[100%] h-[100%] object-cover" alt="image"/>
                    </div>
                </section>
            </section>
            <Footer/>
        </>
    )
}