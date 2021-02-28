import React from "react";

function Employee(props) {
    let employee = props.employeeInfo;

    return (
        <div className="row employee-row">
            {Object.keys(employee).map(key => (
                <div key={key} className="col">
                    {employee[key]}
                </div>
            ))}
        </div>
    );
}

export default Employee;