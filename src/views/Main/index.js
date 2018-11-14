import React, {Component} from 'react'
import { styles } from './styles'
import Header from './components/Header'
import Tweets from './components/Tweets'

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            isRearranging: false
        }
    }
    switchRearranging = () => {
        this.setState({
            isRearranging: !this.state.isRearranging
        })
    }
    render() {
        return (
            <div style={styles.container}>
                <Header isRearranging={this.state.isRearranging} switchRearranging={this.switchRearranging}/>
                <Tweets isRearranging={this.state.isRearranging}/>
            </div>
        );
    }
}

export default Main;
