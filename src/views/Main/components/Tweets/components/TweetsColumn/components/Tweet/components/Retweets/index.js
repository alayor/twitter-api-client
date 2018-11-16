import React from 'react'
import * as twitterClient from 'services/twitterClient'
import { styles } from './styles'

class Retweets extends React.Component {
    constructor() {
        super()
        this.state = {
            retweeters: []
        }
    }

    async componentDidMount() {
        this.props.startSearching()
        const retweeters = await twitterClient.getRetweeters(this.props.tweetId)
        this.setState({retweeters})
        this.props.stopSearching()
    }

    render() {
        if (!this.state.retweeters || !this.state.retweeters.length) {
            return <div />
        }
        return (
            <div style={styles.container}>
                <div style={styles.usernames}>
                    {this.state.retweeters.map(r => {
                        return <div key={r}>{r.name} ({r.screen_name})</div>
                    })}
                </div>
            </div>
        )
    }
}

export default Retweets