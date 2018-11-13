import React, { Component } from 'react';
import { styles } from './styles'
import TweetsColumn from './components/TweetsColumn'

class Tweets extends Component {
    render() {
        return (
            <div style={styles.container}>
               <TweetsColumn/>
               <TweetsColumn/>
               <TweetsColumn/>
            </div>
        );
    }
}

export default Tweets;