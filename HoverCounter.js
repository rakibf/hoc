import React from "react";
import withCounter from "./withCounter";

class HoverCounter extends React.Component {
  render() {
    // extraProp was sent to new compo withCounter HOC > withCounter sent to this compo
    console.log(this.props.extraProp);
    return (
      <div
        onMouseOver={this.props.incrementCount}
        className="border border-red-700 h-96 w-96"
      >
        <h1>Hovered {this.props.count} times!</h1>
        {/* comments received from DataSource in withCounter */}
        <div>
            <p>{this.props.comment.text}</p>
        </div>
      </div>
    );
  }
}

// we are exporting a component with functionalities
// the exported component returns the original component
export default withCounter(HoverCounter, (DataSource, props) => DataSource.getComment(props.commentId));
