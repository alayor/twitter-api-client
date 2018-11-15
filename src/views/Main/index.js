import React, {Component} from 'react'
import { styles } from './styles'
import Header from './components/Header'
import Tweets from './components/Tweets'
import { styles as tweetStyles } from './components/Tweets/components/TweetsColumn/components/Tweet/styles'

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            isRearranging: false,
            nightMode: false
        }
    }
    switchRearranging = () => {
        this.setState({
            isRearranging: !this.state.isRearranging
        })
    }
    switchNightMode = () => {
        if (this.state.nightMode) {
            tweetStyles.container = {
                ...tweetStyles.container,
                filter: 'none'
            }
        } else {
            tweetStyles.container = {
                ...tweetStyles.container,
                filter: 'invert(100%)'
            }
        }
        this.setState({
            nightMode: !this.state.nightMode
        })
    }
    render() {
        return (
            <div style={styles.container}>
                <Header
                    isRearranging={this.state.isRearranging}
                    nightMode={this.state.nightMode}
                    switchRearranging={this.switchRearranging}
                    switchNightMode={this.switchNightMode}
                />
                <Tweets isRearranging={this.state.isRearranging}/>
            </div>
        );
    }
}

export default Main;
