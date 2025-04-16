import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const [mainFormData, setMainFormData] = useState(null);
  const [addMemberFormData, setAddMemberFormData] = useState(null);
  const [daughterFormData, setDaughterFormData] = useState(null);

  // Fetch data from localStorage on component mount
  useEffect(() => {
    const savedMainFormData = JSON.parse(localStorage.getItem("mainFormData"));
    const savedAddMemberFormData = JSON.parse(localStorage.getItem("addMemberFormData"));
    const savedDaughterFormData = JSON.parse(localStorage.getItem("daughterFormData"));

    setMainFormData(savedMainFormData);
    setAddMemberFormData(savedAddMemberFormData);
    setDaughterFormData(savedDaughterFormData);
  }, []);

  // Navigate to form to edit the data
  const handleEditForm = (formName) => {
    if (formName === "main-form") {
      navigate("/main-form");
    } else if (formName === "add-member-form") {
      navigate("/add-member-form");
    } else if (formName === "daughter-form") {
      navigate("/daughter-form");
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>

      {/* Display MainForm data in table */}
      <div className="form-section">
        <h3>Main Member Form</h3>
        {mainFormData ? (
          <div>
            <table className="data-table">
              <tbody>
                {Object.keys(mainFormData).map((key, index) => (
                  <tr key={index}>
                    <td className="label">{key.replace(/([A-Z])/g, ' $1')}</td>
                    <td>{mainFormData[key]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={() => handleEditForm("main-form")}>Edit Main Form</button>
          </div>
        ) : (
          <p>No data submitted for Main Form.</p>
        )}
      </div>

      {/* Display AddMemberForm data in table */}
      <div className="form-section">
        <h3>Family Member Form</h3>
        {addMemberFormData ? (
          <div>
            <table className="data-table">
              <tbody>
                {Object.keys(addMemberFormData).map((key, index) => (
                  <tr key={index}>
                    <td className="label">{key.replace(/([A-Z])/g, ' $1')}</td>
                    <td>{addMemberFormData[key]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={() => handleEditForm("add-member-form")}>Edit Family Member Form</button>
          </div>
        ) : (
          <p>No data submitted for Family Member Form.</p>
        )}
      </div>

      {/* Display DaughterForm data in table */}
      <div className="form-section">
        <h3>Married Daughter Form</h3>
        {daughterFormData ? (
          <div>
            <table className="data-table">
              <tbody>
                {Object.keys(daughterFormData).map((key, index) => (
                  <tr key={index}>
                    <td className="label">{key.replace(/([A-Z])/g, ' $1')}</td>
                    <td>{daughterFormData[key]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={() => handleEditForm("daughter-form")}>Edit Married Daughter Form</button>
          </div>
        ) : (
          <p>No data submitted for Married Daughter Form.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
