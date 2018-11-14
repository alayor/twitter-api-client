import React from 'react'
import {styles} from './styles'
import Modal from 'react-modal'

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

class Retweets extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.isModalOpen}
                    style={styles.modal}
                    contentLabel="Retweets"
                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                    <button onClick={this.props.onClose}>close</button>
                    <div>I am a modal</div>

                </Modal>
            </div>
        )
    }
}

export default Retweets