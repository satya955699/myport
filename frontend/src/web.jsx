import Left from "./component/left"
import Main from "./component/main"
function web(){
    return (
        <div style={{backgroundColor:"#111111"}} className="  md:p-6 justify-center   text-white  flex   h-[100vh]">
            <span className="md:flex hidden  ">

            <Left/>
            </span>
            <Main/>
            
        </div>
    )
}
export default web