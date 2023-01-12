import React from "react";


class QuestionControl extends React.Component {
  constructor(props: string) {
    super(props);
    this.state = {}
  }
  
  
  handleClick = () => {
    const answersArray = ['yes', 'no', 'maybe', 'absolutely not', 'looking positive']
    const random = Math.floor(Math.random() * answersArray.length);
    console.log(random, answersArray[random]);
  }

  render() {
    return (
      <React.Fragment>
        <input type="text" placeholder="Ask Me a Question" required/>
        <button onClick={this.handleClick} >Give Me an Answer</button>
      </React.Fragment>
    );
  }
}

export default QuestionControl;