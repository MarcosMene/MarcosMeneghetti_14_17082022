import React from "react";
import "./CreateEmployee.css";

const CreateEmployee = () => {
  return (
    <main className="container center">
      <h2 className="form-title">Create Employee</h2>
      <div className="form-wrapper">
        <form className="form-inputs">
          <div className="form-fieldsets">
            <fieldset className="form-fieldset title">
              <legend>Employee identity</legend>
              <label>First Name</label>
              <input type="text" required />
              <label>Last Name</label>
              <input type="text" required />
              <label>Date of Birth</label>
              <input type="date" required />
              <label>Start Date</label>
              <input type="date" required />
            </fieldset>
            <fieldset className="form-fieldset title">
              <legend>Employee Address</legend>
              <label>Street</label>
              <input type="text" required />
              <label>City</label>
              <input type="text" required />
              <label>State</label>
              <select>
                <option value="alabama">Alabama</option>
                <option value="texas">Texas</option>
                <option value="florida">Florida</option>
                <option value="alaska">Alaska</option>
              </select>
              <label>Zip Code</label>
              <input type="text" required />
            </fieldset>
          </div>

          <button className="form-button">Create</button>
        </form>
      </div>
    </main>
  );
};

export default CreateEmployee;
