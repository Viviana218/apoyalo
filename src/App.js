import React from "react";
import PersonCardFuncional from "./Componentes/PersonCard/PersonCardFuncional";

/*  Inicializar: npm start
Detener proyecto: Ctrl+C 
*/

class App extends React.Component {

  

  render() {
    return(
      <div className="container">
        <br/>
        <PersonCardFuncional firstName="Jane" lastName="Doe" age={45} hairColor="Black"/>
        <br/>
        <PersonCardFuncional firstName="John" lastName="Smith" age={88} hairColor="Brown"/>
        <br/>
        <PersonCardFuncional firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown"/>
        <br/>
        <PersonCardFuncional firstName="Maria" lastName="Smith" age={62} hairColor="Brown"/>


      </div>
      
    );
  }

}

export default App;