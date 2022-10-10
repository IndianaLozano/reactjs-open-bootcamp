import PropTypes from "prop-types";
import {useState} from "react";
import {Contact} from "../models/Contact";

export const ContactState = ({contact}) => {

    const [state, setState] = useState(contact.connected);

    const changeConnection = () => {
        setState(!state);
        contact.connected = !state;
    }

    return (
        <div>
            <button onClick={changeConnection}> {state? 'Contacto En Línea' : 'Contacto No Disponible'}</button>
        </div>
    )
}

ContactState.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}