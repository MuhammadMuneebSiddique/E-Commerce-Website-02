import Image from "next/image";
import Link from "next/link";
import Check_I from "./images/form-check-input.png"
import arrow_I from "./images/Vector (10).png"
import tick_I from "./images/icn-circle circle-xs secondary-color-1.png"
import Footer from "../footer/page"
import Header2 from "../header2/page" 

export default function Pricing(){
    return(
        <div>
            <section className="pricing-page font-Montserrat pt-[2em] bg-[#bdbdbd52]">
                <Header2/>
                <div className="flex flex-col justify-center items-center gap-[4em] py-[5em]">
                    <div className="flex justify-center items-center flex-col gap-[1em]">
                        <h2 className="text-[4em] font-bold">Pricing</h2>
                        <p className="text-[1.6em] w-[35em] text-center font-normal">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                    <div className="flex justify-center items-center gap-[2em]">
                        <h2 className="text-[1.6em] font-bold capitalize">monthly</h2>
                        <Image src={Check_I} className="w-[4.5em] h-[2.5em] object-cover" alt="icon" />
                        <h2 className="text-[1.6em] font-bold capitalize">yearly</h2>
                        <button className="text-[1.4em] capitalize text-[#23A6F0] bg-[#B2E3FF] px-[2em] py-[1em] rounded-[2.3em]">save 25%</button>
                    </div>
                    <div className="pricing-card flex justify-center items-center gap-[2em]">
                        <div className="flex mt-[3em] flex-col justify-center items-center gap-[3.5em] py-[2em] rounded-[0.5em] w-[32.7em] border-[0.1em] border-[#23A6F0] ">
                            <h2 className="text-[2.4em] font-bold uppercase">free</h2>
                            <p className="text-[1.6em] font-bold w-[10em] text-center">Organize across all apps by hand</p>
                            <div className="text-center">
                                <h2 className="text-[#23A6F0] text-[4em] font-bold">0$</h2>
                                <p className="text-[#23A6F0] text-[1.4em] font-normal capitalize">per month</p>
                            </div>
                            <div>
                                <ul className="flex flex-col gap-[2em]">
                                    <li className="text-[1.4em] font-bold capitalize flex items-center gap-[1em]"><Image src={tick_I} className="w-[2em] h-[2em] object-cover" alt="icon" /> Unlimited product updates </li>
                                    <li className="text-[1.4em] font-bold capitalize flex items-center gap-[1em]"><Image src={tick_I} className="w-[2em] h-[2em] object-cover" alt="icon" /> Unlimited product updates </li>
                                    <li className="text-[1.4em] font-bold capitalize flex items-center gap-[1em]"><Image src={tick_I} className="w-[2em] h-[2em] object-cover" alt="icon" /> Unlimited product updates </li>
                                    <li className="text-[1.4em] font-bold capitalize flex items-center gap-[1em]"><Image src={tick_I} className="w-[2em] h-[2em] object-cover" alt="icon" /> 1GB  Cloud storage </li>
                                    <li className="text-[1.4em] font-bold capitalize flex items-center gap-[1em]"><Image src={tick_I} className="w-[2em] h-[2em] object-cover" alt="icon" /> Email and community support</li>
                                </ul>
                            </div>
                            <button className="text-[1.4em] capitalize bg-[#23A6F0] font-bold text-center w-[17em] py-[1.3em] rounded-[0.7em]">try for free</button>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-[3.5em] py-[2em] rounded-[0.5em] w-[32.7em] border-[0.1em] text-white bg-[#252B42] ">
                            <h2 className="text-[2.4em] font-bold uppercase">standard</h2>
                            <p className="text-[1.6em] font-bold w-[10em] text-center">Organize across all apps by hand</p>
                            <div className="text-center">
                                <h2 className="text-[#23A6F0] text-[4em] font-bold">9.99$</h2>
                                <p className="text-[#23A6F0] text-[1.4em] font-normal capitalize">per month</p>
                            </div>
                            <div>
                                <ul className="flex flex-col gap-[2em]">
                                    <li className="text-[1.4em] font-bold capitalize flex items-center gap-[1em]"><Image src={tick_I} className="w-[2em] h-[2em] object-cover" alt="icon" /> Unlimited product updates </li>
                                    <li className="text-[1.4em] font-bold capitalize flex items-center gap-[1em]"><Image src={tick_I} className="w-[2em] h-[2em] object-cover" alt="icon" /> Unlimited product updates </li>
                                    <li className="text-[1.4em] font-bold capitalize flex items-center gap-[1em]"><Image src={tick_I} className="w-[2em] h-[2em] object-cover" alt="icon" /> Unlimited product updates </li>
                                    <li className="text-[1.4em] font-bold capitalize flex items-center gap-[1em]"><Image src={tick_I} className="w-[2em] h-[2em] object-cover" alt="icon" /> 1GB  Cloud storage </li>
                                    <li className="text-[1.4em] font-bold capitalize flex items-center gap-[1em]"><Image src={tick_I} className="w-[2em] h-[2em] object-cover" alt="icon" /> Email and community support</li>
                                </ul>
                            </div>
                            <button className="text-[1.4em] capitalize bg-[#23A6F0] font-bold text-center w-[17em] py-[1.3em] rounded-[0.7em]">try for free</button>
                        </div>
                        <div className="flex mt-[3em] flex-col justify-center items-center gap-[3.5em] py-[2em] rounded-[0.5em] w-[32.7em] border-[0.1em] border-[#23A6F0] ">
                            <h2 className="text-[2.4em] font-bold uppercase">premium</h2>
                            <p className="text-[1.6em] font-bold w-[10em] text-center">Organize across all apps by hand</p>
                            <div className="text-center">
                                <h2 className="text-[#23A6F0] text-[4em] font-bold">19.99$</h2>
                                <p className="text-[#23A6F0] text-[1.4em] font-normal capitalize">per month</p>
                            </div>
                            <div>
                                <ul className="flex flex-col gap-[2em]">
                                    <li className="text-[1.4em] font-bold capitalize flex items-center gap-[1em]"><Image src={tick_I} className="w-[2em] h-[2em] object-cover" alt="icon" /> Unlimited product updates </li>
                                    <li className="text-[1.4em] font-bold capitalize flex items-center gap-[1em]"><Image src={tick_I} className="w-[2em] h-[2em] object-cover" alt="icon" /> Unlimited product updates </li>
                                    <li className="text-[1.4em] font-bold capitalize flex items-center gap-[1em]"><Image src={tick_I} className="w-[2em] h-[2em] object-cover" alt="icon" /> Unlimited product updates </li>
                                    <li className="text-[1.4em] font-bold capitalize flex items-center gap-[1em]"><Image src={tick_I} className="w-[2em] h-[2em] object-cover" alt="icon" /> 1GB  Cloud storage </li>
                                    <li className="text-[1.4em] font-bold capitalize flex items-center gap-[1em]"><Image src={tick_I} className="w-[2em] h-[2em] object-cover" alt="icon" /> Email and community support</li>
                                </ul>
                            </div>
                            <button className="text-[1.4em] capitalize bg-[#23A6F0] font-bold text-center w-[17em] py-[1.3em] rounded-[0.7em]">try for free</button>
                        </div>
                    </div>
                </div>
                <div className="faq-section bg-white flex justify-center items-center gap-[3em]">
                    <div className="container flex flex-col gap-[10em] mt-[10em]">
                        {/* Pricing FAQ Header */}
                        <div className="faq-header flex flex-col justify-center items-center gap-[1em]">
                            <h2 className="text-[4em] font-bold capitalize text-center">Pricing FAQs</h2>
                            <p className="text-[2em] font-normal  text-[#737373] capitalize text-center">
                                Problems trying to resolve the conflict between <br />
                                the two major realms of Classical physics
                            </p>
                        </div>
                        {/* FAQ Questions */}
                        <div className="faq-questions flex flex-col justify-between items-center gap-[4em]">
                            <div className="faq-row flex justify-center items-center gap-[10em]">
                                <div className="faq-item w-[40rem]">
                                    <h4 className="text-[1.6em] font-bold ">➤ The quick fox jumps over the lazy dog</h4>
                                    <p className="text-[1.4em] text-[#737373] font-normal">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        varius enim in eros elementum tristique.
                                    </p>
                                </div>
                                <div className="faq-item w-[40rem]">
                                    <h4 className="text-[1.6em] font-bold ">➤ The quick fox jumps over the lazy dog</h4>
                                    <p className="text-[1.4em]  text-[#737373] font-normal">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        varius enim in eros elementum tristique.
                                    </p>
                                </div>
                            </div>
                            <div className="faq-row flex justify-center items-center gap-[10em]">
                                <div className="faq-item w-[40rem]">
                                    <h4 className="text-[1.6em] font-bold ">➤ The quick fox jumps over the lazy dog</h4>
                                    <p className="text-[1.4em]  text-[#737373] font-normal">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        varius enim in eros elementum tristique.
                                    </p>
                                </div>
                                <div className="faq-item w-[40rem]">
                                    <h4 className="text-[1.6em] font-bold ">➤ The quick fox jumps over the lazy dog</h4>
                                    <p className="text-[1.4em]  text-[#737373] font-normal">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        varius enim in eros elementum tristique.
                                    </p>
                                </div>
                            </div>
                            <div className="faq-row flex justify-center items-center gap-[10em]">
                                <div className="faq-item w-[40rem]">
                                    <h4 className="text-[1.6em]  text-[#737373] font-bold ">➤ The quick fox jumps over the lazy dog</h4>
                                    <p className="text-[1.4em] font-normal">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        varius enim in eros elementum tristique.
                                    </p>
                                </div>
                                <div className="faq-item w-[40rem]">
                                    <h4 className="text-[1.6em] font-bold ">➤ The quick fox jumps over the lazy dog</h4>
                                    <p className="text-[1.4em]  text-[#737373] font-normal">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        varius enim in eros elementum tristique.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Support Text */}
                        <div className="support-text flex justify-center items-center">
                            <p className="text-[2em] font-normal text-[#737373]">
                                Haven&apos;t got your answer? <Link href="/support">Contact our support</Link>
                            </p>
                        </div>

                        {/* Trial Section */}
                        <div className="trial-section flex flex-col justify-center items-center gap-[2em]">
                            <h3 className="text-[4em] font-bold ">Start your 14 days free trial</h3>
                            <p className="text-[1.4em] font-normal text-center text-[#737373]">
                                See, feel and know how your business will grow <br />
                                with next RELIO Effort considered.
                            </p>
                            <button className="trial-button bg-[#23A6F0] font-bold text-white text-[1.4em] rounded-[0.5em] px-[3em] py-[1em]">Try it free now</button>
                        </div>

                        {/* Social Media Icons */}
                        <div className="social-icons">
                        <a href="#" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" aria-label="Facebook">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}