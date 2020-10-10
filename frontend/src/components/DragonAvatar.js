import React, { Component } from "react";

class DragonAvatar extends Component {
  render() {
    const { generationId, dragonId, traits } = this.props.dragon;

    if (!dragonId) return <div></div>;

    return (
      <div>
        <div>
          e04 08 Dragon啦！我generation ID:{generationId},dragon ID：{dragonId}
        </div>
        <div>
          08的樣子啦：{traits.map((trait) => trait.traitValue).join(", ")}
        </div>
      </div>
    );
  }
}

export default DragonAvatar;
