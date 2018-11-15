import React, {Component} from 'react';
import {styles} from './styles'

class Header extends Component {
    render() {
        return (
            <div style={styles.container}>
                <img style={styles.image} src={this.props.user.profile_image_url} />
                <span style={styles.title}> {this.props.user} </span>
                <button style={styles.edit} type="button"
                        onClick={this.props.onButtonClick}> {this.props.editing ? 'Save' : 'Edit'} </button>
            </div>
        );
    }
}

export default Header;