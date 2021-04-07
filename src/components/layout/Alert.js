import React from 'react';
import * as aiIcons from 'react-icons/ai'

const Alert = ({ alert }) => {
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
