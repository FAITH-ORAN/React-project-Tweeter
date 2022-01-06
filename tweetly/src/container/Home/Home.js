import React,{Component} from 'react';
import moment from 'moment';
import "../../style/Home.css";
import{tweets} from "../../constant";
import Tweetly from "../../component/Tweetly";
import TweetBox from "../../component/TweetBox";
console.log(Component);
//creer un container comme le main
// const Home=(props)=>{
//     return <div className="homepage">
                
//                     {props.children}
                
            
//             </div>
// }

class Home extends Component {
    state={
        tweets,
    };
    publish=(tweet)=>{
      const{tweets}=this.state;
      this.setState({
          tweets:[{ 
            avatarUrl: 'https://cdn.pixabay.com/photo/2019/06/01/21/08/profile-4245048_960_720.jpg',
            username:"faith",
            fullname:"Faiza Berrichi",
            content:tweet,//le contenu de la textarea
            date:moment().format("DD/MM/YYYY")},
        ...tweets,],
        });
    };
    remove=(index)=>{
        const{tweets}=this.state;
        this.setState({tweets:tweets.filter((tweet,i)=>i !==index)});
    };
    render() {
        const{tweets}=this.state;
        return (
            <><div><TweetBox publish={this.publish} /></div>
            <div className="homepage">
                
                {tweets.map((tweet, index) => (
                    <Tweetly
                        key={index}
                        index={index}
                        remove={this.remove}
                        fullname={tweet.fullname}
                        content={tweet.content}
                        avatarUrl={tweet.avatarUrl}
                        username={tweet.username}
                        date={tweet.date}

                        {...tweet} //spread operator all the props are here
                    />
                ))}


            </div></>
        )
    }
}

export default Home;