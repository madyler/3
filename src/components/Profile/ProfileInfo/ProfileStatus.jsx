import React from "react";

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            status: this.props.status
        };

    }

    activateEditMode = () => {
        return this.setState({
            editMode: true
        });
    }

    deactivateEditMode() {
        return (
            this.setState({editMode: false}),
            this.props.updateStatus(this.state.status)
    )}
    onStatusChange(e) {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode
                           // .bind(this)
                        }>{this.state.status || "----"}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange.bind(this)} autoFocus={true}
                               onBlur={this.deactivateEditMode.bind(this)} value={this.state.status}/>
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus;