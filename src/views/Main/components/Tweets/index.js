import React, {Component} from 'react'
import Bluebird from 'bluebird'
import {styles} from './styles'
import TweetsColumn from './components/TweetsColumn'
import EditColumn from './components/EditColumn'
import RearrangingColumn from './components/RearrangingColumn'
import {getTweets} from "services/twitterClient"

class Tweets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columnsEditing: {},
            users: {},
            columns: ['newsycombinator', 'makeschool', 'ycombinator'],
        }
    }

    async componentDidMount() {
        await Bluebird.map(this.state.columns, async user => this.updateTweets(user))
    }

    updateTweets = async (user) => {
        const tweets = await getTweets(user)
        this.setState({
            users: {
                ...this.state.users,
                [user]: {
                    tweets
                }
            }
        })
    }

    swap = (user1, user2) => {
        const index1 = this.state.columns.indexOf(user1)
        const index2 = this.state.columns.indexOf(user2)
        const columns = this.state.columns.map((c, id) =>
            (id === index1) ? this.state.columns[index2] :
                (id === index2) ? this.state.columns[index1] : c
        )

        this.setState({
            columns
        })
    }

    switch = (user) => () => {
        this.state.columnsEditing[user] && this.updateTweets(user)
        this.setState({
            columnsEditing: {
                ...this.state.columnsEditing,
                [user]: !this.state.columnsEditing[user]
            }
        })
    }


    render() {
        return (
            <div style={styles.container}>
                {
                    this.state.columns.map(
                        user => {
                            if (!this.state.users[user]) {
                                return
                            }
                            if (this.props.isRearranging) {
                                return <RearrangingColumn swap={this.swap} key={user} user={user}/>
                            }
                            return this.state.columnsEditing[user] ?
                                <EditColumn key={user} switch={this.switch} user={user}/> :
                                <TweetsColumn key={user} switch={this.switch} user={user}
                                              tweets={this.state.users[user].tweets}/>
                        }
                    )
                }
            </div>
        )
    }
}

export default Tweets