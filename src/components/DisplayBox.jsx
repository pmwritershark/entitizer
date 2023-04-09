import React from "react";

const textAreaStyle={
    outline:"none",
    resize:"none",
    border:"none",
    borderRadius:"20px",
    padding: "40px",
    backgroundColor:"#ecd9dd",
    fontSize:"20px"
}

function DisplayBox(props){
    return(
        <textarea id={props.id} rows="10" cols="30" placeholder={props.placeholder} style={textAreaStyle}></textarea> 

    );
};

export default DisplayBox;
