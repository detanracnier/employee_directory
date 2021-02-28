import React, { useState, useEffect } from "react";
import './App.css';
import employee_list from "./employee_list";
import Filter from "./components/filter";
import EmployeeTableColumns from "./components/employeeTableColumns";
import Employee from "./components/employee";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [employees, setEmployees] = useState([{

  }]);

  const [sort, setSort] = useState({
    sortCol: "id",
    sortOrder: 1
  })

  const [filter, setFilter] = useState("");

  // When the component mounts, a call will be made to get employees.
  useEffect(() => {
    setEmployees(employee_list);
  }, []);

  function filterChange(event) {
      setFilter(event.target.value);
  }

  function handleBtnClick(event) {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-col-name");
    console.log("col clicked");
    setSort({
      sortCol: btnName,
      sortOrder: sort.sortOrder * -1
    })
  }

  // Filter employees by Name and Sort employees base on sort state
  // using a try / catch because the employee list might not be populated yet and the filter throws an error if it's undefined
  let modifiedEmployeesList = [];
  try {
    modifiedEmployeesList = employees.filter(employee => employee.name.includes(filter)).sort((a, b) => {
      // removing case sensetivity
      let sortA = typeof a[sort.sortCol] === "string" ? a[sort.sortCol].toLowerCase() : a[sort.sortCol];
      let sortB = typeof b[sort.sortCol] === "string" ? b[sort.sortCol].toLowerCase() : b[sort.sortCol];

      if (sortA > sortB) {
        return sort.sortOrder;
      } else {
        return sort.sortOrder * -1;
      }
    });
  } catch (e) {
    //console.log(e);
  }


return (
  <>
    <Filter handleOnChange={filterChange} />
    {/* Create and name columns based off the first employee object */}
    <EmployeeTableColumns keys={Object.keys(employees[0])} handleBtnClick={handleBtnClick} />
    {/* pass each employee into the Employee component */}
    {modifiedEmployeesList.map(employee => (
      <Employee key={employee.id + employee.name} employeeInfo={employee} />
    ))}
  </>
)
};

export default App;
