import React, {Component} from 'react';
import {styles} from './styles'

class RearrangingColumn extends Component {
    constructor(props) {
        super(props)
        this.drag = this.drag.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }
    drag = (event, user) => {
        event.dataTransfer.setData("user", this.props.user)
    }
    onDrop = (event, user) => {
        event.dataTransfer.getData("user")
    }
    allowDrop = (event) => {
        event.preventDefault()
    }
    render() {
        return (
            <div style={styles.container}
                 draggable={true}
                 onDragStart={e => this.drag(e, this.props.user)}
                 onDrop={e => this.onDrop(e, this.props.user)}
                 onDragOver={this.allowDrop}>
                {'<-- '}{this.props.user}{' -->'}
            </div>
        );
    }
}

export default RearrangingColumn;