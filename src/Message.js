import React from 'react';
import './Message.css';

const Message = (props = {
  msg : "post message blank",
  posted : Date(Date.now()).toString()
}) => (
  <div className="msg">
    <article className="msg-txt">{props.msg}</article>
    <label className="msg-posted">{props.posted}</label>
  </div>
);

export default Message;
