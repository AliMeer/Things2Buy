import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
  state = {
    modal: false,
    name: null,
    listName: null,
    quantity: null,
    urgency: null
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChangeName = e => {
    this.setState({ [e.target.name]: e.target.value });
   
  };

  onChangeListName = e => {
    this.setState({ listName: e.target.value });
  };

  onChangeQuantity = e => {
    this.setState({ quantity: e.target.value });
  };
  onChangeUrgency = e => {
    this.setState({ urgency: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
      listName: this.state.listName,
      quantity: this.state.quantity,
      urgency: this.state.urgency
    };
    console.log(newItem);

    // Add item via addItem action
    this.props.addItem(newItem);

    

    this.setState({
      name: null,
    listName: null,
    quantity: null,
    urgency: null
    });

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Add Item
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add item to List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Name of Thing (Mandatory)"
                  onChange={this.onChangeName}
                />
                <Input
                  type="text"
                  name="listName"
                  id="item"
                  placeholder="List Name: e.g: My List (Optional)"
                  onChange={this.onChangeListName}
                />
                <Input
                  type="text"
                  name="quantity"
                  id="item"
                  placeholder="Quantity: 1 (Optional)"
                  onChange={this.onChangeQuantity}
                />
                <Input
                  type="text"
                  name="urgency"
                  id="item"
                  placeholder="Urgency: Normal (Optional)"
                  onChange={this.onChangeUrgency}
                />
                <Button color="dark" style={{ marginTop: '2rem' }} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);
