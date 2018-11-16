import React, {Component} from 'react';
import {styles} from './styles'

class Header extends Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={{...styles.image,  backgroundImage: `url(${this.props.info.profile_image_url})`}} />
                <span style={styles.title}> @{this.props.user} </span>
                {!this.props.hideButton &&
                <button style={styles.edit} type="button"
                        onClick={this.props.onButtonClick}>
                    {this.props.editing ? <span style={styles.save}>Save</span> : <span>Edit</span>}
                </button>
                }
            </div>
        );
    }
}

export default Header;