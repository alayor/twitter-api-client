import React, {Component} from 'react';
import {styles} from './styles'
import TweetsColumn from './components/TweetsColumn'
import EditColumn from './components/EditColumn'
import RearrangingColumn from './components/RearrangingColumn'
import { getTweets } from "../../../../services/twitterClient";

class Tweets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columnsEditing: {
                ['1']: false,
                ['2']: false,
                ['3']: false,
            },
            columns: [{
                id: '0',
                name: '',
                tweets: []
            }]
        }
    }

    async componentDidMount() {
        const makeSchoolTweets = await getTweets('makeschool', 30)
        const newsYCombinatorTweets = await getTweets('newsycombinator', 30)
        const myCombinatorTweets = await getTweets('ycombinator', 30)
        this.setState({
            columns: [{
                id: '1',
                name: '@makeschool',
                tweets: makeSchoolTweets
            }, {
                id: '2',
                name: '@newsycombinator',
                tweets: newsYCombinatorTweets
            }, {
                id: '3',
                name: '@ycombinator',
                tweets: myCombinatorTweets
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
                                return <RearrangingColumn id={c.id} name={c.name}/>
                            }
                            return this.state.columnsEditing[c.id] ?
                                <EditColumn switch={this.switch} id={c.id} name={c.name} /> :
                                <TweetsColumn switch={this.switch} id={c.id} name={c.name} tweets={c.tweets}/>
                        }
                    )
                }
            </div>
        )
    }
}

export default Tweets;