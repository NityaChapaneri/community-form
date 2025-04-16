import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    surname: "",
    sex: "",
    birthday: "",
    bloodGroup: "",
    nativePlace: "",
    totalFamilyMembers: "",
    houseNumber: "",
    societyName: "",
    landmark: "",
    area: "",
    taluka: "",
    district: "",
    pincode: "",
    contactNo: "",
    whatsappNo: "",
    maritalStatus: "",
    dateOfMarriage: "",
    email: "",
    education: "",
    occupation: "",
    companyName: "",
    designation: "",
    monthlyIncome: "",
    feedback: "",
  });

  const [errors, setErrors] = useState({});
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    // Store the Main Form data in localStorage
    localStorage.setItem("mainFormData", JSON.stringify(formData));
  
    // Optional: If you want to store the image
    if (image) {
      localStorage.setItem("mainFormImage", JSON.stringify(image));
    }
  
    // Show success message
    alert("Main member added successfully!");
  
    // Navigate to the next form (AddMemberForm)
    navigate("/add-member");
  };
  
  return (
    <div className="form-container">
      <h2>Main Member Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          {/* Name Fields */}
          <div className="form-group">
            <label>First Name:</label>
            <input name="firstName" value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>

          <div className="form-group">
            <label>Middle Name:</label>
            <input name="middleName" value={formData.middleName} onChange={handleChange} />
            {errors.middleName && <span className="error">{errors.middleName}</span>}
          </div>

          <div className="form-group">
            <label>Surname:</label>
            <input name="surname" value={formData.surname} onChange={handleChange} />
            {errors.surname && <span className="error">{errors.surname}</span>}
          </div>

          <div className="form-group">
            <label>Gender:</label>
            <select name="sex" value={formData.sex} onChange={handleChange}>
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            {errors.sex && <span className="error">{errors.sex}</span>}
          </div>

          <div className="form-group">
            <label>Date of Birth:</label>
            <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} />
            {errors.birthday && <span className="error">{errors.birthday}</span>}
          </div>

          <div className="form-group">
            <label>Blood Group:</label>
            <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
              <option value="">Select</option>
              <option>A+</option><option>A-</option><option>B+</option><option>B-</option>
              <option>AB+</option><option>AB-</option><option>O+</option><option>O-</option>
            </select>
            {errors.bloodGroup && <span className="error">{errors.bloodGroup}</span>}
          </div>

          {/* Address */}
          <div className="form-group">
            <label>Native Place:</label>
            <input name="nativePlace" value={formData.nativePlace} onChange={handleChange} />
            {errors.nativePlace && <span className="error">{errors.nativePlace}</span>}
          </div>

          <div className="form-group">
            <label>Total Family Members:</label>
            <input type="number" name="totalFamilyMembers" value={formData.totalFamilyMembers} onChange={handleChange} />
            {errors.totalFamilyMembers && <span className="error">{errors.totalFamilyMembers}</span>}
          </div>

          <div className="form-group">
            <label>House Number:</label>
            <input name="houseNumber" value={formData.houseNumber} onChange={handleChange} />
            {errors.houseNumber && <span className="error">{errors.houseNumber}</span>}
          </div>

          <div className="form-group">
            <label>Society/Faliya Name:</label>
            <input name="societyName" value={formData.societyName} onChange={handleChange} />
            {errors.societyName && <span className="error">{errors.societyName}</span>}
          </div>

          <div className="form-group">
            <label>Landmark:</label>
            <input name="landmark" value={formData.landmark} onChange={handleChange} />
            {errors.landmark && <span className="error">{errors.landmark}</span>}
          </div>

          <div className="form-group">
            <label>Area:</label>
            <input name="area" value={formData.area} onChange={handleChange} />
            {errors.area && <span className="error">{errors.area}</span>}
          </div>

          <div className="form-group">
            <label>Taluka:</label>
            <input name="taluka" value={formData.taluka} onChange={handleChange} />
            {errors.taluka && <span className="error">{errors.taluka}</span>}
          </div>

          <div className="form-group">
            <label>District:</label>
            <input name="district" value={formData.district} onChange={handleChange} />
            {errors.district && <span className="error">{errors.district}</span>}
          </div>

          <div className="form-group">
            <label>Pincode:</label>
            <input name="pincode" value={formData.pincode} onChange={handleChange} />
            {errors.pincode && <span className="error">{errors.pincode}</span>}
          </div>

          {/* Contact */}
          <div className="form-group">
            <label>Contact No.:</label>
            <input name="contactNo" value={formData.contactNo} onChange={handleChange} />
            {errors.contactNo && <span className="error">{errors.contactNo}</span>}
          </div>

          <div className="form-group">
            <label>WhatsApp No.:</label>
            <input name="whatsappNo" value={formData.whatsappNo} onChange={handleChange} />
            {errors.whatsappNo && <span className="error">{errors.whatsappNo}</span>}
          </div>

          {/* Marital */}
          <div className="form-group">
            <label>Marital Status:</label>
            <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
              <option value="">Select</option>
              <option>Married</option>
              <option>Unmarried</option>
              <option>Divorced</option>
              <option>Widowed</option>
            </select>
            {errors.maritalStatus && <span className="error">{errors.maritalStatus}</span>}
          </div>

          <div className="form-group">
            <label>Date of Marriage:</label>
            <input type="date" name="dateOfMarriage" value={formData.dateOfMarriage} onChange={handleChange} />
            {errors.dateOfMarriage && <span className="error">{errors.dateOfMarriage}</span>}
          </div>

          {/* Work */}
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Education:</label>
            <input name="education" value={formData.education} onChange={handleChange} />
            {errors.education && <span className="error">{errors.education}</span>}
          </div>

          
          
          
          <div className="form-group">
              <label>Occupation:</label>
                 <select name="occupation" value={formData.occupation} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="Business">Business</option>
                            <option value="Salaried-Business">Salaried-Business</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Finance">Finance</option>
                            <option value="Tailoring">Tailoring</option>
                            <option value="It & Software Development">It & Software Development</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Education & Research">Education & Research</option>
                            <option value="Government & Public Services">Government & Public Services</option>
                            <option value="Legal & Law Enforcement">Legal & Law Enforcement</option>
                            <option value="Sales & Marketing">Sales & Marketing</option>
                            <option value="Manufacturing & Trades">Manufacturing & Trades</option>
                            <option value="Entrepreneur">Entrepreneur</option>
                            <option value="Freelancer">Freelancer</option>
                            <option value="Media - Journalist">Media - Journalist</option>
                            <option value="House Wife">House Wife</option>
                            <option value="Students">Students</option>
                   </select>
                 {errors.occupation && <span className="error">{errors.occupation}</span>}
          </div>


          <div className="form-group">
            <label>Company Name:</label>
            <input name="companyName" value={formData.companyName} onChange={handleChange} />
            {errors.companyName && <span className="error">{errors.companyName}</span>}
          </div>

          <div className="form-group">
            <label>Designation:</label>
            <input name="designation" value={formData.designation} onChange={handleChange} />
            {errors.designation && <span className="error">{errors.designation}</span>}
          </div>

          <div className="form-group">
            <label>Monthly Income (in ₹ lacs):</label>
            <input type="number" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} />
            {errors.monthlyIncome && <span className="error">{errors.monthlyIncome}</span>}
          </div>

          {/* Photo Upload */}
          <div className="form-group">
            <label>Upload Photo (PNG/JPG):</label>
            <input type="file" accept="image/png, image/jpeg" onChange={handleImageChange} />
            {errors.image && <span className="error">{errors.image}</span>}
          </div>

          {/* Feedback */}
          <div className="form-group" style={{ gridColumn: "1 / -1" }}>
            <label>How can we help Darji Samaj?</label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              rows="4"
            ></textarea>
            {errors.feedback && <span className="error">{errors.feedback}</span>}
          </div>
        </div>

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default MainForm;
