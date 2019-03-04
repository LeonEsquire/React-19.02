import React from 'react';

export default class LifeCycleUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('1. getDerivedStateFromProps(nextProps, prevState)')
    return null;
  }

  shouldComponentUpdate(state, props)
  {
    console.log('2. shouldComponentUpdate()');
    return true;
  }

  render() {
    console.log('3. render()');
    return (<div>
      {this.state.count}
      <button onClick={() => {
        this.setState({count: this.state.count + 1});
      }}>Увеличить счетчик</button>
    </div>);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('4. getSnapshotBeforeUpdate(prevProps, prevState)')
    return 545;
  }

  componentDidUpdate(prevProps, prevState, snapshot)
  {
    console.log('5. componentDidUpdate(prevProps, prevState, snapshot)')
  }

}