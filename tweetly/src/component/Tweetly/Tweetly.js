import React,{Component} from 'react';
import PropTypes from 'prop-types';
import "../../style/Tweet.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { faUser} from '@fortawesome/free-solid-svg-icons'


console.log(Component);

class Tweetly extends React.Component {
static propTypes = {
  username:PropTypes.string,
  fullname:PropTypes.string,
  content:PropTypes.string,
  date:PropTypes.string,
  avatarUrl:PropTypes.string,
  remove:PropTypes.func.isRequired,
};
state={
  isFocus:false,
};
handleFocus=({type})=>{
  this.setState({isFocus: type==='mouseenter'})
}
render() {
  
  const {fullname,content,avatarUrl,username,date,index,remove}=this.props;
  const{isFocus}=this.state;
  return(
    <div className="tweet">
      <div className="card-header" id="header">
              <img src="https://cdn.wallpapersafari.com/33/66/VIHeE1.jpg" alt="tweeter"/>
      </div>
      <div className="data">
            <div className="infos">
              <strong>{fullname}</strong>
            {/* ternary fonction */}
              {username==="faith"? (

                        <FontAwesomeIcon className="gray trash " icon={isFocus ?faTrash:faTrashAlt } 
                        onMouseEnter={this.handleFocus} onMouseLeave={this.handleFocus}
                        onClick={()=>remove(index)} />
                      ):(
                         <FontAwesomeIcon icon={faUser } />
                      )}
             
            </div>
            <div className="content">
                <p>{content}</p>
            </div>
 
            <div className="author">
              <div className="avatar">
                  <img src={avatarUrl} role ="presentation" alt="avatar" />
              </div>
              <div className="author-info">
                      <strong className="animated-bg " id="name">{username}</strong>
                      <small className="animated-bg " id="date">{date}</small>
              </div>
            </div> 
          </div>
      </div>
  )
}

}


// const Tweetly=({fullname,content,avatarUrl,username,date})=>{
//  return 
// };
// 

export default Tweetly;