import React from 'react'
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';

const contactComponent = ( {contact} ) => {
  return (
    <div>
      <h2>
        Nombre : {contact.nombre}
      </h2>
      <h2>
        Apellido :  {contact.apellido}
      </h2>
      <h2>
        Email : {contact.email};
      </h2>
      <h3>
        Estado del contacto: {contact.conexion ? 'Contacto en linea': 'Contacto No disponible'}
      </h3>
    </div>
  )
}

contactComponent.propTypes = {
  contact : PropTypes.instanceOf(Contact)
}

export default contactComponent
