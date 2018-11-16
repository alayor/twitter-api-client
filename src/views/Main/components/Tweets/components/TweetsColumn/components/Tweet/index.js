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

    startRetweetersSearching = () => {
        styles.retweet = {
            ...styles.retweet,
            cursor: 'wait'
        }
    }

    stopRetweetersSearching = () => {
        debugger
        styles.retweet = {
            ...styles.retweet,
            cursor: 'default'
        }
    }

    render() {
        const tweetLink = twitterClient.getTweetLink(this.props.tweet.user.id, this.props.tweet.id_str)
        return (
            <div>
                <div style={styles.tweet}>
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

                </div>
                {this.state.showRetweeters &&
                <Retweets
                    startSearching={this.startRetweetersSearching}
                    stopSearching={this.stopRetweetersSearching}
                    tweetId={this.props.tweet.id_str}
                />}
            </div>
        );
    }
}

export default Tweet;