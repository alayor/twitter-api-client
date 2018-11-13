import React, { Component } from 'react';
import { styles } from './styles'

class Header extends Component {
    render() {
        return (
            <div style={styles.container}>
                <span style={styles.title}>Awesome Twitter Viewer</span>
                <button style={styles.edit} type="button"> Edit View </button>
            </div>
        );
    }
}

export default Header;