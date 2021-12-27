import React from 'react';
import "../../style/Home.css";
//creer un container comme le main
const Home=(props)=>{
    return <div className="homepage">
                
                    {props.children}
                
            
            </div>
}

export default Home;