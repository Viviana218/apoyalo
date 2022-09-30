import React from "react";

class PersonCard extends React.Component {

    render() {

        const {firstName, lastName, age, hairColor} = this.props; /* Desestructurando componentes */

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
}

export default PersonCard;