import React, { Component } from 'react';
import { styles } from './styles'

class Header extends Component {
    render() {
        return (
            <div style={styles.container}>
                <span style={styles.title}> Name </span>
                <button style={styles.edit} type="button" onClick={this.props.switch(this.props.id)}> Edit </button>
            </div>
        );
    }
}

export default Header;