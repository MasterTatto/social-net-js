import React from 'react';


class ProfileStatus extends React.Component {
    valueRef = React.createRef()
    state = {
        editMode: false,
        status: this.props.status
    }

    deactiveteEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,

        })
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(PreProps, PreState) {
        if (PreProps.status !== this.props.status) {

            this.setState({
                status: this.props.status
            })
        }

    }

    render() {

        return (
            <div>
                {
                    this.state.editMode ?
                        (<div>
                            <h3>Status:
                                <input onBlur={this.deactiveteEditMode} autoFocus
                                       value={this.state.status}
                                       onChange={(e) => this.onStatusChange(e)}/>
                            </h3>
                        </div>)
                        :
                        (<div>
                            <h3>Status: <span
                                onDoubleClick={this.activateEditMode}>{this.props.status || '--------'}</span>
                            </h3>
                        </div>)
                }


            </div>

        );
    }

}

export default ProfileStatus;
