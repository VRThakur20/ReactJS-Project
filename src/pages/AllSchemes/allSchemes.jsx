import React from "react";
import AllSchemes from "../../components/Tables/listOfSchemes.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import DropDown from "../../components/dropdown/Dropdown.jsx";
import { useState } from "react";
import "./allSchemes.css";
import axios from "axios";

export default function allSchemes() {
  // axios.get("https://rishibhalla.me/api/v1/schemes/").then((sch)=>{
  //     console.log("hello");

  //     const schemes = sch;
  //     console.log(schemes);

  // })

  const schemes = [
    {
      name: "SCHOLARSHIP FOR TOP CLASS EDUCATION FOR STUDENTS WITH DISABILITIES",
      description:
        "Students anyone with disability are given this oppurtunity to support themselves for their education",
      created_by: {
        dept_type: "State",
        dept_name: "Department of Empowerment of Persons with Disabilities",
      },
      created_date: "2005-05-15",
      state: "Andhra Pradesh",
      eligible: " students must be certified about their disability. ",
      scheme_id: "APdisability001",
      institutions_id: ["LPU101", "SRM102", "VIT103", "CU104"],
      registration_deadline: "2023-10-15",
      documents_required: [
        "Aadhar card",
        "Date off birth certificate",
        "PAN card",
        "Disability certificate",
        "Bank details",
      ],
    },
    {
      name: "PRE MATRIC SCHOLARSHIPS FOR MINORITY",
      description:
        "The scheme aims to encourage parents from minority communities to send their school going children to school",
      created_by: {
        dept_type: "State",
        dept_name: "Ministry of Minority Affairs",
      },
      created_date: "2003-03-13",
      state: "Kerala",
      eligible:
        "Students scoring above 50% marks or equivalent grades in the previous final examination and from a minority community",
      scheme_id: "KAminority002",
      institutions_id: [
        "LPU101",
        "SRM102",
        "VIT103",
        "CU104",
        "MIT105",
        "SUS106",
      ],
      registration_deadline: "2023-10-15",
      documents_required: [
        "Aadhar card",
        "Date off birth certificate",
        "PAN card",
        "Caste Certificate",
        "Bank details",
      ],
    }
  ];

  const stateList = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "(UT) Andaman and Nicobar Islands",
    "(UT) Chandigarh",
    "(UT) Dadra and Nagar Haveli and Daman & Diu",
    "(UT) The Government of NCT of Delhi",
    "(UT) Jammu & Kashmir",
    "(UT) Ladakh",
    "(UT) Lakshadweep",
    "(UT) Puducherry",
  ];

  const categoryList = [
    "SC - Scheduled Caste",
    "ST - Scheduled Tribe",
    "OBC - Other Backward Class",
    "GEN - General Category",
  ];

  const [Govt, setGovt] = useState("Central");
  const [Caste, setCaste] = useState("All");
  function handleGovtChange(changeTo) {
    setGovt(stateList[changeTo]);
  }
  function handleCasteChange(changeTo) {
    console.log(changeTo);

    setCaste(categoryList[changeTo]);
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="stateList flex gap-20 mt-10 ">
        <DropDown isGovtList={true} handleGovtChange={handleGovtChange}>
          {" "}
        </DropDown>
        <DropDown isCasteList={true} handleCaste={handleCasteChange}>
          {" "}
        </DropDown>
      </div>
      <h1 className="font-mainFont text-5xl text-mainBlue title12 pl-10 ">
        {" "}
        {Govt} Schemes For {Caste}
      </h1>
      <AllSchemes schemes={schemes}></AllSchemes>
    </>
  );
}
