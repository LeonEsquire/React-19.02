import React from "react";
import { Button, Modal } from 'react-bootstrap';

export default class WelcomeModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    componentDidMount()
    {
        this.setState({ showModal: true });
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render() {
        return (
            <div>
                <Modal onHide={this.close} show={this.state.showModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Название модального окна</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Заголовок текста окна</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa cumque, delectus deserunt dolore doloremque ipsam ipsum iusto laudantium necessitatibus quae quos repudiandae sapiente similique temporibus totam, voluptate, voluptates voluptatum</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
};