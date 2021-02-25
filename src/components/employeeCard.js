import React from "react";

function EmployeeCard(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.department}</p>
        </div>
    );
}

export default EmployeeCard;