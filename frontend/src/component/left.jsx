import cr from "../assets/cr2.png"
import { Dialog, Divider, Typography } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import CakeIcon from '@mui/icons-material/Cake';
import LocationOnIcon from '@mui/icons-material/LocationOn';
function left(){

  const contactInfo = [
  {
    id: 1,
    icon: <MailOutlineIcon />,
    label: "Email",
    value: "satyaprangya0@gmail.com"
  },
  {
    id: 2,
    icon: <SmartphoneIcon />,
    label: "Phone",
    value: "+91-9556995358"
  },
  {
    id: 3,
    icon: <CakeIcon />,
    label: "Birthday",
    value: "March 8, 2004"
  },
  {
    id: 4,
    icon: <LocationOnIcon />,
    label: "Location",
    value: "Bhubaneswar, Odisha"
  }]
    return (
         <div className="  flex">

        <div style={{backgroundColor:"#1E1E1F"}} className="    rounded-xl   p-6   "> 
        <div className=" w-full flex  justify-center">

             <div  className=" bg-[#3C3C3D]    w-[50%]    flex justify-center p-5   rounded-4xl ">
                <img className="  h-20 " src={cr} alt="" />
             </div>
        </div>
        <div className="  ">
             <Typography sx={{ display:"flex",justifyContent:"center"}}>
                SATYAPRANGYA DASH 
             </Typography>
             <div className="    flex justify-center">
               <div  className="  text-sm bg-[#3C3C3D]   px-2 my-1   rounded-xl">

                Web Developer
               </div>
             </div>
        </div>
             <Divider sx={{backgroundColor:"white"}}/>
             {contactInfo.map((e)=>{
              return(
                  <div key={e.id} className=" font-bold   my-5 flex">
                <div  className="  text-amber-300   bg-gray-900   p-1.5   rounded-xl flex justify-center   items-center    mx-2 ">{e.icon}</div>
                <div>
                    <Typography  sx={{fontWeight:10,color:'gray', fontSize:"10px"}}>{e.label}</Typography>
                    <Typography  sx={{ fontSize:"18px"}}>{e.value}</Typography>
                </div>
             </div>
                
              )
             })}
             
           
              
           
        </div>
         </div>
    )
}
export default left 