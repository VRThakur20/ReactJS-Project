import {Routes,Route} from 'react-router-dom'
import './App.css'
import Scheme from './pages/SchemePage/Schemes'
import Register from './pages/Register/Register.jsx';
import Email from './pages/VerifyEmail/VerifyEmail.jsx';
import CreatePassword from "./pages/ConfirmPassword/createPassword.jsx";
import VerifyDl from "./pages/VerifyDl/verifyDl.jsx";
import VerifyPAN from "./pages/VerifyPan/verifyPan.jsx";
import VerifyDomicile from "./pages/VerifyDomicile/verifyDomicile.jsx";
import VerifyIncome from "./pages/VerifyIncome/verifyIncome.jsx";
import VerifyCaste from "./pages/VerifyCaste/verifyCaste.jsx";
import Verify10th from "./pages/Verify10/tenth.jsx";
import Verify12th from "./pages/Verify12/twe.jsx";
import DocVerifyPage from './pages/DocumentVerification/docVerifyPage'
import ViewSchemes from "./pages/AllSchemes/allSchemes.jsx";
import MyDocsPage from './pages/MyDocuments/myDocsPage';
import Login from "./pages/Login/Login.jsx";
import UniWindow from './pages/UniversityWindow/uniWindow.jsx';
import StudDocVerification from "./pages/UniversityWindow/studDocVerification.jsx"


function App() {


  return (
    <div className='font-mainFont'>
      <Routes>
        <Route path="/" Component={ ViewSchemes } />        
        <Route path="/login/register" Component={ Register } />
        <Route path="/createPassword" Component={ CreatePassword } />
        <Route path="/verifyEmail" Component={ Email } />
        <Route path="/dashboard/scheme/verifyDl" Component={VerifyDl}></Route>
        <Route path="/dashboard/scheme/verifyPAN" Component={VerifyPAN}></Route>
        <Route path="/dashboard/scheme/verifyDomicile" Component={VerifyDomicile}></Route>
        <Route path="/dashboard/scheme/verifyIncome" Component={VerifyIncome}></Route>
        <Route path="/dashboard/scheme/verifyCaste" Component={VerifyCaste}></Route>
        <Route path="/dashboard/scheme/verify10th" Component={Verify10th}></Route>
        <Route path="/dashboard/scheme/verify12th" Component={Verify12th}></Route>
        <Route path="/dashboard" Component={ViewSchemes}></Route>
        <Route path="/dashboard/scheme" Component={ Scheme }></Route>
        <Route path="/dashboard/scheme/docverify" Component={ DocVerifyPage }></Route>
        <Route path="/mydocuments" Component={ MyDocsPage }></Route>
        <Route path="/login" Component={ Login }></Route>
        <Route path="/uniwindow" Component = { UniWindow } ></Route>
        <Route path="/studDocVerification" Component={ StudDocVerification } ></Route>

        
      </Routes>
   
      
      </div>
  )  
}



export default App
