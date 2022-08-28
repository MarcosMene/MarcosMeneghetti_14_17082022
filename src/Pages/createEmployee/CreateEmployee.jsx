import React, { useState, useRef, useEffect } from "react";
import "./CreateEmployee.css";
import { Modal } from "modal_mm";
import Select from "react-select";
import { states } from "../../mocks_data/states";
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

  //modal
  const [showModal, setShowModal] = useState(false);
  // console.log(formValues);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  // React state to manage selected options departament
  const [selectedOptions, setSelectedOptions] = useState();
  // React state to manage selected options country state
  const [selectedOptionsState, setSelectedOptionsState] = useState();

  // Function triggered on selection country state
  function handleSelectState(data) {
    setSelectedOptionsState(data);
    setFormValues({ ...formValues, [data.name]: data.value });
    formErrors.countrystate = "";
  }

  // Function triggered on selection departament
  function handleSelect(data) {
    setSelectedOptions(data);
    setFormValues({ ...formValues, [data.name]: data.value });
    formErrors.departament = "";
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    //hide error message from the input that is changing
    formErrors[e.target.name] = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      openModal();

      //reset all values of form
      setFormValues(initialValues);
      setSelectedOptionsState(null);
      setSelectedOptions(null);
    }
  }, [formErrors]);

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

  //color style selection dropdown

  const colorStyles = {
    control: (styles) => ({ ...styles, marginBottom: 20 }),
  };

  const optionListDepartament = [
    { value: "sales", label: "Sales", name: "departament" },
    { value: "marketing", label: "Marketing", name: "departament" },
    { value: "engeneering", label: "Engeneering", name: "departament" },
    {
      value: "humanresources",
      label: "Humanresources",
      name: "departament",
    },
    { value: "legal", label: "Legal", name: "departament" },
  ];

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
              <p className="errorMessage">{formErrors.firstname}</p>
              <input
                autoComplete="off"
                name="firstname"
                type="text"
                value={formValues.firstname}
                onChange={handleChange}
              />

              <label>Last Name</label>
              <p className="errorMessage">{formErrors.lastname}</p>
              <input
                autoComplete="off"
                name="lastname"
                type="text"
                value={formValues.lastname}
                onChange={handleChange}
              />

              <label>Date of Birth</label>
              <p className="errorMessage">{formErrors.datebirth}</p>
              <input
                autoComplete="off"
                name="datebirth"
                type="date"
                value={formValues.datebirth}
                onChange={handleChange}
              />

              <label>Start Date</label>
              <p className="errorMessage">{formErrors.startdate}</p>
              <input
                autoComplete="off"
                name="startdate"
                type="date"
                value={formValues.startdate}
                onChange={handleChange}
              />
            </fieldset>
            <fieldset className="form-fieldset title">
              <legend>Employee Address</legend>
              <label>Street</label>
              <p className="errorMessage">{formErrors.street}</p>
              <input
                autoComplete="off"
                name="street"
                type="text"
                value={formValues.street}
                onChange={handleChange}
              />

              <label>City</label>
              <p className="errorMessage">{formErrors.city}</p>
              <input
                autoComplete="off"
                name="city"
                type="text"
                value={formValues.city}
                onChange={handleChange}
              />

              <label>State</label>
              <p className="errorMessage">{formErrors.countrystate}</p>

              <Select
                styles={colorStyles}
                name="countrystate"
                options={states}
                placeholder="Select state"
                value={selectedOptionsState}
                onChange={handleSelectState}
              />

              <label>Zip Code</label>
              <p className="errorMessage">{formErrors.zipcode}</p>
              <input
                autoComplete="off"
                name="zipcode"
                type="text"
                value={formValues.zipcode}
                onChange={handleChange}
              />
            </fieldset>
            <fieldset className="form-fieldset title">
              <legend>Departament</legend>
              <label>Departament</label>
              <p className="errorMessage">{formErrors.departament}</p>
              <Select
                name="departament"
                options={optionListDepartament}
                placeholder="Select departament"
                value={selectedOptions}
                onChange={handleSelect}
              />
            </fieldset>
          </div>

          <button className="form-button">Save</button>
        </form>
      </div>
    </main>
  );
};

export default CreateEmployee;
