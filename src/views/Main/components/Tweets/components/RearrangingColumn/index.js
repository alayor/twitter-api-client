import React, {Component} from 'react';
import {styles} from './styles'

class RearrangingColumn extends Component {
    constructor(props) {
        super(props)
        this.drag = this.drag.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }
    drag = (event) => {
        event.dataTransfer.setData("user", this.props.user)
    }
    onDrop = (event) => {
        const source = event.dataTransfer.getData("user")
        const destination = this.props.user

    }
    allowDrop = (event) => {
        event.preventDefault()
    }
    render() {
        return (
            <div style={styles.container}
                 draggable={true}
                 onDragStart={e => this.drag(e)}
                 onDrop={e => this.onDrop(e)}
                 onDragOver={this.allowDrop}>
                {'<-- '}{this.props.user}{' -->'}
            </div>
        );
    }
}

export default RearrangingColumn;