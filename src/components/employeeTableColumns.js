import React from "react";

function EmployeeTableColumns(props) {
    let keys = props.keys;

    return (
        <div className="row" onClick={props.handleBtnClick}>
            {keys.map(key => (
                <div key={key.id+key} className="col btn-info" data-col-name={key}>
                    {key}
                </div>
            ))}
        </div>
    );
}

export default EmployeeTableColumns;