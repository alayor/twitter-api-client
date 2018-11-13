import React, { Component } from 'react';
import { styles } from './styles'

class EditColumn extends Component {
    render() {
        return (
            <div style={styles.container}>
                <form>
                    <label>Tweets Number</label>
                    <input type="text" value="10"/>
                </form>
            </div>
        );
    }
}

export default EditColumn;