import React from "react";

import $ from "jquery";
import "jquery.terminal";
import "jquery.terminal/css/jquery.terminal.css";
import commands from "./commmands";

class Terminal extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);
    var path = "~/";
    this.$el.terminal(commands(this.$el), {
      prompt: `[[b;#66ff33;]User@home:${path}$] `,
      greetings:
        "> This a Linux-based Web Terminal. \n" +
        "> Here you can learn basic commands of Linux. \n" +
        "> Type help to see more commands. \n",
    });
  }

  render() {
    return (
      <div
        style={{
          display: "block",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        ref={(el) => (this.el = el)}
      ></div>
    );
  }
}

export default Terminal;
