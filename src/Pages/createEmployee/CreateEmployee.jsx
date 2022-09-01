/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "./CreateEmployee.css";
import "../../../src/App.css";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from "modal_mm";
import Select from "react-select";
import { states } from "../../mocks_data/states";
import { optionListDepartament } from "../../mocks_data/departament";

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
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  // React state to manage selected options country state
  const [selectedOptionsState, setSelectedOptionsState] = useState();

  //birth date
  const [selectedDate, setSelectedDate] = useState(
    // moment().subtract(18, "years")._d
    null
  );
  //start work date
  const [selectedDateStart, setSelectedDateStart] = useState(
    // new Date()
    null
  );

  // React state to manage selected options departament
  const [selectedOptions, setSelectedOptions] = useState();

  const ageDate = (data) => {
    setSelectedDate(data);
    const dateValue = moment(data).format("YYYY/MM/DD");

    setFormValues({
      ...formValues,
      [(formValues.datebirth = "datebirth")]: (formValues.datebirth =
        dateValue),
    });
    formErrors.datebirth = "";
  };

  const startDate = (data) => {
    setSelectedDateStart(data);

    const dateValueStart = moment(data).format("YYYY/MM/DD");

    setFormValues({
      ...formValues,

      [(formValues.startdate = "startdate")]: (formValues.startdate =
        dateValueStart),
    });

    formErrors.startdate = "";
  };

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
      setSelectedDate(null);
      setSelectedDateStart(null);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    //first name
    if (!values.firstname) {
      errors.firstname = "First name is required";
    } else if (values.firstname.length < 3) {
      errors.firstname = "First name must be more than 3 characters";
    } else if (values.firstname.length > 30) {
      errors.firstname = "First name must be less than 30 characters";
    }

    //last name
    if (!values.lastname) {
      errors.lastname = "Last name is required";
    } else if (values.lastname.length < 3) {
      errors.lastname = "Last name must be more than 3 characters";
    } else if (values.lastname.length > 30) {
      errors.lastname = "Last name must be less than 30 characters";
    }

    //date birth
    if (!values.datebirth) {
      errors.datebirth =
        "Date of birth is required. You must be 18-60 years old.";
    }

    //date start date
    if (!values.startdate) {
      errors.startdate = "Start date is required";
    }

    //street
    if (!values.street) {
      errors.street = "Street is required";
    } else if (values.street.length < 10) {
      errors.street = "Street must be more than 10 characters";
    } else if (values.street.length > 40) {
      errors.street = "Street must be less than 40 characters";
    }

    //city
    if (!values.city) {
      errors.city = "City is required";
    } else if (values.city.length < 5) {
      errors.city = "City must be more than 10 characters";
    } else if (values.city.length > 40) {
      errors.city = "City must be less than 40 characters";
    }

    //country's state
    if (!values.countrystate) {
      errors.countrystate = "State is required";
    }

    //zipcode
    if (!values.zipcode) {
      errors.zipcode = "Zipcode is required";
    } else if (values.zipcode.length < 5) {
      errors.zipcode = "Zipcode must be more than 4 characters";
    } else if (values.zipcode.length > 20) {
      errors.zipcode = "Zipcode must be less than 20 characters";
    }

    //departament
    if (!values.departament) {
      errors.departament = "Departament is required";
    }
    return errors;
  };

  //color style selection dropdown
  // const colorStyles = {
  //   control: (styles) => ({ ...styles }),
  // };

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
          fontSizeModal="1.5rem"
          //your custom parameters
        />
      )}
      <h2 className="form-title">Create Employee</h2>
      <div className="form-wrapper">
        <form className="form-inputs" onSubmit={handleSubmit}>
          <div className="form-fieldsets">
            <fieldset className="form-fieldset">
              <legend>Employee identity</legend>

              <label htmlFor="firstname">First Name </label>
              <input
                id="firstname"
                autoComplete="off"
                name="firstname"
                type="text"
                value={formValues.firstname}
                onChange={handleChange}
              />
              <span className="errorMessage">{formErrors.firstname}</span>

              <label htmlFor="lastname">Last Name</label>
              <input
                id="lastname"
                autoComplete="off"
                name="lastname"
                type="text"
                value={formValues.lastname}
                onChange={handleChange}
              />
              <span className="errorMessage">{formErrors.lastname}</span>

              <label htmlFor="datebirth">Date of Birth</label>
              <DatePicker
                id="datebirth"
                name="datebirth"
                value={selectedDate}
                onChange={ageDate}
                selected={selectedDate}
                placeholderText={"yyyy/mm/dd"}
                yearDropdownItemNumber={60}
                minDate={moment().subtract(60, "years")._d}
                maxDate={moment().subtract(18, "years")._d}
                scrollableYearDropdown
                dateFormat="yyyy/MM/dd"
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
              <span className="errorMessage">{formErrors.datebirth}</span>
              <label htmlFor="startdate">Start Date </label>
              <DatePicker
                id="startdate"
                name="startdate"
                value={selectedDateStart}
                onChange={startDate}
                selected={selectedDateStart}
                placeholderText={"yyyy/mm/dd"}
                minDate={new Date()}
                maxDate={moment().add(10, "weeks")._d}
                dateFormat="yyyy/MM/dd"
                filterDate={(date) =>
                  date.getDay() !== 6 && date.getDay() !== 0
                }
                peekNextMonth
                showMonthDropdown
                dropdownMode="select"
                todayButton="today"
              />

              <span className="errorMessage">{formErrors.startdate}</span>
            </fieldset>
            <fieldset className="form-fieldset title">
              <legend>Employee Address</legend>
              <label htmlFor="street">Street</label>
              <input
                id="street"
                autoComplete="off"
                name="street"
                type="text"
                value={formValues.street}
                onChange={handleChange}
              />
              <span className="errorMessage">{formErrors.street}</span>

              <label htmlFor="city">City </label>
              <input
                id="city"
                autoComplete="off"
                name="city"
                type="text"
                value={formValues.city}
                onChange={handleChange}
              />
              <span className="errorMessage">{formErrors.city}</span>

              <label htmlFor="countrystate">
                State
                <Select
                  id="countrystate"
                  name="countrystate"
                  options={states}
                  placeholder="Select state"
                  value={selectedOptionsState}
                  onChange={handleSelectState}
                />
              </label>
              <span className="errorMessage">{formErrors.countrystate}</span>

              <label htmlFor="zipcode">Zip Code</label>
              <input
                id="zipcode"
                autoComplete="off"
                name="zipcode"
                type="text"
                value={formValues.zipcode}
                onChange={handleChange}
              />
              <span className="errorMessage">{formErrors.zipcode}</span>
            </fieldset>

            <fieldset className="form-fieldset title">
              <legend>Departament</legend>

              <label htmlFor="departament">
                Departament
                <Select
                  id="departament"
                  name="departament"
                  options={optionListDepartament}
                  placeholder="Select departament"
                  value={selectedOptions}
                  onChange={handleSelect}
                />
              </label>

              <span className="errorMessage">{formErrors.departament}</span>
            </fieldset>
          </div>

          <button className="form-button">Save</button>
        </form>
      </div>
    </main>
  );
};

export default CreateEmployee;
