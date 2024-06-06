import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormWithoutYup.css";

const FormWithoutYup = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    let errors = {};
    if (!values.firstName) errors.firstName = "First Name is required";
    if (!values.lastName) errors.lastName = "Last Name is required";
    if (!values.username) errors.username = "Username is required";
    if (!values.email) errors.email = "Email is required";
    if (!values.password) errors.password = "Password is required";
    if (!values.phone) errors.phone = "Phone number is required";
    if (!values.country) errors.country = "Country is required";
    if (!values.city) errors.city = "City is required";
    if (!values.panNo) errors.panNo = "PAN No. is required";
    if (!values.aadharNo) errors.aadharNo = "Aadhar No. is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  React.useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      navigate("/success", { state: formValues });
    }
  }, [formErrors, isSubmitting, navigate, formValues]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
        />
        {formErrors.firstName && <p>{formErrors.firstName}</p>}
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formValues.lastName}
          onChange={handleChange}
        />
        {formErrors.lastName && <p>{formErrors.lastName}</p>}
      </div>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleChange}
        />
        {formErrors.username && <p>{formErrors.username}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        {formErrors.email && <p>{formErrors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
        {formErrors.password && <p>{formErrors.password}</p>}
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
        />
        {formErrors.phone && <p>{formErrors.phone}</p>}
      </div>
      <div>
        <label>Country:</label>
        <select
          name="country"
          value={formValues.country}
          onChange={handleChange}
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        {formErrors.country && <p>{formErrors.country}</p>}
      </div>
      <div>
        <label>City:</label>
        <select name="city" value={formValues.city} onChange={handleChange}>
          <option value="">Select City</option>
          <option value="Delhi">Delhi</option>
          <option value="New York">New York</option>
          <option value="London">London</option>
        </select>
        {formErrors.city && <p>{formErrors.city}</p>}
      </div>
      <div>
        <label>PAN No.:</label>
        <input
          type="text"
          name="panNo"
          value={formValues.panNo}
          onChange={handleChange}
        />
        {formErrors.panNo && <p>{formErrors.panNo}</p>}
      </div>
      <div>
        <label>Aadhar No.:</label>
        <input
          type="text"
          name="aadharNo"
          value={formValues.aadharNo}
          onChange={handleChange}
        />
        {formErrors.aadharNo && <p>{formErrors.aadharNo}</p>}
      </div>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default FormWithoutYup;
