import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDragon } from "../actions/dragon";
import DragonAvatar from "./DragonAvatar";
import { Button } from "react-bootstrap";

class Dragon extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.fetchDragon}> New Dragon </Button>
        <DragonAvatar dragon={this.props.dragon} />
      </div>
    );
  }
}

export default connect(({ dragon }) => ({ dragon }), { fetchDragon })(Dragon);
