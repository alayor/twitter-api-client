import React from 'react'
import {styles} from './styles'
import Modal from 'react-modal'
import * as twitterClient from 'services/twitterClient'

Modal.setAppElement('#root')

class Retweets extends React.Component {
    constructor() {
        super()
        this.state = {
            retweeters: []
        }
    }

    async componentDidMount() {
        const retweeters = await twitterClient.getRetweeters(this.props.tweetId)
        this.setState({retweeters})
    }

    render() {
        return (
            <div>
                <Modal
                    isOpen={true}
                    style={styles.modal}
                    contentLabel="Retweets">
                    <button onClick={this.props.onClose}>close</button>
                    <div>
                        {this.state.retweeters.map(r => r.screen_name + ', ')}
                    </div>

                </Modal>
            </div>
        )
    }
}

export default Retweets