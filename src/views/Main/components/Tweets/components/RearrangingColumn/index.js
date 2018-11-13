import React, { Component } from 'react';
import { styles } from './styles'

class RearrangingColumn extends Component {
    render() {
        return (
            <div style={styles.container} draggable="true">
                {this.props.id}
                {'<- Move ->'}
            </div>
        );
    }
}

export default RearrangingColumn;