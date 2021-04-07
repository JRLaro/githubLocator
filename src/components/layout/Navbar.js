import React, { Component } from 'react'
import * as siIcons from 'react-icons/si'
import PropTypes from 'prop-types'


class Navbar extends Component {
    static defaultProps = {
        title: 'GitHub Finder',
        icon: <siIcons.SiGithub/>
}

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }
    
    render() {
        return (
            <nav className="navbar bg-primary">
                <h1>
                <i className="icon"> <siIcons.SiGithub/> </i>
                    {this.props.title} </h1>
            </nav>
        )
    }
}

export default Navbar
