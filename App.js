import React, { Component } from 'react';
import { Modal, Button } from 'semantic-ui-react';

class App extends Component {
    state = { open: false }

    show = () => {
        console.log("Hello World");
        this.setState({  open: true })
    }


    close = () => this.setState({ open: false })



    render() {
        const { open, size } = this.state


        setTimeout(() => {
            this.show();
        }, 5000);

        return (
            <div>
                <h1>Hello World</h1>

                {/* <Button onClick={this.show('small')}>Fullscreen</Button> */}

                <Modal size={size} open={open} onClose={this.close}>
                    <Modal.Header>
                        Delete Your Account
                    </Modal.Header>
                    <Modal.Content>
                        <p>Are you sure you want to delete your account</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button negative>
                            No
                        </Button>
                        <Button positive icon='checkmark' labelPosition='right' content='Yes' />
                    </Modal.Actions>
                </Modal>

            </div>
        );
    }
}

export default App;



// Two ways
// NPM Packages
    // react-notifications
    // toaster