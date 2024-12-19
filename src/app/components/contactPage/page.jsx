import Image from "next/image";
import media01_I from "./images/Vector (15).png"
import media02_I from "./images/Vector (16).png"
import media03_I from "./images/Vector (17).png"
import media04_I from "./images/Vector (18).png"
import backImage_I from "./images/none.png"
import contactImage_I from "./images/technology 1 (2).png"
import icon01_I from "./images/Vector (19).png"
import icon02_I from "./images/Vector (20).png"
import icon03_I from "./images/Vector (21).png"
import arroe from "./images/Arrow 2.png"
import Footer from "../footer/page"
import Header2 from "../header2/page" 

export default function contactPage(){
    return(
        <>
            <Header2/>
            <section className="contact-page font-Montserrat">
                <section className="contact-section-01 flex gap-[6em] px-[10em] items-center justify-between  py-[7em]">
                    <div className="leftside flex flex-col justify-center items-start gap-[2em] w-[50em]">
                        <h3 className="tetx-[1.6em] font-bold uppercase">contact us</h3>
                        <h1 className="text-[5.8em] font-bold">Get in touch today!</h1>
                        <p className="text-[2em] w-[20em] font-normal">We know how large objects will act, but things on a small scale</p>
                        <h5 className="text-[2em] font-bold capitalize">phone: +451 215 215</h5>
                        <h5 className="text-[2em] font-bold capitalize">fax: +451 215 215</h5>
                        <div className="flex justify-start items-center gap-[2em]">
                            <Image src={media01_I} className="w-[2em] h-[2em] object-cover" alt="image"/>
                            <Image src={media02_I} className="w-[2em] h-[2em] object-cover" alt="image"/>
                            <Image src={media03_I} className="w-[2em] h-[2em] object-cover" alt="image"/>
                            <Image src={media04_I} className="w-[2em] h-[2em] object-cover" alt="image"/>
                        </div>
                    </div>
                    <div className="flex justify-center items-center relative w-[60em]">
                        <Image src={contactImage_I} className="w-full h-full pl-[5em] object-cover absolute" alt="image"/>
                        <Image src={backImage_I} className="w-full h-full object-cover" alt="image"/>
                    </div>
                </section>
                <section className="contact-section-02 py-[5em] w-full flex justify-center flex-col items-center gap-[10em] font-Montserrat">
                    {/* Heading */}
                    <div className="flex flex-col justify-center items-center gap-[2em] w-[60em]">
                        <h4 className="text-[1.4em] text-center font-bold uppercase">VISIT OUR OFFICE</h4>
                        <h2 className="text-[4em] text-center font-bold">We help small businesses with big ideas</h2>
                    </div>
                    {/* Contact Cards */}
                    <div className="contact-cards flex justify-center items-center">
                        {/* First Card */}
                        <div className="contact-card bg-white flex flex-col justify-center items-center gap-[1em] pb-[5em] pt-[10em] w-[35em]">
                            <div className="w-[8em]">
                                {/* Icon */}
                                <Image src={icon01_I} className="w-full mb-[2em] h-full object-cover" alt="image"/>
                            </div>
                            <p className="text-[1.4em] font-bold text-center">georgia.young@example.com</p>
                            <p className="text-[1.4em] font-bold text-center">georgia.young@ple.com</p>
                            <button className="text-[1.6em] capitalize py-[0.5em] font-bold">Get Support</button>
                            <button className="text-[1.4em] capitalize font-bold border-[0.1em] border-[#23A6F0] text-[#23A6F0] py-[1em] px-[2em] rounded-[2em]">Submit Request</button>
                        </div>
                        {/* Second Card */}
                        <div className="contact-card flex text-white flex-col bg-[#252B42] justify-center items-center gap-[1em] pb-[5em] pt-[10em] w-[35em]">
                            <div className="w-[8em]">
                                {/* Icon */}
                                <Image src={icon02_I} className="w-full mb-[2em] h-full object-cover" alt="image"/>
                            </div>
                            <p className="text-[1.4em] font-bold text-center">georgia.young@example.com</p>
                            <p className="text-[1.4em] font-bold text-center">georgia.young@ple.com</p>
                            <button className="text-[1.6em] capitalize py-[0.5em] font-bold">Get Support</button>
                            <button className="text-[1.4em] capitalize font-bold border-[0.1em] border-[#23A6F0] text-[#23A6F0] py-[1em] px-[2em] rounded-[2em]">Submit Request</button>
                        </div>
                        {/* Third Card */}
                        <div className="contact-card flex bg-white flex-col justify-center items-center gap-[1em] pb-[5em] pt-[10em] w-[35em]">
                            <div className="w-[8em]">
                                {/* Icon */}
                                <Image src={icon03_I} className="w-full mb-[2em] h-full object-cover" alt="image"/>
                            </div>
                            <p className="text-[1.4em] font-bold text-center">georgia.young@example.com</p>
                            <p className="text-[1.4em] font-bold text-center">georgia.young@ple.com</p>
                            <button className="text-[1.6em] capitalize py-[0.5em] font-bold">Get Support</button>
                            <button className="text-[1.4em] capitalize font-bold border-[0.1em] border-[#23A6F0] text-[#23A6F0] py-[1em] px-[2em] rounded-[2em]">Submit Request</button>
                        </div>
                    </div>
                    <div className="bg-white w-full flex flex-col justify-center items-center gap-[2em] my-[5em]">
                        <Image src={arroe} className="w-[7em] object-cover my-[2em]" alt="image"/>
                        <h4 className="text-[1.6em] font-bold uppercase text-center">we can&apos;t wait to meet you</h4>
                        <h2 className="text-[5.8em] font-bold capitalize text-center">let&apos;s talk</h2>
                        <button className="text-[1.4em] font-bold text-white bg-[23A6F0] capitalize rounded-[0.5em] bg-[#23A6F0] hover:text-[#23A6F0] hover:bg-transparent border-[0.1em] py-[1em] px-[2.5em] border-[#23A6F0]">try it free now</button>
                    </div>
                </section>
            </section>
            <Footer/>
        </>
    )
}