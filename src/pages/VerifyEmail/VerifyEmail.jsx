import Navbar from "../../components/navbar/Navbar.jsx";
import EmailVer from "../../components/forms/forms.jsx";
import Photo from "../../assets/SignupPage.svg"
import "./verifyEmail.css";
import { useNavigate } from "react-router-dom";


const email = () =>{
    
    const navigate=useNavigate();
    return(
        <>
        <div className="">
            <Navbar />
            </div>
            
            <div className="aadharForm flex gap-20 items-center">
                <div className="flex flex-col">
                <h1 className="font-mainFont text-4xl font-bold text-mainBlue mb-10 "> Verify  Email</h1>
            <EmailVer  isEmail={true} handleSubmit={()=>{
                navigate("/createPassword");
            }}></EmailVer>
            </div>
            <img src={Photo}></img>
            </div>

        </>
    )
}
export default email;