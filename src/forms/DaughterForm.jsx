import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const DaughterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    daughterName: "",
    husbandName: "",
    location: "",
    marriageDate: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // UseEffect hook to pre-populate form data from localStorage
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("daughterFormData"));
    if (savedData) {
      setFormData(savedData); // Pre-populate form with saved data if it exists
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation checks
    const newErrors = {};
    if (!formData.daughterName) {
      newErrors.daughterName = "Daughter's name is required.";
    }
    if (!formData.husbandName) {
      newErrors.husbandName = "Husband's name is required.";
    }
    if (!formData.location) {
      newErrors.location = "Location is required.";
    }
    if (!formData.marriageDate) {
      newErrors.marriageDate = "Marriage date is required.";
    }
    setErrors(newErrors);

    // If no errors, save data and set form as submitted
    if (Object.keys(newErrors).length === 0) {
      // Save form data to localStorage
      localStorage.setItem("daughterFormData", JSON.stringify(formData));

      setIsSubmitted(true); // Show the success message
    }
  };

  const handleEdit = () => {
    // Navigate back to the main form to allow editing
    setIsSubmitted(false); // Reset submitted status so user can edit the form
  };

  const goToHome = () => {
    navigate("/"); // Navigate back to home
  };

  const goToPrevious = () => {
    navigate("/add-member-form"); // Navigate back to add member form
  };

  return (
    <div className="form-container">
      <h2>Married Daughter Form</h2>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Daughter's Name:</label>
            <input
              type="text"
              name="daughterName"
              value={formData.daughterName}
              onChange={handleChange}
            />
            {errors.daughterName && <span className="error">{errors.daughterName}</span>}
          </div>

          <div className="form-group">
            <label>Husband's Name:</label>
            <input
              type="text"
              name="husbandName"
              value={formData.husbandName}
              onChange={handleChange}
            />
            {errors.husbandName && <span className="error">{errors.husbandName}</span>}
          </div>

          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
            {errors.location && <span className="error">{errors.location}</span>}
          </div>

          <div className="form-group">
            <label>Marriage Date:</label>
            <input
              type="date"
              name="marriageDate"
              value={formData.marriageDate}
              onChange={handleChange}
            />
            {errors.marriageDate && <span className="error">{errors.marriageDate}</span>}
          </div>

          <div className="button-group">
            <button type="button" className="btn-prev" onClick={goToPrevious}>
              Previous
            </button>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className="submission-success">
          <p>✅ All Details submitted successfully!</p>
          <div className="button-group">
            <button className="btn edit-details-btn" onClick={handleEdit}>
              Edit Details
            </button>
            <button className="btn go-home-btn" onClick={goToHome}>
              Go to Home Page
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DaughterForm;
