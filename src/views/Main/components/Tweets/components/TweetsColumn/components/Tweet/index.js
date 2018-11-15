import React, {Component} from 'react';
import {styles} from './styles'
import time from 'time-ago'
import moment from 'moment'
import * as twitterClient from 'services/twitterClient'
import Retweets from './components/Retweets'
import Date from './components/Date'

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
        const text = this.props.tweet.text.substr(0, this.props.tweet.text.indexOf('http'))
        const link = this.props.tweet.text.substr(this.props.tweet.text.indexOf('http'))
        return (
            <div style={styles.container}>
                <div style={styles.text}>
                    {text}
                    <a target="_blank" href={link}>{link}</a>
                </div>
                <Date createdAt={this.props.tweet.created_at}/>
                <div style={styles.footer}>
                    <button
                        type='button'
                        style={styles.retweet}
                        onClick={this.showRetweetsModal}>
                        RT {this.props.tweet.retweet_count}
                    </button>

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