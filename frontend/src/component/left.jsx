import cr from "../assets/cr.png"
import { Dialog, Divider, Typography } from "@mui/material";
import Devider from "@mui/material/Divider"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import CakeIcon from '@mui/icons-material/Cake';
import LocationOnIcon from '@mui/icons-material/LocationOn';
function left(){
    return (
         <div className=" md:flex hidden">

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
             
             <div className="   my-5 flex">
                <div  className="  text-amber-300   bg-gray-900   p-1.5   rounded-xl flex justify-center   items-center    mx-2 "><MailOutlineIcon/></div>
                <div>
                    <Typography  sx={{fontWeight:10,color:'gray', fontSize:"10px"}}>Email</Typography>
                    <Typography  sx={{ fontSize:"15px"}}>satyaprangya0@gmail.com</Typography>
                </div>
             </div>
               <div className="   my-5 flex">
                <div  className="  text-amber-300  bg-gray-900    p-1.5   rounded-xl flex justify-center   items-center    mx-2 "><SmartphoneIcon/></div>
                <div>
                    <Typography  sx={{fontWeight:10,color:'gray', fontSize:"10px"}}>Phone</Typography>
                    <Typography  sx={{ fontSize:"15px"}}>+91-9556995358</Typography>
                </div>
             </div>
               <div className="   my-5 flex">
                <div  className="  text-amber-300  bg-gray-900    p-1.5   rounded-xl flex justify-center   items-center    mx-2 "><CakeIcon/></div>
                <div>
                    <Typography  sx={{fontWeight:10,color:'gray', fontSize:"10px"}}>Birthday</Typography>
                    <Typography  sx={{ fontSize:"15px"}}>March8,2004</Typography>
                </div>
             </div>
              <div className="   my-5 flex">
                <div  className="  text-amber-300  bg-gray-900    p-1.5   rounded-xl flex justify-center   items-center    mx-2 "><LocationOnIcon/></div>
                <div>
                    <Typography  sx={{fontWeight:10,color:'gray', fontSize:"10px"}}>Location</Typography>
                    <Typography  sx={{ fontSize:"15px"}}>Bhubaneswar,Odisha</Typography>
                </div>
             </div>
        </div>
         </div>
    )
}
export default left 