import React from 'react';
import PropTypes from 'prop-types'

const Cita = ({cita, eliminarCita}) => (
    // en el onclick es muy importante mandar a llamar la funcion 
    // eliminar cita atraves de una arrow function para que la funcion
    // no se ejecute sola si no que espere al evento click
    <div className="cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Dueño: <span>{cita.propietario}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>
        <button
            className="button eliminar u-full-width"
            onClick={()=>eliminarCita(cita.id)}
        >Eliminar &times;</button>
    </div>
)

Cita.propTypes={
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;