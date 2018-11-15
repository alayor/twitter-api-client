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
        return (
            <div style={styles.container}>
                {this.state.retweeters.map(r => {
                    return <div key={r}>{r.name} ({r.screen_name})</div>
                })}
            </div>
        )
    }
}

export default Retweets