import React, { Component } from 'react';
import { styles } from './styles'

class Header extends Component {
    render() {
        return (
            <div style={styles.container}>
                <span style={styles.title}> {this.props.name} </span>
                <button style={styles.edit} type="button"
                        onClick={this.props.switch(this.props.id)}> {this.props.editing ? 'Save' : 'Edit'} </button>
            </div>
        );
    }
}

export default Header;