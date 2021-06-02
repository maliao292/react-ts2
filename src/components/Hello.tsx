import React, { Component } from "react";

export interface Props {}

export interface State {
}

class HOme extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { a: 1 };
  }
  render() {
    return <div>123</div>;
  }
}

export default HOme;
