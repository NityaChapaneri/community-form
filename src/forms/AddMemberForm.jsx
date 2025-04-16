import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const AddMemberForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    relation: "",
    age: "",
    occupation: "",
  });

  const [errors, setErrors] = useState({
    relation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the current family member data to localStorage
    const existingData = JSON.parse(localStorage.getItem("addMemberFormData")) || [];
    existingData.push(formData);
    localStorage.setItem("addMemberFormData", JSON.stringify(existingData));

    // Clear form data after submitting
    setFormData({
      name: "",
      relation: "",
      age: "",
      occupation: "",
    });

    alert("Family member added!");
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/daughter-form");
  };

  const handlePrevious = () => {
    navigate("/main-form");
  };

  return (
    <div className="form-container">
      <h2>Family Member Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Family Member Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </div>

        <div className="form-group">
          <label>Relation:</label>
          <select
            name="relation"
            value={formData.relation}
            onChange={handleChange}
          >
            <option value="">Select Relation</option>
            <option value="Daughter">Daughter</option>
            <option value="Son">Son</option>
            <option value="Son In Law">Son In Law</option>
            <option value="Grandson">Grand Son</option>
            <option value="GrandDaughter">Grand Daughter</option>
          </select>
          {errors.relation && (
            <span className="error">{errors.relation}</span>
          )}
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age"
          />
        </div>

        <div className="form-group">
          <label>Occupation:</label>
          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            placeholder="Enter occupation"
          />
        </div>

        <div className="button-group">
          <button type="button" className="btn-prev" onClick={handlePrevious}>
            Previous
          </button>
          <button type="submit" className="btn-next">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMemberForm;
