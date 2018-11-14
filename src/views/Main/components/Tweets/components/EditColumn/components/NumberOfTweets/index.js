import React, {Component} from 'react';
import {styles} from './styles'

class NumberOfTweets extends Component {
    render() {
        return (
            <div style={styles.container}>
                <form>
                    <label>Tweets Number</label>
                    <select onChange={this.props.onNumberOfTweetsChange} value={this.props.numberOfTweets}>
                        <option key='5' value='5'>5</option>
                        <option key='10' value='10'>10</option>
                        <option key='15' value='15'>15</option>
                        <option key='20' value='20'>20</option>
                        <option key='25' value='25'>25</option>
                        <option key='30' value='30'>30</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default NumberOfTweets;