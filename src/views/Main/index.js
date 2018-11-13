import React, {Component} from 'react'
import { styles } from './styles'
import Header from './components/Header'
import Tweets from './components/Tweets'

class Main extends Component {
    render() {
        return (
            <div style={styles.container}>
                <Header/>
                <Tweets/>
            </div>
        );
    }
}

export default Main;
