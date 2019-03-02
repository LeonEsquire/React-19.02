import React from "react";

class WelcomeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }
    componentDidMount() {
        this.setState({modal: true});
    }
    drawComponent() {
		// в классе объявить hidewcWnd, очевидно почему, не удалось
		const hidewcWnd = () => {
			this.setState({modal: false})
		}
        return (<div className="wcWnd">
            <div className="wcWnd-h">Приветствуем!</div>
            <div className="wcWnd-text">Эта страница сделана на React!</div>
            <button onClick={hidewcWnd}>Скрыть</button>
        </div>);
    }
    render() {
        return (<>{this.state.modal ? this.drawComponent() : null}</>)
    }
}
export default WelcomeModal;
