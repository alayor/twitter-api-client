import React, {Component} from 'react';
import {styles} from './styles'
import TweetsColumn from './components/TweetsColumn'
import EditColumn from './components/EditColumn'

class Tweets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columnsEditing: {
                ['1']: false,
                ['2']: false,
                ['3']: false,
            },
            columns: []
        }
    }

    componentDidMount() {
        this.setState({
            columns: [{
                id: '1'
            }, {
                id: '2'
            }, {
                id: '3'
            }]
        })
    }

    render() {
        return (
            <div style={styles.container}>
                {
                    this.state.columns.map(c => this.state.columnsEditing[c.id] ? <EditColumn/> : <TweetsColumn/>)
                }
            </div>
        )
    }
}

export default Tweets;