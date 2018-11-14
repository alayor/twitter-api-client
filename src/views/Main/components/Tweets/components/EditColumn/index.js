import React, { Component } from 'react';
import { styles } from './styles'
import ColumnHeader from '../_common/components/ColumnHeader'
import NumberOfTweets from './components/NumberOfTweets'

class EditColumn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numberOfTweets: localStorage.getItem(`${this.props.user}_numberOfTweets`) || '10'
        }
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
                <NumberOfTweets
                    onNumberOfTweetsChange={this.onNumberOfTweetsChange}
                    numberOfTweets={this.state.numberOfTweets}
                />
            </div>
        );
    }
}

export default EditColumn;