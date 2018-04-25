import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as actions from './Actions';
import './Compose.css';

class Compose extends Component {
  constructor(props){
    super(props);
    this.state = {
      textExpanded : false
    };
    this.onPost = this.onPost.bind(this);
  }
  onPost() {
    this.props.post(this.textarea.value);
    browserHistory.push('/timeline');
  }
  render() {
    let { textExpanded } = this.state;
    return (
      <div className="Compose">
        <textarea ref={t=>{this.textarea=t}} className={textExpanded?'ta-expand':''} /><br/>
        <button onClick={this.onPost} className="rh-btn">post</button>
        <button onClick={()=>browserHistory.push('/timeline')} className="rh-btn">cancel</button>
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    post : msg => dispatch(actions.post(msg))
  })
)(Compose);
