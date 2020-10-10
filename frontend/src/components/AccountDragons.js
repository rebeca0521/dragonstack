import React, { Component } from "react"
import { connect } from "react-redux";
import { fetchAccountDragons } from "../actions/accountDragons"

class AccountDragons extends Component {
    componentDidMount(){
        this.props.fetchAccountDragons();
    }

    render(){
        return(
            <div>
                <h3>Account Dragons</h3>
            </div>
        )
    }
}

export default connect(
    ({accountDragons}) => ({accountDragons}),
    { fetchAccountDragons }
)(AccountDragons);