import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const [mainFormData, setMainFormData] = useState(null);
  const [addMemberFormData, setAddMemberFormData] = useState(null);
  const [daughterFormData, setDaughterFormData] = useState(null);

  useEffect(() => {
    setMainFormData(JSON.parse(localStorage.getItem("mainFormData")));
    setAddMemberFormData(JSON.parse(localStorage.getItem("addMemberFormData")));
    setDaughterFormData(JSON.parse(localStorage.getItem("daughterFormData")));
  }, []);

  const handleEditForm = (formName) => {
    if (formName === "main-form") navigate("/main-form");
    else if (formName === "add-member-form") navigate("/add-member-form");
    else if (formName === "daughter-form") navigate("/daughter-form");
  };

  const renderRowWiseTable = (formData, title, formName) => {
    if (!formData) return <p>No data submitted for {title}.</p>;

    const keys = Object.keys(formData);

    return (
      <div className="form-section">
        <h3>{title}</h3>
        <div className="table-wrapper">
          <table className="row-wise-table">
            <thead>
              <tr>
                {keys.map((key, i) => (
                  <th key={i}>{key.replace(/([A-Z])/g, ' $1')}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {keys.map((key, i) => (
                  <td key={i}>
                  {formData[key] !== null && formData[key] !== undefined ? String(formData[key]) : "—"}
                </td>
                ))}
              </tr>
            </tbody>
          </table>
          <button className="edit-btn" onClick={() => handleEditForm(formName)}>
            Edit {title}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>
      {renderRowWiseTable(mainFormData, "Main Member Form", "main-form")}
      {renderRowWiseTable(addMemberFormData, "Family Member Form", "add-member-form")}
      {renderRowWiseTable(daughterFormData, "Married Daughter Form", "daughter-form")}
    </div>
  );
};

export default Dashboard;
