import React, {Component} from 'react';
import {styles} from './styles'
import TweetsColumn from './components/TweetsColumn'
import EditColumn from './components/EditColumn'
import RearrangingColumn from './components/RearrangingColumn'

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

    switch = (id) => () => {
        this.setState({
            columnsEditing: {
                ...this.state.columnsEditing,
                [id]: !this.state.columnsEditing[id]
            }
        })
    }


    render() {
        return (
            <div style={styles.container}>
                {
                    this.state.columns.map(
                        c => {
                            if (this.props.isRearranging) {
                                return <RearrangingColumn id={c.id}/>
                            }
                            return this.state.columnsEditing[c.id] ?
                                <EditColumn switch={this.switch} id={c.id}/> :
                                <TweetsColumn switch={this.switch} id={c.id}/>
                        }
                    )
                }
            </div>
        )
    }
}

export default Tweets;