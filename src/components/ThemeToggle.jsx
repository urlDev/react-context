import React, { Component } from "react";

import { ThemeContext } from "../contexts/ThemeContext";

class ThemeToggle extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          return <button onClick={value.toggleTheme}>Toggle the theme</button>;
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ThemeToggle;
