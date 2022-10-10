import React from 'react';
import PropTypes from "prop-types";
import {ContactState} from "../ContactState";
import {Contact} from "../../models/Contact";

const ContactComponent = () => {

    const defaultContact = new Contact('Indiana', 'Lozano', 'indilozano19@gmail.com', false);

    return (
        <div>
            <h2>
                Name: {defaultContact.name}
            </h2>
            <h3>
                Lastname: {defaultContact.lastname}
            </h3>
            <h4>
                Email: {defaultContact.email}
            </h4>
            <h5>
                <ContactState contact={defaultContact}/>
            </h5>
        </div>
    )
}

ContactComponent.propTypes = {
}

export default ContactComponent;