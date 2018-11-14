import React, {Component} from 'react';
import {styles} from './styles'
import time from 'time-ago'
import moment from 'moment'

class Tweet extends Component {
    render() {
        const now = moment()
        const date = moment(this.props.tweet.created_at)
        let dateToDisplay = time.ago(date)

        if (now.diff(date, 'days') > 0){
            dateToDisplay = date.format('hh:mm a - MMM DD')
        }

        return (
            <div style={styles.container}>
                <div style={styles.text}>{this.props.tweet.text}</div>
                <div style={styles.date}>{dateToDisplay}</div>
            </div>
        );
    }
}

export default Tweet;