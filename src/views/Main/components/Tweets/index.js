import React, { Component } from 'react';
import { styles } from './styles'
import TweetsColumn from './components/TweetsColumn'
import EditColumn from './components/EditColumn'

class Tweets extends Component {
    render() {
        return (
            <div style={styles.container}>
               <EditColumn/>
               <TweetsColumn/>
               <TweetsColumn/>
            </div>
        );
    }
}

export default Tweets;