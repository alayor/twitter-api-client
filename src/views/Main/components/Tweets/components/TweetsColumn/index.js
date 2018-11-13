import React, { Component } from 'react';
import { styles } from './styles'
import ColumnHeader from '../_common/components/ColumnHeader'
import Tweet from './components/Tweet'

class TweetsColumn extends Component {
    render() {
        return (
            <div style={styles.container}>
                <div><ColumnHeader id={this.props.id} switch={this.props.switch}/></div>
                <div style={styles.tweets}>
                    <Tweet/>
                    <Tweet/>
                    <Tweet/>
                    <Tweet/>
                </div>
            </div>
        );
    }
}

export default TweetsColumn;