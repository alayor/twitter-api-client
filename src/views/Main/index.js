import React, {Component} from 'react';
import Header from './components/Header'
import Tweets from './components/Tweets'

class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Tweets/>
            </div>
        );
    }
}

export default Main;
