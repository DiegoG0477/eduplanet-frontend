import eduplanetLogo from "@/public/assets/logo-png-w.png";
import Img from "next/image";

export default function Nav(){
    return(
        <div className="nav">
           <Img src={eduplanetLogo}/>
        </div>
    );
}