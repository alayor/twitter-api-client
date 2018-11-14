import React, {Component} from 'react';
import {styles} from './styles'

class Tweet extends Component {
    render() {
        return (
            <div style={styles.container}>
                {this.props.tweet.text}
            </div>
        );
    }
}

export default Tweet;