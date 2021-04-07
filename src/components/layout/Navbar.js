import React, { Component } from 'react'
import * as siIcons from 'react-icons/si'
import PropTypes from 'prop-types'


const Navbar = ({title}) =>  {
    
        return (
            <nav className="navbar bg-primary">
                <h1>
                <i className="icon"> <siIcons.SiGithub/> </i>
                    {title} </h1>
            </nav>
        )

}
Navbar.defaultProps = {
    title: 'GitHub Finder',
    icon: <siIcons.SiGithub/>
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}
export default Navbar
