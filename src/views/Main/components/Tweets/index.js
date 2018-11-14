import React, {Component} from 'react'
import Bluebird from 'bluebird'
import {styles} from './styles'
import TweetsColumn from './components/TweetsColumn'
import EditColumn from './components/EditColumn'
import RearrangingColumn from './components/RearrangingColumn'
import { getTweets } from "services/twitterClient"

class Tweets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columnsEditing: {
            },
            columns: []
        }
    }

    async componentDidMount() {
        const twitterUsers = ['makeschool', 'newsycombinator', 'ycombinator']
        await Bluebird.map(twitterUsers, async user => {
            const tweets = await getTweets(user, this.getNumberOfTweets(user))
            this.setState({
                columns: [
                    ...this.state.columns,
                    {
                        user,
                        tweets: tweets
                    }
                ]
            })
        })
    }

    getNumberOfTweets = (user) => {
        let numberOfTweets = localStorage.getItem(`${user}_numberOfTweets`)
        if (!numberOfTweets) {
            numberOfTweets = '10'
            localStorage.setItem(`${user}_numberOfTweets`, numberOfTweets)
        }

        return Number(numberOfTweets)
    }

    switch = (user) => () => {
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
                        c => {
                            if (this.props.isRearranging) {
                                return <RearrangingColumn key={c.user} user={c.user}/>
                            }
                            return this.state.columnsEditing[c.user] ?
                                <EditColumn key={c.user} switch={this.switch} user={c.user} /> :
                                <TweetsColumn key={c.user} switch={this.switch} user={c.user} tweets={c.tweets}/>
                        }
                    )
                }
            </div>
        )
    }
}

export default Tweets