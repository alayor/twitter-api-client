import React, {Component} from 'react';
import {styles} from './styles'
import time from 'time-ago'
import moment from 'moment'

class Date extends Component {
    render() {
        const now = moment()
        const date = moment(this.props.createdAt)
        let dateToDisplay = time.ago(date)
        if (now.diff(date, 'days') > 0) {
            dateToDisplay = date.format('hh:mm a - MMM DD')
        }
        return (
            <div style={styles.container}>
                {dateToDisplay}
            </div>
        );
    }
}

export default Date;