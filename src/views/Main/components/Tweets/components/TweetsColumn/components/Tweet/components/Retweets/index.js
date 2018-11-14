import React from 'react'
import {styles} from './styles'
import Modal from 'react-modal'
import * as twitterClient from 'services/twitterClient'

Modal.setAppElement('#root')

class Retweets extends React.Component {
    constructor() {
        super()
        this.state = {
            retweets: []
        }
    }

    async componentDidMount() {
        const retweets = await twitterClient.getRetweets(this.props.tweetId)
        this.setState({retweets})
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
                        {this.state.retweets.map(r => r.user.name)}
                    </div>

                </Modal>
            </div>
        )
    }
}

export default Retweets