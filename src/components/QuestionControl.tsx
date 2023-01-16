
import React from "react";


class QuestionControl extends React.Component <{}, {answer: string }> {
  constructor(props: string) {
    super(props);
    this.state = {
      answer: ""
    }
  }
  
  
  handleClick = () => {
    const answersArray = ['yes', 'no', 'maybe', 'absolutely not', 'looking positive']
    const random = Math.floor(Math.random() * answersArray.length);
    this.setState({
      answer: answersArray[random]
    });
    
  }

  render() {
    return (
      <React.Fragment>
        <input type="text" placeholder="Ask Me a Question" required/>
        <button onClick={this.handleClick} >Give Me an Answer</button>
        <div>{this.state.answer}</div>
      </React.Fragment>
    );
  }
}

export default QuestionControl;