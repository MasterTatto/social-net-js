import {Redirect} from "react-router-dom";

import React from "react";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => {
    return {
        auth: state.auth
    }
};
export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.auth.inAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}