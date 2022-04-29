import React from "react";
import "antd/dist/antd.css";
import DashBoardComp from "./components/Dashboard";
import FormComp from "./components/Form";
import Location1 from "../src/pages/Location1";
import Location2 from "../src/pages/Location2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Crud from "./pages/Crud";
import FormPage from "./pages/FormPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<FormComp />} />
          <Route path="/dashboard" element={<DashBoardComp />}>
            <Route path="location1" element={<Location1 />} />
            <Route path="location2" element={<Location2 />} />
            {/* <Route path="crud" element={<Crud />} /> */}
          </Route>
          <Route path="/users" element={<Users />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/dashboard/crud" element={<Crud />} />
        </Routes>
      </Router>
    </>
  );

  //  <FormComp username={username} password={password} />;
};

export default App;
