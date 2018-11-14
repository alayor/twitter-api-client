import React, { Component } from 'react';
import { styles } from './styles'
import ColumnHeader from '../_common/components/ColumnHeader'

class EditColumn extends Component {

    getNumberOfTweets = (user) => {
        return localStorage.getItem(`${user}_numberOfTweets`) || '10'
    }

    onNumberOfTweetsChange = (user) => () => {

    }

    render() {
        return (
            <div style={styles.container}>
                <ColumnHeader
                    switch={this.props.switch}
                    editing={true}
                    user={this.props.user}/>
                <form>
                    <label>Tweets Number</label>
                    <select onChange={this.onNumberOfTweetsChange(this.props.user)} value={this.getNumberOfTweets(this.props.user)}>

                    </select>
                </form>
            </div>
        );
    }
}

export default EditColumn;