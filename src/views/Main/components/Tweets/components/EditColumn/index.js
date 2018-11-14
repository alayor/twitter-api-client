import React, { Component } from 'react';
import { styles } from './styles'
import ColumnHeader from '../_common/components/ColumnHeader'

class EditColumn extends Component {
    render() {
        return (
            <div style={styles.container}>
                <ColumnHeader
                    switch={this.props.switch}
                    editing={true}
                    name={this.props.name}/>
                <form>
                    <label>Tweets Number</label>
                    <input type="text" value="10"/>
                </form>
            </div>
        );
    }
}

export default EditColumn;