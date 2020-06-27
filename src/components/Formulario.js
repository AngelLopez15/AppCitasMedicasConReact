import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4'

const Formulario = ({crearCita}) => {
    //Creando el state de Citas
    const [cita, actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    })

    // funcion que se ejecuta cada que el usuario escribe en un input
    const actualizarState=e=>{
        // ocupando el metodo para actualizar el state
        actualizarCita({
            // ocupando el spred operator para hacer una copia del state
            // y de esta manera no sobreeescribir los cambios 
            ...cita,
            // desestructurando para agregar el valor al elemento que le corresponde
            [e.target.name]:e.target.value
        })
    }

    // Creando un State para mostar los errores al usuario
    const [error, actualizarError] = useState(false)

    // extraer los valores 
    // siempre se recomienda desestructurar el objeto para acordar el codigo cuando se
    // mandan llamar y ya no usar tanto el operador punto para acceder a las propiedades
    const {mascota,propietario,fecha,hora,sintomas} = cita

    // Validaciones del boton agregar cita cuando el usuario lo presiona
    const submitCita = e =>{
        e.preventDefault()
        // validar
        if (mascota.trim()==='' || propietario.trim()==='' || fecha.trim()==='' || hora.trim()==='' || sintomas.trim()==='') {
            actualizarError(true)
            return
        }
        // Eliminar el mensaje prevop de error
        actualizarError(false)
        
        // asignar un id
        cita.id=uuid()
        console.log(cita)
        // crear la cita
        crearCita(cita)

        // reiniciar el form
        // se reinicia por que en los formularios pusimos la propiedad value
        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }
    // {error} es para pintar la validacion en pantalla
    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
            
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p>:null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre de la mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre del dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha de alta</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora de alta</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
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