//Animation delay credit to Sarah L. Fossheim

import React from "react";
export default class AnimatedText extends React.Component {
    render() {
      return (
        <span aria-label={this.props.copy} role={this.props.role}>
          {this.props.copy.split("").map(function(char, index){
            let style = {"animation-delay": (0.5 + index / 10) + "s"}
            return <span
              aria-hidden="true"
              key={index}
              style={style}>
              {char}
            </span>;
          })}
        </span>
      );
    }
  }