import React from 'react'
import * as twitterClient from 'services/twitterClient'

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
        return (
            <div>
                {this.state.retweeters.map(r => r.screen_name + ', ')}
            </div>
        )
    }
}

export default Retweets