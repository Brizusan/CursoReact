import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from './pure/contact'

const ContactListComponent = () => {

  const defaultContact = new Contact(
    'Cesar', 'Zubilete','correo@gmail.com',true
  )

  return (
    <div>
      <div>
        <h1>
          Datos de Contacto
        </h1>
      </div>
      <ContactComponent contact={defaultContact}></ContactComponent>
      
    </div>
  );
}

export default ContactListComponent;
