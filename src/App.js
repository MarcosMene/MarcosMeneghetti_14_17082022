import { Routes, Route, HashRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import CreateEmployee from "./Pages/createEmployee/CreateEmployee";
import EmployeList from "./Pages/employList/EmployeeList";
import Page404 from "./Pages/Error/Page404";
import "./App.css";

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/list" element={<EmployeList />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </HashRouter>
  );
};
export default App;
