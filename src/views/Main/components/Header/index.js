import React, { Component } from 'react';
import { styles } from './styles'

class Header extends Component {
    render() {
        return (
            <div style={styles.container}>
                <span style={styles.title}>Awesome Twitter Viewer</span>
                <button style={styles.edit} type="button" onClick={this.props.switchNightMode}>
                    {this.props.nightMode ? 'Day' : 'Night'}
                </button>
                <button style={styles.edit} type="button" onClick={this.props.switchRearranging}>
                    {this.props.isRearranging ?
                        <span style={styles.done}>Done</span> :
                        <span>Rearrange Columns</span>}
                </button>
            </div>
        );
    }
}

export default Header;