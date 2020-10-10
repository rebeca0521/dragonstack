import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGeneration } from "../actions/generation";
import fetchStates from "../reducers/fetchStates";

const MINIMUN_DELAY = 3000;

class Generation extends Component {
  timer = null;

  componentDidMount() {
    this.fetchNextGeneration();
  }

  componentWillUnmount() {
    cleanTimeout(this.timer);
  }

  fetchNextGeneration = () => {
    this.props.fetchGeneration();

    let delay =
      new Date(this.props.generation.expiration).getTime() - new Date().getTime;

    if (delay < MINIMUN_DELAY) {
      delay = MINIMUN_DELAY;
    }

    this.timer = setTimeout(() => this.fetchNextGeneration(), delay);
  };

  render() {
    console.log(this.props);
    const { generation } = this.props;

    if (generation.status === fetchStates.error) {
      return <div>{generation.message}</div>;
    }

    return (
      <div>
        <h3>Generation {generation.generationId}. Expires on:</h3>
        {/* <!-- 使用.toString()是因為new Date(generation.expiration)是一個物件沒辦法被render --> */}
        <h4>{new Date(generation.expiration).toString()}</h4>
      </div>
    );
  }
}

// 讓store裡的state可以傳進來
const mapStateToProps = (state) => {
  const generation = state.generation;

  return { generation };
};

// 使Generation有dispatchGeneration為props，可以用來dispatch generaiton
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchGeneration: () => fetchGeneration(dispatch)
//   };
// };

const componentConnector = connect(mapStateToProps, { fetchGeneration });

export default componentConnector(Generation);
