import React from "react";
import { useLocation } from "react-router-dom";
import "./FormSuccess.css";

const FormSuccess = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div>
      <h1>Form Submitted Successfully</h1>
      <div>
        <p>First Name: {state.firstName}</p>
        <p>Last Name: {state.lastName}</p>
        <p>Username: {state.username}</p>
        <p>Email: {state.email}</p>
        <p>Phone: {state.phone}</p>
        <p>Country: {state.country}</p>
        <p>City: {state.city}</p>
        <p>PAN No: {state.panNo}</p>
        <p>Aadhar No: {state.aadharNo}</p>
      </div>
    </div>
  );
};

export default FormSuccess;
