import BasicTable from "../../components/TableGroup/BasicTable";

/**
 * @name EmployeeList
 * @description create employee list page with component table
 * @returns {JSX.Element}
 */

const EmployeeList = () => {
  return (
    <main className="container center">
      <h2 className="form-title">List Employee</h2>
      <BasicTable />
    </main>
  );
};

export default EmployeeList;
