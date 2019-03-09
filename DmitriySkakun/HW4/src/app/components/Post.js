import React from 'react';
// import ReactDom from 'react-dom';
// import './app/styles/style.css';

class Post extends React.Component{
    render(){
        console.log(this.props.children);
        return(
            
            <div className='link'>
                <h2>{this.props.children[0]}</h2>
                <p>{this.props.children[1]}</p>
                <h4>{this.props.children[2]}</h4>
            </div>
        );
    }
}

export default Post;