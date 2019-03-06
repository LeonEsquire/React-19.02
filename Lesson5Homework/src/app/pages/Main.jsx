import React from "react";
const fishtext = "Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor."
export default class Main extends React.Component {
  render() {
    return (
      <>
        <h1>Welcome to our page!</h1>
          <div>{fishtext}</div>
      </>
    );
  }
}
