import React, { Fragment, useState, useEffect } from 'react';

import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App(){
    // agregando las citas en local storage
    let citasIniciales = JSON.parse(localStorage.getItem('citas'))
    if(!citasIniciales){
        citasIniciales = []
    }

    // Arreglo para las citas
    const [citas, guardarCitas] = useState([])

    // useEffect para realizar ciertas operaciones cuando  el state cambia
    // siempre es una funcion de flecha
    useEffect(()=>{
        let citasIniciales = JSON.parse(localStorage.getItem('citas'))
        if (citasIniciales) {
            localStorage.setItem('citas', JSON.stringify(citas))
        } else {
            localStorage.setItem('citas', JSON.stringify([]))
        }
    }, [citas])

    // funcion para ir agregando las citas
    const crearCita = cita => {
        // en React siempre se deben ocupar las funciones que modifican el estado
        // para copiar las que ya estan y no las borre al agregar una nueva
        guardarCitas([...citas,cita])
    }
    // funcion que elimina una cita por su Id
    const eliminarCita = id => {
        // buscando el id de la cita a eliminar
        const nuevasCitas = citas.filter(cita => cita.id !== id)
        // imprimimos el nuevo arreglo ya con la cita eliminada
        guardarCitas(nuevasCitas)
    }
    // mensaje condicional para cuando no haya citas
    const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas'

    // en React se suele ocupar el metodo map() para iterar arreglos
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
                    <h2>{titulo}</h2>
                    {citas.map(cita=>(
                        <Cita
                            key={cita.id}
                            cita={cita}
                            eliminarCita={eliminarCita}
                        />
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default App