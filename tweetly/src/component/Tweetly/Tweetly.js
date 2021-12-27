import React from 'react';
import "../../style/Tweet.css";

const Tweetly=(props)=>{
 return <div className="tweet">
 <div class="card-header" id="header">
        <img src="https://cdn.wallpapersafari.com/33/66/VIHeE1.jpg" alt="tweeter"/>
 </div>
 <div className="data">
      <div className="infos">
        <strong>{props.fullname}</strong>
      </div>
      <div className="content">
          <p>{props.content}</p>
      </div>
 
  <div className="author">
    <div className="avatar">
        <img src={props.avatarUrl} role ="presentation" alt="avatar" />
    </div>
    <div className="author-info">
            <strong className="animated-bg " id="name">{props.username}</strong>
            <small className="animated-bg " id="date">{props.date}</small>
    </div>
 </div> 
 </div>
 </div>
};
export default Tweetly;