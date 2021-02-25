import React, { Component } from "react";
import './App.css';
import employee_list from "./employee_list";
import EmployeeCard from "./components/employeeCard";

class App extends Component {

  state = {
    employee_list,
    search: ""
  }

  render() {
    return (
      <>
        {this.state.employee_list.map(employee => (
          <EmployeeCard
            name={employee.name}
            department={employee.department}
          />
        ))}
      </>
    )
  };
};

export default App;
