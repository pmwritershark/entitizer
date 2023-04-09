import React from "react";

const navbarStyle={
    backgroundColor: "#16453e",
    align:"center",
    marginBottom:"20px"
    
}

const titleStyle={
    color: "white",
    fontSize: "50px",
}

function Navbar(){
    return(
        <nav class="navbar navbar-light" style={navbarStyle}>
        <div class="container-fluid">
        <h1 style={titleStyle} class="mx-auto">Entitizer</h1>
        </div>    
        
        </nav>
    );
};

export default Navbar;
