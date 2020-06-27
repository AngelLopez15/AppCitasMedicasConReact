import React, { Fragment, useState } from 'react';

import Formulario from './components/Formulario'

function App(){
    // Arreglo para las citas
    const [citas, guardarcitas] = useState([])

    // funcion para ir agregando las citas
    const crearCita = ()=>{
        // en React siempre se deben ocupar las funciones que modifican el estado
        guardarcitas([
            // para copiar las que ya estan y no las borre al agregar una nueva
            ...citas,
            citas
        ])
    }
    return (
        <Fragment>
            <h1>Administrador de pacientes</h1>
            <div className="container">
                <div className="one-half column">
                    <Formulario
                        crearCita={crearCita}
                    />
                </div>
                <div className="one-half column">
                    2
                </div>
            </div>
        </Fragment>
    )
}

export default App