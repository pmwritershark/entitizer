import React from "react";
import DisplayBox from "./DisplayBox";
import Button from "./Button";

const tableStyle={

    paddingBottom:"60px",
    position:"relative",
    align:"center"

}

function Table(){
    return(
        <div style={tableStyle}>
            <div>
                <span>
                  <DisplayBox id="source-content" placeholder="Enter Content Here..."></DisplayBox>
                </span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                <span>
                  <DisplayBox id="entity-list" placeholder="Enter Entities Here..."></DisplayBox>
                </span>

            </div>
            <Button text="Begin Entitizing"/>
            <div>
                <span>
                   <DisplayBox id="results" placeholder="View Results Here..."></DisplayBox>
                </span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                <span>
                   <DisplayBox id="percentage" placeholder="View Entity Percentage Here..."></DisplayBox>
                </span>

            </div>
        </div>

    );
};

export default Table;
