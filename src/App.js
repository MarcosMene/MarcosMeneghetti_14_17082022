import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import CreateEmployee from "./Pages/createEmployee/CreateEmployee";
import EmployeList from "./Pages/employList/EmployeeList";
import Page404 from "./Pages/Error/Page404";
import "./App.css";

const App = () => {
  return (
    // <BrowserRouter basename="/MarcosMeneghetti_14_17082022">
    <BrowserRouter basename="/MarcosMeneghetti_14_17082022/">
      <Header />
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/list" element={<EmployeList />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
