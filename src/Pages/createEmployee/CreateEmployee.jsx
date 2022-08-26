import React, { useState, useRef, useEffect } from "react";
import "./CreateEmployee.css";
import { Modal } from "modal_mm";
import { BiInfoCircle } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";

const CreateEmployee = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    datebirth: "",
    startdate: "",
    street: "",
    city: "",
    countrystate: "",
    zipcode: "",
    departament: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  //modal employee created
  //modal
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      openModal();
    }
  }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "first name is required";
    } else if (values.firstname.length < 3) {
      errors.firstname = "first name must be more than 3 characters";
    }
    if (!values.lastname) {
      errors.lastname = "last name is required";
    }
    if (!values.datebirth) {
      errors.datebirth = "date of birth is required";
    }
    if (!values.startdate) {
      errors.startdate = "start date is required";
    }
    if (!values.street) {
      errors.street = "street is required";
    }
    if (!values.city) {
      errors.city = "city is required";
    }
    if (!values.countrystate) {
      errors.countrystate = "state is required";
    }

    if (!values.zipcode) {
      errors.zipcode = "zipcode is required";
    }
    if (!values.departament) {
      errors.departament = "departament is required";
    }
    return errors;
  };

  return (
    <main className="container center">
      {Object.keys(formErrors).length === 0 && isSubmit && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          //your custom parameters
          backgroundColor="white"
          colorModal="beige"
          iconModal="success"
          borderModal="20px"
          content="Employee created!"
          contentcolor="black"
          shadowModal="0 5px 12px rgba(18, 39, 3, .5)"
          //your custom parameters
        />
      )}
      <h2 className="form-title">Create Employee</h2>
      <div className="form-wrapper">
        <form className="form-inputs" onSubmit={handleSubmit}>
          <div className="form-fieldsets">
            <fieldset className="form-fieldset title">
              <legend>Employee identity</legend>
              <label>First Name</label>
              <span>{formErrors.firstname}</span>
              <input
                autoComplete="off"
                name="firstname"
                type="text"
                defaultValue={formValues.firstname}
                onChange={handleChange}
              />

              <label>Last Name</label>
              <span>{formErrors.lastname}</span>
              <input
                autoComplete="off"
                name="lastname"
                type="text"
                defaultValue={formValues.lastname}
                onChange={handleChange}
              />

              <label>Date of Birth</label>
              <p>{formErrors.datebirth}</p>
              <input
                autoComplete="off"
                name="datebirth"
                type="date"
                defaultValue={formValues.datebirth}
                onChange={handleChange}
              />

              <label>Start Date</label>
              <p>{formErrors.startdate}</p>
              <input
                autoComplete="off"
                name="startdate"
                type="date"
                defaultValue={formValues.startdate}
                onChange={handleChange}
              />
            </fieldset>
            <fieldset className="form-fieldset title">
              <legend>Employee Address</legend>
              <label>Street</label>
              <p>{formErrors.street}</p>
              <input
                autoComplete="off"
                name="street"
                type="text"
                defaultValue={formValues.street}
                onChange={handleChange}
              />

              <label>City</label>
              <p>{formErrors.city}</p>
              <input
                autoComplete="off"
                name="city"
                type="text"
                defaultValue={formValues.city}
                onChange={handleChange}
              />

              <label>State</label>
              <p>{formErrors.countrystate}</p>
              <select
                name="countrystate"
                defaultValue={formValues.countrystate}
                onChange={handleChange}
              >
                <option value="alabama">Alabama</option>
                <option value="texas">Texas</option>
                <option value="florida">Florida</option>
                <option value="alaska">Alaska</option>
              </select>

              <label>Zip Code</label>
              <p>{formErrors.zipcode}</p>
              <input
                autoComplete="off"
                name="zipcode"
                type="text"
                defaultValue={formValues.zipcode}
                onChange={handleChange}
              />

              <label>Departament</label>
              <p>{formErrors.departament}</p>
              <select
                name="departament"
                defaultValue={formValues.departament}
                onChange={handleChange}
              >
                <option value="sales">Sales</option>
                <option value="marketing">Marketing</option>
                <option value="engineering">Engineering</option>
                <option value="human-resources">Human Resources</option>
                <option value="legal">Legal</option>
              </select>
            </fieldset>
          </div>

          <button className="form-button">Save</button>
        </form>
      </div>
    </main>
  );
};

export default CreateEmployee;
