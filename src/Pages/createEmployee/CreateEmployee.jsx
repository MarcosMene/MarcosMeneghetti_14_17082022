import Form from "../../components/Form/Form";
import "./CreateEmployee.css";

/**
 * @name CreateEmployee
 * @description create page to create employee with form component
 * @returns {JSX.Element}
 */

const CreateEmployee = () => {
  return (
    <main className="container center">
      <h2 className="form-title">Create Employee</h2>
      <Form />
    </main>
  );
};

export default CreateEmployee;
