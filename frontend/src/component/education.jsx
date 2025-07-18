import { Typography } from "@mui/material"

function education(props){
    return (
           <div className=" flex ml-4">
                        <div style={{background:"  linear-gradient(90deg, #8d8c7f 0%, #b3a369 100%)"}}  className=" w-0.5 mx-1    ">

                        </div>
                        <div className=" flex     ">
                            <div className=" h-2 w-2 rounded-full border-2 border-amber-400 flex justify-center  relative   top-14   right-[9px]  bg-amber-500">
                            </div>
                                <div className="ml-16  mt-6 ">
                                     <Typography>{props.name}</Typography>
                                     <Typography sx={{ color:"gold"}}>{props.year}</Typography>
                                     <Typography>{props.description}</Typography>
                                     </div>
                        </div>
                    </div>
    )
}
export default education