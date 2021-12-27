
import React from 'react';
import "../../style/App.css";
import {tweets} from "../../constant";
import Tweetly from "../../component/Tweetly";
import Home from "../Home";
console.log(tweets);
console.log(<Tweetly />);

const App=()=>{
return <main >
        <Home>
          {/* <Tweetly
            
            fullname={tweets[2].fullname}
            content={tweets[2].content}
            avatarUrl={tweets[2].avatarUrl}
            username={tweets[2].username}
            date={tweets[2].date}
          />

          <Tweetly
            
            fullname={tweets[1].fullname}
            content={tweets[1].content}
            avatarUrl={tweets[1].avatarUrl}
            username={tweets[1].username}
            date={tweets[1].date}
          />
          <Tweetly
            
            fullname={tweets[3].fullname}
            content={tweets[3].content}
            avatarUrl={tweets[3].avatarUrl}
            username={tweets[3].username}
            date={tweets[3].date}
          />
          <Tweetly
            
            fullname={tweets[0].fullname}
            content={tweets[0].content}
            avatarUrl={tweets[0].avatarUrl}
            username={tweets[0].username}
            date={tweets[0].date}
          /> affichage à la dure */} 

          {tweets.map((tweet, index)=>(
            <Tweetly 
              key={index}
              fullName={tweet.fullName}
              content={tweet.content}
              avatarUrl={tweet.avatarUrl}
              username={tweet.username}
              date={tweet.date}

              {...tweet}
            />
          ))}
        </Home>
 </main>

};

//j'ai passé mes propriété a mon composants qui est customizé dans Tweetly.js

export default App;