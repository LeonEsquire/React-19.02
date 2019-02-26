import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
  return (
    <div>
      <h1>React</h1>
      <div>Функциональный компонент</div>
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('#root'));