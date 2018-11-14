import React, {Component} from 'react';
import {styles} from './styles'
import time from 'time-ago'
import moment from 'moment'
import * as twitterClient from '../../../../../../../../services/twitterClient'

class Tweet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            retweetUsers: []

        }
    }

    async componentDidMount() {
        const retweets = await twitterClient.getRetweets(this.props.tweet.id_str)
        const retweetUsers = retweets.map(r => r.user.name)
        this.setState({
            retweetUsers
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
                    <span style={styles.retweet}>RT {this.props.tweet.retweet_count}</span>
                    <a style={styles.link} target="_blank" href={tweetLink}>Link</a>
                </div>

            </div>
        );
    }
}

export default Tweet;