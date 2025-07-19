import { useState } from "react"
import Contact from "./contact"
import About from "./about"
import Blog from "./blog"
import Resume from "./resume"
import Portfolio from "./portfolio"
import gsap  from "gsap"
import { useGSAP } from "@gsap/react"
function main (){
     const [comp,usecomp]=useState("About")



    const handleClick=(e)=>{
        usecomp(e)

    }
    const obj={
        About:About,
        Resume:Resume,
        Portfolio:Portfolio,

        Contact:Contact,
    }
    const Setselect=obj[comp]
    return(
        <div style={{backgroundColor:"#1E1E1F", boxShadow:" 0 1px 12px #1E1E1F"}} className="  hide-scroll   md:rounded-xl overflow-y-auto   md:mx-5 md:w-[68vw] w-full" >
              
              <div className=" md:flex  justify-end nav ">
                 <ul className=" md:w-[60%] md:rounded-bl-4xl py-3   bg-[#3C3C3D] flex justify-around ">
                    {Object.keys(obj).map((e)=>{
                        return(
                            
                            <li onClick={()=>handleClick(e)} className={ `${e===comp?` text-amber-400   scale-105 `:` `} cursor-pointer `}>{e}</li>
                        )
                    })}
                 </ul>
              </div>
              <div>
                {Setselect && <Setselect/> }
            
             
              </div>
        </div>
    )
}
export default main