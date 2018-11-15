import React, { Component } from 'react';
import { styles } from './styles'
import ColumnHeader from '../_common/components/ColumnHeader'
import NumberOfTweets from './components/NumberOfTweets'
import Since from './components/Since'

class EditColumn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numberOfTweets: localStorage.getItem(`${this.props.user}_numberOfTweets`) || '10',
            since: localStorage.getItem(`${this.props.user}_since`) || '43200'
        }
    }

    onNumberOfTweetsChange = (event) => {
        this.setState({
            numberOfTweets: event.target.value
        })
    }

    onSinceChange = (event) => {
        this.setState({
            since: event.target.value
        })
    }

    onSave = () => {
        localStorage.setItem(`${this.props.user}_numberOfTweets`, this.state.numberOfTweets)
        localStorage.setItem(`${this.props.user}_since`, this.state.since)
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
                <div style={styles.form}>
                    <NumberOfTweets
                        onNumberOfTweetsChange={this.onNumberOfTweetsChange}
                        numberOfTweets={this.state.numberOfTweets}
                    />
                    <Since
                        onSinceChange={this.onSinceChange}
                        since={this.state.since}
                    />
                </div>
            </div>
        );
    }
}

export default EditColumn;