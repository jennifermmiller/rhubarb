import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import Message from './Message';

class Timeline extends Component {
  render() {
    return (
      <div className="Timeline">
        <button onClick={() => browserHistory.push('/compose')} className="rh-btn">new post</button><br/>
        {
          this.props.msgs
          .map(m => <Message msg={m.msg} posted={m.posted} />)
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    msgs : state.tw
  }),
  null
)(Timeline);
