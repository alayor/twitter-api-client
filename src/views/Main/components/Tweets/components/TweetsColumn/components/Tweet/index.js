import React, {Component} from 'react';
import {styles} from './styles'
import time from 'time-ago'
import moment from 'moment'
import * as twitterClient from 'services/twitterClient'
import Retweets from './components/Retweets'

class Tweet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            retweetModalIsOpen: false
        }
    }

    showRetweetsModal = () => {
        this.setState({
            retweetModalIsOpen: true
        })
    }

    closeRetweetsModal = () => {
        this.setState({
            retweetModalIsOpen: false
        })
    }

    render() {
        const now = moment()
        const date = moment(this.props.tweet.created_at)
        let dateToDisplay = time.ago(date)

        if (now.diff(date, 'days') > 0) {
            dateToDisplay = date.format('hh:mm a - MMM DD')
        }

        const tweetLink = twitterClient.getTweetLink(this.props.tweet.user.id,
            this.props.tweet.id_str)

        return (
            <div style={styles.container}>
                <div style={styles.text}>{this.props.tweet.text}</div>
                <div style={styles.date}>{dateToDisplay}</div>
                <div style={styles.footer}>
                    <button
                        type='button'
                        style={styles.retweet}
                        onClick={this.showRetweetsModal}
                    >
                        RT {this.props.tweet.retweet_count}
                    </button>
                    <a style={styles.link} target="_blank" href={tweetLink}>Link</a>
                </div>
                {this.state.retweetModalIsOpen &&
                <Retweets
                    onClose={this.closeRetweetsModal}
                    tweetId={this.props.tweet.id_str}
                />}
            </div>
        );
    }
}

export default Tweet;