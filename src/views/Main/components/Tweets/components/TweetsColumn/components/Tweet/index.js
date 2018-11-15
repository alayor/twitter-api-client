import React, {Component} from 'react';
import {styles} from './styles'
import * as twitterClient from 'services/twitterClient'
import Retweets from './components/Retweets'
import Date from './components/Date'

class Tweet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showRetweeters: false
        }
    }

    render() {
        const tweetLink = twitterClient.getTweetLink(this.props.tweet.user.id, this.props.tweet.id_str)
        return (
            <div style={styles.container}>
                <div>
                    <a style={styles.text} target="_blank" href={tweetLink}>{this.props.tweet.text}</a>
                </div>
                <div style={styles.footer}>
                    <a style={styles.retweet}
                       onMouseEnter={() => this.setState({showRetweeters: true})}
                       onMouseLeave={() => this.setState({showRetweeters: false})}
                       onClick={this.showRetweetsModal}>
                        RT {this.props.tweet.retweet_count}
                    </a>
                    <Date style={styles.date} createdAt={this.props.tweet.created_at}/>
                </div>
                {this.state.showRetweeters &&
                <Retweets
                    tweetId={this.props.tweet.id_str}
                />}
            </div>
        );
    }
}

export default Tweet;