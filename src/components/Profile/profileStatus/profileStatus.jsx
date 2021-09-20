import s from './profileStatus.module.css'

import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }

    deactiveteEditMode() {
        this.setState({
            editMode: false
        })
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                {
                    this.state.editMode ?
                        (<div>
                            <h3>Status: <input onBlur={this.deactiveteEditMode.bind(this)} autoFocus
                                               value={this.props.status}/>
                            </h3>
                        </div>)
                        :
                        (<div>
                            <h3>Status: <span
                                onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span></h3>
                        </div>)
                }


            </div>

        );
    }

}

export default ProfileStatus;
