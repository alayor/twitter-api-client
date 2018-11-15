import React, {Component} from 'react';
import {styles} from './styles'
import ColumnHeader from '../_common/components/ColumnHeader'
import Tweet from './components/Tweet'

class TweetsColumn extends Component {
    render() {
        return (
            <div style={styles.container}>
                <div><ColumnHeader
                    user={this.props.user}
                    switch={this.props.switch}
                    editing={false}
                    onButtonClick={this.props.switch(this.props.user)}
                    info={this.props.info}/></div>
                <div style={styles.tweets}>
                    {this.props.tweets.length ?
                        this.props.tweets.map(t => <Tweet key={t.id_str} tweet={t}/>) :
                        'No results.'
                    }
                </div>
            </div>
        );
    }
}

export default TweetsColumn;