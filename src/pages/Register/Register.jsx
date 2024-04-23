import Navbar from "../../components/navbar/Navbar.jsx";
import AadharVer from "../../components/forms/forms.jsx";
import Photo from "../../assets/SignupPage.svg"
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
const dashboard = () =>{
    const navigate=useNavigate();
    
    function handleSubmit(){
        
navigate("/verifyEmail");
    }
    return(
        <>
        <div className="">
            <Navbar />
            </div>
            <div className="aadharForm flex gap-20 items-center">
            <AadharVer  isAadhar={true} handleSubmit={handleSubmit}></AadharVer>
            <img src={Photo}></img>
            </div>

        </>
    )
}
export default dashboard;