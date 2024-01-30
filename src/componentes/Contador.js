import React from "react";
import "../holas_de_estilo/contador.css"

function Contador({numeroClics}){
    return(
        <div className="contador">
            {numeroClics}
        </div>
    );
}

export default Contador;