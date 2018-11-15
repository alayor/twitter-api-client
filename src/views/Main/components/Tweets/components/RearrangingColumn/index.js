import React, {Component} from 'react';
import {styles} from './styles'

class RearrangingColumn extends Component {
    constructor(props) {
        super(props)
        this.drag = this.drag.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    drag = (event) => {
        const target = event.target
        event.dataTransfer.setData("user", this.props.user)
        setTimeout(function () {
            target.style.visibility = "hidden"
        }, 1)
    }
    onDrop = (event) => {
        const source = event.dataTransfer.getData("user")
        const destination = this.props.user
        this.props.swap(source, destination)
    }
    onDragEnd = (event) => {
        const target = event.target
        setTimeout(function () {
            target.style.visibility = ""
        }, 1)
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
                 onDragOver={this.allowDrop}
                 onDragEnd={e => this.onDragEnd(e)}>
                {'<-- '}{this.props.user}{' -->'}
            </div>
        );
    }
}

export default RearrangingColumn;