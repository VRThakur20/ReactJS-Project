import axios from "axios";

const instance = () => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NTE1NTZmMDA5OTdmZWE1ZGY3ZDFhNzEiLCJpYXQiOjE2OTU4OTczMjgsImV4cCI6MTcyNzQzMzMyOH0.qu8wacdTgCPwooPDXQQqqRk3pL1G4gz4Pa6tYZuHK2A";
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
     
    },
  });
};

export default instance;
