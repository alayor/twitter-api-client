import React, {Component} from 'react';
import {styles} from './styles'
import ColumnHeader from '../_common/components/ColumnHeader'
import Tweet from './components/Tweet'

class TweetsColumn extends Component {
    render() {
        return (
            <div style={styles.container}>
                <div><ColumnHeader
                    id={this.props.id}
                    name={this.props.name}
                    switch={this.props.switch}
                    editing={false}/></div>
                <div style={styles.tweets}>
                    {this.props.tweets.map(t => <Tweet tweet={t}/>)}
                </div>
            </div>
        );
    }
}

export default TweetsColumn;