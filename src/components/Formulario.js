import React, { Fragment } from 'react';
const Formulario = () => {
    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
            <form>
                <label>Nombre de la mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                />
                <label>Nombre del dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño de la mascota"
                />
                <label>Fecha de alta</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                />
                <label>Hora de alta</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
            </form>
        </Fragment>
    );
}

export default Formulario;