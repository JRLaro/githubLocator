import React, {useContext} from 'react';
import * as aiIcons from 'react-icons/ai'
import AlertContext from "../../context/alert/alertContext"

const Alert = () => {
    const alertContext = useContext(AlertContext);

    const { alert } = alertContext;

    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <i>  <aiIcons.AiOutlineWarning
                    className="text-danger"
                    style={{fontSize:'1.5rem'}}/> {alert.message} </i>
            </div>
        )
    );
}

export default Alert;
