import React from "react";

class QuestionControl extends React.Component {
  constructor(props: string) {
    super(props);
    this.state = {}
  }

  handleClick = () => {
    console.log("Click")
  }

  render() {
    return (
      <React.Fragment>
        <input type="text" placeholder="Ask Me a Question"/>
        <button onClick={this.handleClick} >Give Me an Answer</button>
      </React.Fragment>
    );
  }
}

export default QuestionControl;