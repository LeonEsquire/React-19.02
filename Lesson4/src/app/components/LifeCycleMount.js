import React from 'react';

export default class LifeCycleMount extends React.Component {
  constructor(props) {
    super(props);
    console.log('1. constructor(props)');
    this.state = {
      display: false
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('2. getDerivedStateFromProps(nextProps, prevState)')
    return null;
  }

  render() {
    console.log('3. render()');
    return (<div>Это LifeCycleMount</div>);
  }

  componentDidMount(){
    console.log('4. componentDidMount()');
  }
}