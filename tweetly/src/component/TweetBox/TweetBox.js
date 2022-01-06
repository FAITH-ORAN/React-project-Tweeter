import React,{Component} from 'react';
import PropTypes from 'prop-types';
import  "../../style/TweetBox.css";

console.log(PropTypes)
 console.log("component", Component);

class TweetBox extends React.Component {
    static propTypes = {
        publish:PropTypes.func.isRequired,
    };
    state={
        value:"",
    };

    handleChange=(event)=>{
        this.setState({value:event.target.value})
    }
    handleSubmit=()=>{
        const{value}=this.state;//récuperer la valeur actuelle
        const {publish}=this.props;
        if(value.length && value.length<=140){
            //publier
             publish(value);

            this.setState({value:""});//remtter le compteur à 0
        }
    }

    //setState relance la méthode render()



    // UNSAFE_componentWillMount() {
    //     console.log("will mount")
    //     // avant que le composant soit monté
    // }

    // componentDidMount() {
    //     console.log("did mount")
    //     // apres que le composant soit monté
    // }
render() {
    // console.log("render"); a chque fois que je tape une lettre dans la textarea un render s'affiche
    const{value} = this.state;//décomposer la value
    
    //console.log("render")
    return(
        <div className="tweetbox">
           <textarea rows={3} maxLength={140} placeholder="composez votre tweet" 
               value={value}
               onChange={this.handleChange}
               
           />
           <div className="action">
               <span className="count">{140- value.length}</span>
               <button className="btnTweet" type="button" disabled={!value.length|| value.length >140}
               onClick={this.handleSubmit}
               >
               Tweet
               </button>
           </div>
        </div>
    ) 
    
}
}

export default TweetBox;