import Image from "next/image";
import image from "./images/unsplash_Lks7vei-eAg.png"
import image01 from "./images/unsplash_gMsnXqILjp4 copy.png"
import image02 from "./images/unsplash_PSmDDeXaEWE (1).png"
import image03 from "./images/unsplash_1-aA2Fadydc.png"
import image04 from "./images/unsplash_mcSDtbWXUZU.png"
import arrow_I from "../pricingPage/images/Vector (10).png"
import team01_I from "../aboutPage/images/team-1-user-1.jpg"
import team02_I from "../aboutPage/images/team-1-user-3.jpg"
import team03_I from "../aboutPage/images/media.png"
import media01_I from "../aboutPage/images/ant-design_twitter-outlined (1).png"
import media02_I from "../aboutPage/images/Vector (13).png"
import media03_I from "../aboutPage/images/ant-design_facebook-filled.png"
import icon01 from "./images/Vector (22).png"
import icon02 from "./images/ant-design_instagram-outlined (1).png"
import icon03 from "./images/logos_linkedin-icon.png"
import icon04 from "./images/logos_facebook.png"
import Footer from "../footer/page";
import Header2 from "../header2/page" 


export default function TeamPage(){
    let ourTeamMember = [
        {image:team01_I , name:"username" , profession:"profession"},
        {image:team02_I , name:"username" , profession:"profession"},
        {image:team03_I , name:"username" , profession:"profession"},
        {image:team01_I , name:"username" , profession:"profession"},
        {image:team02_I , name:"username" , profession:"profession"},
        {image:team03_I , name:"username" , profession:"profession"},
        {image:team01_I , name:"username" , profession:"profession"},
        {image:team02_I , name:"username" , profession:"profession"},
        {image:team03_I , name:"username" , profession:"profession"}
    ]
    return(
        <>
            <section className="team-page font-Montserrat">
            <Header2/>
                <section className="team-section-01 flex justify-center px-[2em] items-center flex-col gap-[3em]">
                    <div className="flex justify-center flex-col items-center gap-[2em]">                
                        <h3 className="text-[1.6em] font-bold uppercase">what we do</h3>
                        <h2 className="text-[5.8em] font-bold text-center">Innovation tailored for you</h2>
                        <div className="flex gap-[1em] items-center ">
                            <h3 className="text-[1.4em] font-bold capitalize">home</h3>
                            <Image src={arrow_I} className="w-[1em] h-[1em] object-cover" alt="icon"/>
                            <h3 className="text-[1.4em] font-bold capitalize text-[#BDBDBD]">team</h3>
                        </div>
                    </div>
                    <div className="item-02 w-full flex justify-center items-center gap-[1em]">
                        <div className="left-side w-[50%]">
                            <Image src={image} className="w-full object-cover" alt="image"/>
                        </div>
                        <div className="right-side w-[50%] flex flex-col justify-center items-center gap-[1em]">
                            <div className="w-[100%] flex justify-center items-center gap-[1em]">
                                <Image src={image01} className="w-[50%] object-cover" alt="image"/>
                                <Image src={image02} className="w-[50%] object-cover" alt="image"/>
                            </div>
                            <div className="w-[100%] flex justify-center items-center gap-[1em]">
                                <Image src={image03} className="w-[50%] object-cover" alt="image"/>
                                <Image src={image04} className="w-[50%] object-cover" alt="image"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="team-section-02 px-[7em] flex flex-col justify-center items-center gap-[3em] my-[15em]">
                    <h2 className="text-[4em] font-bold capitalize">meet our team</h2>
                    <div className="team-card flex flex-wrap mt-[5em] justify-center items-center gap-[5em]">
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
                <section className="team-section-03 flex justify-center my-[5em] items-center gap-[4em] flex-col">
                    {/* Header */}
                    <div className="flex flex-col justify-center items-center gap-[2em]">
                        <h2 className="text-[4em] font-bold text-center">Start your 14 days free trial</h2>
                        <p className="text-[1.4em] font-normal text-center w-[30em]" >
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                            RELIT official consequent.
                        </p>
                    </div>
                    {/* Call to Action Button */}
                    <div>
                        <button className="text-[1.4em] font-bold hover:bg-transparent hover:text-[#23A6F0] hover:border-[#23A6F0] bg-[#23A6F0] text-white rounded-[0.5em] border-[0.1em] px-[3em] py-[1.2em]">Try it free now</button>
                    </div>
                    {/* Social Media Icons */}
                    <div className="flex justify-center items-center gap-[3em]">
                        <Image src={icon01} className="w-[3em] object-cover" alt="icon" />
                        <Image src={icon02} className="w-[3em] object-cover" alt="icon" />
                        <Image src={icon03} className="w-[3em] object-cover" alt="icon" />
                        <Image src={icon04} className="w-[3em] object-cover" alt="icon" />
                    </div>
                </section>
            </section>
            <Footer/>
        </>
    )
}