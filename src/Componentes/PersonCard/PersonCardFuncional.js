import React from "react";

const PersonCardFuncional = ({firstName, lastName, age, hairColor}) => {

    return(
        <div className="col-4">
            <div className="card ">
                <h4>{lastName}, {firstName} </h4>
                <p><b>Edad: </b>{age}</p>
                <p><b>Hair Color: </b>{hairColor}</p>
            </div>
        </div>
    );

}

export default PersonCardFuncional;