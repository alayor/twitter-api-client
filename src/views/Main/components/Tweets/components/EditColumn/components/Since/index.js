import React, {Component} from 'react';
import {styles} from './styles'

class Since extends Component {
    render() {
        return (
            <div style={styles.container}>
                <form>
                    <label style={styles.label}>for the</label>
                    <select style={styles.select} onChange={this.props.onSinceChange} value={this.props.since}>
                        <option key='60' value='60'>Last hour</option>
                        <option key='360' value='360'>Last 6 hours</option>
                        <option key='720' value='720'>Last 12 hours</option>
                        <option key='1440' value='1440'>Last 24 hours</option>
                        <option key='10080' value='10080'>Last 7 days</option>
                        <option key='21600' value='21600'>Last 15 days</option>
                        <option key='43200' value='43200'>Last 30 days</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default Since;