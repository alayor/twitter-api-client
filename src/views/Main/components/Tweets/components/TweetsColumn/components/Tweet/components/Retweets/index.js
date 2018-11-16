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
        const retweeters = await twitterClient.getRetweeters(this.props.tweetId)
        this.setState({retweeters})
    }

    render() {
        if (!this.state.retweeters || !this.state.retweeters.length) {
            return <div />
        }
        return (
            <div style={{...styles.container, border: '3px solid #00000'}}>
                <div style={styles.usernames}>
                    {this.state.retweeters.slice(0, 5).map(r => {
                        return <div key={r} style={styles.retweeter}>
                            {r.name} ({r.screen_name})
                        </div>
                    })}
                    {this.state.retweeters.length > 5 && 'More...'}
                </div>
            </div>
        )
    }
}

export default Retweets