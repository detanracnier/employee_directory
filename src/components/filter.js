import React from "react";

function Filter(props) {
    return (
        <input onChange={props.handleOnChange} className="" type="text" maxLength="40" placeholder="employee name" />
    );
}

export default Filter;