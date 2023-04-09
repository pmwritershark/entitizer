import React from "react";
import {processText} from "../utils";

const buttonStyle={
    backgroundColor:"#46eb8e",
    margin:"20px",
    border:"none"
}



function Button(props){
    return(
        <button class="btn btn-primary btn-lg" style={buttonStyle} onClick={processText}>{props.text}</button>
    );
};

export default Button;