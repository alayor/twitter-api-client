import React, { Component } from 'react';
import { styles } from './styles'
import ColumnHeader from '../_common/components/ColumnHeader'

class EditColumn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numberOfTweets: this.getNumberOfTweets(this.props.user)
        }
    }

    getNumberOfTweets = () => {
        return localStorage.getItem(`${this.props.user}_numberOfTweets`) || '10'
    }

    onNumberOfTweetsChange = (event) => {
        this.setState({
            numberOfTweets: event.target.value
        })
    }

    onSave = () => {
        localStorage.setItem(`${this.props.user}_numberOfTweets`, this.state.numberOfTweets)
        this.props.switch(this.props.user)()
    }

    render() {
        return (
            <div style={styles.container}>
                <ColumnHeader
                    switch={this.props.switch}
                    editing={true}
                    user={this.props.user}
                    onButtonClick={this.onSave}
                />
                <form>
                    <label>Tweets Number</label>
                    <select onChange={this.onNumberOfTweetsChange} value={this.state.numberOfTweets}>
                        <option key='5'>5</option>
                        <option key='10'>10</option>
                        <option key='15'>15</option>
                        <option key='20'>20</option>
                        <option key='25'>25</option>
                        <option key='30'>30</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default EditColumn;