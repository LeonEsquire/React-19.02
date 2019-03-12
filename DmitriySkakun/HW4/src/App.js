import React from 'react';
import ReactDOM from 'react-dom';
// import Menu from './Menu';
// import EnterLogin from './Login';
import './app/styles/style.css';
// import DisplayElement from './app/components/DisplayElement'
import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';



class App extends React.Component {
    

    render(){
        const postBlog = [
            {
                title: 'About JS',
                postBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sapiente ducimus tempore libero, minima amet maxime quia nobis sint eos minus soluta tempora aliquid ipsa quis consectetur voluptatem laudantium similique!',
                author: 'Maks Denissoff'
            },
            {
                title: 'About ReactJS',
                postBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sapiente ducimus tempore libero, minima amet maxime quia nobis sint eos minus soluta tempora aliquid ipsa quis consectetur voluptatem laudantium similique!',
                author: 'Lena Webgirl'
            },
            {
                title: 'About Redux',
                postBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sapiente ducimus tempore libero, minima amet maxime quia nobis sint eos minus soluta tempora aliquid ipsa quis consectetur voluptatem laudantium similique!',
                author: 'Alan Turing'

            },
            {
                title: 'About Developer',
                postBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sapiente ducimus tempore libero, minima amet maxime quia nobis sint eos minus soluta tempora aliquid ipsa quis consectetur voluptatem laudantium similique!',
                author: 'Dmitriy Skakun)'
            }
        ];

        return (
            <>
            <WelcomeModal/>
            <Blog  items = {postBlog}/>
          </>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));